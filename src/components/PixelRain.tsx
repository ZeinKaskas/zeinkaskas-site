"use client";

import { useEffect, useRef, useCallback } from "react";

const COLORS: [number, number, number][] = [
  [226, 40, 114],
  [136, 200, 236],
  [242, 190, 40],
  [240, 112, 48],
  [72, 184, 154],
  [24, 146, 74],
  [194, 30, 48],
  [60, 32, 104],
  [224, 144, 40],
  [122, 88, 130],
  [242, 165, 192],
];

function pick(): [number, number, number] {
  return COLORS[Math.floor(Math.random() * COLORS.length)];
}

interface Drop {
  x: number;
  y: number;
  color: [number, number, number];
  speed: number;
  alpha: number;
  bx: number;
  by: number;
}

interface Spark {
  x: number;
  y: number;
  vx: number;
  vy: number;
  color: [number, number, number];
  alpha: number;
}

export default function PixelRain() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const dropsRef = useRef<Drop[]>([]);
  const sparksRef = useRef<Spark[]>([]);
  const mouseRef = useRef({ x: -1000, y: -1000 });
  const shakeRef = useRef(0);
  const trailDataRef = useRef<Float32Array | null>(null);
  const dimsRef = useRef({ cols: 0, rows: 0 });
  const rafRef = useRef<number>(0);

  const PIXEL = 6;

  const resize = useCallback(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const W = container.offsetWidth;
    const H = container.offsetHeight;
    const cols = Math.ceil(W / PIXEL);
    const rows = Math.ceil(H / PIXEL);

    canvas.width = cols;
    canvas.height = rows;
    canvas.style.width = W + "px";
    canvas.style.height = H + "px";

    dimsRef.current = { cols, rows };
    trailDataRef.current = null;
  }, []);

  useEffect(() => {
    // Initialize drops
    const drops: Drop[] = [];
    for (let i = 0; i < 80; i++) {
      drops.push({
        x: Math.floor(Math.random() * 300),
        y: Math.floor(Math.random() * 200),
        color: pick(),
        speed: 0.15 + Math.random() * 0.4,
        alpha: 0.2 + Math.random() * 0.4,
        bx: 0,
        by: 0,
      });
    }
    dropsRef.current = drops;
    sparksRef.current = [];

    resize();
    window.addEventListener("resize", resize);

    const handleMouseMove = (e: MouseEvent) => {
      const container = containerRef.current;
      if (!container) return;
      const rect = container.getBoundingClientRect();
      mouseRef.current = { x: e.clientX, y: e.clientY - rect.top };
    };

    const handleClick = (e: MouseEvent) => {
      const container = containerRef.current;
      if (!container) return;
      const rect = container.getBoundingClientRect();
      if (e.clientY > rect.bottom || e.clientY < rect.top) return;

      const ex = e.clientX / PIXEL;
      const ey = (e.clientY - rect.top) / PIXEL;

      for (let i = 0; i < 8; i++) {
        const angle = (Math.PI * 2 / 8) * i + (Math.random() - 0.5) * 0.4;
        sparksRef.current.push({
          x: ex,
          y: ey,
          vx: Math.cos(angle) * 1.2,
          vy: Math.sin(angle) * 1.2,
          color: pick(),
          alpha: 0.2 + Math.random() * 0.4,
        });
      }

      for (const d of dropsRef.current) {
        const dx = d.x - ex;
        const dy = d.y - ey;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 60 && dist > 0) {
          const force = (1 - dist / 60) * 4;
          d.bx += (dx / dist) * force;
          d.by += (dy / dist) * force;
        }
      }

      shakeRef.current = 3;
    };

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("click", handleClick);

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    function draw() {
      const { cols, rows } = dimsRef.current;
      if (cols === 0 || rows === 0) {
        rafRef.current = requestAnimationFrame(draw);
        return;
      }

      if (
        !trailDataRef.current ||
        trailDataRef.current.length !== cols * rows * 4
      ) {
        trailDataRef.current = new Float32Array(cols * rows * 4);
      }

      const trailData = trailDataRef.current;
      const mx = mouseRef.current.x / PIXEL;
      const my = mouseRef.current.y / PIXEL;
      const drops = dropsRef.current;
      const sparks = sparksRef.current;

      // Fade trail
      for (let i = 0; i < trailData.length; i += 4) {
        trailData[i] *= 0.97;
        trailData[i + 1] *= 0.97;
        trailData[i + 2] *= 0.97;
      }

      // Update sparks
      for (let i = sparks.length - 1; i >= 0; i--) {
        const s = sparks[i];
        s.vx *= 0.95;
        s.vy *= 0.95;
        s.vy += 0.008;
        s.x += s.vx;
        s.y += s.vy;

        if (Math.abs(s.vx) < 0.05 && s.vy > 0) {
          drops.push({
            x: s.x,
            y: s.y,
            color: s.color,
            speed: 0.15 + Math.random() * 0.4,
            alpha: s.alpha,
            bx: 0,
            by: 0,
          });
          sparks.splice(i, 1);
          continue;
        }

        const px = Math.floor(s.x);
        const py = Math.floor(s.y);
        if (px >= 0 && px < cols && py >= 0 && py < rows) {
          const idx = (py * cols + px) * 4;
          trailData[idx] = Math.max(trailData[idx], s.color[0] * s.alpha);
          trailData[idx + 1] = Math.max(
            trailData[idx + 1],
            s.color[1] * s.alpha
          );
          trailData[idx + 2] = Math.max(
            trailData[idx + 2],
            s.color[2] * s.alpha
          );
        }

        if (py > rows + 5 || px < -5 || px > cols + 5) {
          sparks.splice(i, 1);
        }
      }

      // Update drops
      for (const d of drops) {
        if (d.bx !== 0 || d.by !== 0) {
          d.x += d.bx;
          d.y += d.by;
          d.bx *= 0.92;
          d.by *= 0.92;
          if (Math.abs(d.bx) < 0.03 && Math.abs(d.by) < 0.03) {
            d.bx = 0;
            d.by = 0;
          }
        }

        d.y += d.speed;

        const dx = d.x - mx;
        const dy = d.y - my;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 18 && dist > 0) {
          const push = (1 - dist / 18) * 1.5;
          d.x += (dx / dist) * push;
          d.y += (dy / dist) * push * 0.5;
        }

        if (d.y >= rows) {
          d.y = -1;
          d.x = Math.floor(Math.random() * cols);
          d.color = pick();
          d.alpha = 0.2 + Math.random() * 0.4;
        }

        const px = Math.floor(d.x);
        const py = Math.floor(d.y);
        if (px >= 0 && px < cols && py >= 0 && py < rows) {
          const idx = (py * cols + px) * 4;
          trailData[idx] = Math.max(trailData[idx], d.color[0] * d.alpha);
          trailData[idx + 1] = Math.max(
            trailData[idx + 1],
            d.color[1] * d.alpha
          );
          trailData[idx + 2] = Math.max(
            trailData[idx + 2],
            d.color[2] * d.alpha
          );
        }
      }

      // Render
      const imageData = ctx!.createImageData(cols, rows);
      const data = imageData.data;
      for (let i = 0; i < cols * rows; i++) {
        const pi = i * 4;
        data[pi] = Math.min(255, Math.round(10 + trailData[pi]));
        data[pi + 1] = Math.min(255, Math.round(10 + trailData[pi + 1]));
        data[pi + 2] = Math.min(255, Math.round(10 + trailData[pi + 2]));
        data[pi + 3] = 255;
      }
      ctx!.putImageData(imageData, 0, 0);

      // Shake
      const canvasEl = canvasRef.current;
      if (canvasEl) {
        if (shakeRef.current > 0.2) {
          canvasEl.style.transform = `translate(${
            (Math.random() - 0.5) * shakeRef.current
          }px,${(Math.random() - 0.5) * shakeRef.current}px)`;
          shakeRef.current *= 0.85;
        } else if (shakeRef.current > 0) {
          canvasEl.style.transform = "";
          shakeRef.current = 0;
        }
      }

      rafRef.current = requestAnimationFrame(draw);
    }

    draw();

    return () => {
      cancelAnimationFrame(rafRef.current);
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("click", handleClick);
      window.removeEventListener("resize", resize);
    };
  }, [resize]);

  return (
    <div ref={containerRef} className="absolute inset-0 overflow-hidden">
      <canvas
        ref={canvasRef}
        className="absolute top-0 left-0"
        style={{ imageRendering: "pixelated" }}
      />
    </div>
  );
}
