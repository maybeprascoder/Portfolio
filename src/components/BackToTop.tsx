"use client";

import { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";

export default function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    function onScroll() {
      setVisible(window.scrollY > 400);
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!visible) return null;

  return (
    <button
      type="button"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      aria-label="Back to top"
      className="fixed bottom-6 right-6 z-40 flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-navy-800/90 text-slate-300 shadow-lg backdrop-blur-sm transition-all hover:border-cyan-400/40 hover:text-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/50"
    >
      <ArrowUp size={18} />
    </button>
  );
}
