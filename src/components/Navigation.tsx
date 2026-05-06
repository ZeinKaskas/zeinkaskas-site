"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

interface NavigationProps {
  alwaysVisible?: boolean;
}

export default function Navigation({ alwaysVisible = false }: NavigationProps) {
  const [visible, setVisible] = useState(alwaysVisible);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    if (alwaysVisible) {
      setVisible(true);
      return;
    }
    const handleScroll = () => {
      setVisible(window.scrollY > window.innerHeight * 0.7);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [alwaysVisible]);

  return (
    <>
      <AnimatePresence>
        {visible && (
          <motion.nav
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.3 }}
            className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-5 md:px-10 h-[54px] bg-[rgba(10,10,10,0.88)] backdrop-blur-[20px] border-b border-[rgba(255,255,255,0.06)]"
          >
            <Link href="/" className="flex items-center">
              <Image
                src="/logos/zk-logo.png"
                alt="ZK"
                width={32}
                height={32}
                style={{ width: 32, height: "auto" }}
                unoptimized
              />
            </Link>

            {/* Desktop links */}
            <div className="hidden md:flex items-center gap-7">
              <Link
                href="/#services"
                className="text-[rgba(255,255,255,0.45)] text-[13px] hover:text-white transition-colors"
              >
                Services
              </Link>
              <Link
                href="/work"
                className="text-[rgba(255,255,255,0.45)] text-[13px] hover:text-white transition-colors"
              >
                Work
              </Link>
              <Link
                href="/about"
                className="text-[rgba(255,255,255,0.45)] text-[13px] hover:text-white transition-colors"
              >
                About
              </Link>
              <Link
                href="/faq"
                className="text-[rgba(255,255,255,0.45)] text-[13px] hover:text-white transition-colors"
              >
                FAQ
              </Link>
            </div>

            <div className="flex items-center gap-3.5">
              <Link
                href="/book"
                className="inline-block bg-white text-[#0A0A0A] px-[22px] py-[10px] rounded-lg text-[13px] font-semibold hover:opacity-90 transition-opacity"
              >
                Book a Call
              </Link>

              {/* Mobile hamburger */}
              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className="md:hidden flex flex-col gap-1.5 p-2"
                aria-label="Toggle menu"
              >
                <span className="block w-5 h-[1.5px] bg-white" />
                <span className="block w-5 h-[1.5px] bg-white" />
              </button>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>

      {/* Mobile menu overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-[#0A0A0A] flex flex-col items-center justify-center gap-8"
          >
            <button
              onClick={() => setMobileOpen(false)}
              className="absolute top-5 right-5 text-white text-2xl p-2"
              aria-label="Close menu"
            >
              &times;
            </button>
            <Link
              href="/#services"
              onClick={() => setMobileOpen(false)}
              className="text-white text-2xl font-semibold"
            >
              Services
            </Link>
            <Link
              href="/work"
              onClick={() => setMobileOpen(false)}
              className="text-white text-2xl font-semibold"
            >
              Work
            </Link>
            <Link
              href="/about"
              onClick={() => setMobileOpen(false)}
              className="text-white text-2xl font-semibold"
            >
              About
            </Link>
            <Link
              href="/faq"
              onClick={() => setMobileOpen(false)}
              className="text-white text-2xl font-semibold"
            >
              FAQ
            </Link>
            <Link
              href="/book"
              onClick={() => setMobileOpen(false)}
              className="bg-white text-[#0A0A0A] px-8 py-3 rounded-lg text-lg font-semibold"
            >
              Book a Call
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
