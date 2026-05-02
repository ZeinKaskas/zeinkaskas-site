"use client";

import { useEffect, useRef, useCallback, useState } from "react";

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
  const imageDataRef = useRef<ImageData | null>(null);
  const dimsRef = useRef({ cols: 0, rows: 0 });
  const rafRef = useRef<number>(0);

  // Detect mobile / low-power device once on mount
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const mql = window.matchMedia("(max-width: 768px), (pointer: coarse)");
    setIsMobile(mql.matches);
  }, []);

  // Mobile gets smaller pixels (4 vs 6) and fewer drops (14 vs 80) so 60fps is reachable.
  // Desktop is intentionally untouched.
  const PIXEL = isMobile ? 4 : 6;
  const DROP_COUNT = isMobile ? 14 : 80;

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
    imageDataRef.current = null;
  }, [PIXEL]);

  useEffect(() => {
    const drops: Drop[] = [];
    for (let i = 0; i < DROP_COUNT; i++) {
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

    document.addEventListener("mousemove", handleMouseMove, { passive: true });
    if (!isMobile) {
      document.addEventListener("click", handleClick);
    }

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // ---------- Mobile-optimized loop ----------
    // Writes the trail directly into the ImageData buffer (Uint8ClampedArray),
    // skipping a separate Float32 trail array and skipping per-frame ImageData
    // allocation. Result: tighter inner loops, no GC churn, smaller pixels +
    // higher FPS at the same time.
    function drawMobile() {
      const { cols, rows } = dimsRef.current;
      if (cols === 0 || rows === 0) {
        rafRef.current = requestAnimationFrame(drawMobile);
        return;
      }

      let imageData = imageDataRef.current;
      if (!imageData || imageData.width !== cols || imageData.height !== rows) {
        imageData = ctx!.createImageData(cols, rows);
        // Pre-fill alpha to 255 once; we'll never touch it again.
        const d = imageData.data;
        for (let i = 3; i < d.length; i += 4) d[i] = 255;
        imageDataRef.current = imageData;
      }

      const data = imageData.data;
      const total = cols * rows * 4;
      const drops = dropsRef.current;
      const sparks = sparksRef.current;
      const mx = mouseRef.current.x / PIXEL;
      const my = mouseRef.current.y / PIXEL;

      // Fade RGB in place. Floor at 10 so the canvas keeps its dark glow
      // (matches the desktop "+10 base brightness" without an extra render pass).
      for (let i = 0; i < total; i += 4) {
        const r = data[i] * 247 >> 8;       // ~* 0.965
        const g = data[i + 1] * 247 >> 8;
        const b = data[i + 2] * 247 >> 8;
        data[i] = r > 10 ? r : 10;
        data[i + 1] = g > 10 ? g : 10;
        data[i + 2] = b > 10 ? b : 10;
      }

      // Sparks (still cheap; usually 0 on mobile since click-sparks are disabled)
      for (let i = sparks.length - 1; i >= 0; i--) {
        const s = sparks[i];
        s.vx *= 0.95;
        s.vy *= 0.95;
        s.vy += 0.008;
        s.x += s.vx;
        s.y += s.vy;

        if (Math.abs(s.vx) < 0.05 && s.vy > 0) {
          drops.push({
            x: s.x, y: s.y, color: s.color,
            speed: 0.15 + Math.random() * 0.4,
            alpha: s.alpha, bx: 0, by: 0,
          });
          sparks.splice(i, 1);
          continue;
        }

        const px = s.x | 0;
        const py = s.y | 0;
        if (px >= 0 && px < cols && py >= 0 && py < rows) {
          const idx = (py * cols + px) * 4;
          const r = (s.color[0] * s.alpha) | 0;
          const g = (s.color[1] * s.alpha) | 0;
          const b = (s.color[2] * s.alpha) | 0;
          if (r > data[idx]) data[idx] = r;
          if (g > data[idx + 1]) data[idx + 1] = g;
          if (b > data[idx + 2]) data[idx + 2] = b;
        }

        if (py > rows + 5 || px < -5 || px > cols + 5) sparks.splice(i, 1);
      }

      // Drops update + stamp
      for (const d of drops) {
        if (d.bx !== 0 || d.by !== 0) {
          d.x += d.bx;
          d.y += d.by;
          d.bx *= 0.92;
          d.by *= 0.92;
          if (Math.abs(d.bx) < 0.03 && Math.abs(d.by) < 0.03) {
            d.bx = 0; d.by = 0;
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

        const px = d.x | 0;
        const py = d.y | 0;
        if (px >= 0 && px < cols && py >= 0 && py < rows) {
          const idx = (py * cols + px) * 4;
          const r = (d.color[0] * d.alpha) | 0;
          const g = (d.color[1] * d.alpha) | 0;
          const b = (d.color[2] * d.alpha) | 0;
          if (r > data[idx]) data[idx] = r;
          if (g > data[idx + 1]) data[idx + 1] = g;
          if (b > data[idx + 2]) data[idx + 2] = b;
        }
      }

      ctx!.putImageData(imageData, 0, 0);

      rafRef.current = requestAnimationFrame(drawMobile);
    }

    // ---------- Desktop loop (UNCHANGED from original) ----------
    function drawDesktop() {
      const { cols, rows } = dimsRef.current;
      if (cols === 0 || rows === 0) {
        rafRef.current = requestAnimationFrame(drawDesktop);
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

      for (let i = 0; i < trailData.length; i += 4) {
        trailData[i] *= 0.97;
        trailData[i + 1] *= 0.97;
        trailData[i + 2] *= 0.97;
      }

      for (let i = sparks.length - 1; i >= 0; i--) {
        const s = sparks[i];
        s.vx *= 0.95;
        s.vy *= 0.95;
        s.vy += 0.008;
        s.x += s.vx;
        s.y += s.vy;

        if (Math.abs(s.vx) < 0.05 && s.vy > 0) {
          drops.push({
            x: s.x, y: s.y, color: s.color,
            speed: 0.15 + Math.random() * 0.4,
            alpha: s.alpha, bx: 0, by: 0,
          });
          sparks.splice(i, 1);
          continue;
        }

        const px = Math.floor(s.x);
        const py = Math.floor(s.y);
        if (px >= 0 && px < cols && py >= 0 && py < rows) {
          const idx = (py * cols + px) * 4;
          trailData[idx] = Math.max(trailData[idx], s.color[0] * s.alpha);
          trailData[idx + 1] = Math.max(trailData[idx + 1], s.color[1] * s.alpha);
          trailData[idx + 2] = Math.max(trailData[idx + 2], s.color[2] * s.alpha);
        }

        if (py > rows + 5 || px < -5 || px > cols + 5) sparks.splice(i, 1);
      }

      for (const d of drops) {
        if (d.bx !== 0 || d.by !== 0) {
          d.x += d.bx;
          d.y += d.by;
          d.bx *= 0.92;
          d.by *= 0.92;
          if (Math.abs(d.bx) < 0.03 && Math.abs(d.by) < 0.03) {
            d.bx = 0; d.by = 0;
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
          trailData[idx + 1] = Math.max(trailData[idx + 1], d.color[1] * d.alpha);
          trailData[idx + 2] = Math.max(trailData[idx + 2], d.color[2] * d.alpha);
        }
      }

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

      rafRef.current = requestAnimationFrame(drawDesktop);
    }

    if (isMobile) drawMobile();
    else drawDesktop();

    return () => {
      cancelAnimationFrame(rafRef.current);
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("click", handleClick);
      window.removeEventListener("resize", resize);
    };
  }, [resize, DROP_COUNT, PIXEL, isMobile]);

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
