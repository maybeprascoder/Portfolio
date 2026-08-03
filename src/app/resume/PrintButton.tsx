"use client";

import { Printer } from "lucide-react";

export default function PrintButton() {
  return (
    <button
      type="button"
      onClick={() => window.print()}
      className="inline-flex items-center gap-2 rounded-lg border border-white/20 px-5 py-2.5 text-sm font-semibold text-white transition-all hover:border-cyan-400/50 hover:text-cyan-400"
    >
      <Printer size={16} />
      Print Resume
    </button>
  );
}
