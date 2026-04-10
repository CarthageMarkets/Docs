"use client";

import { GLSLHills } from "@/components/ui/glsl-hills";
import { useState } from "react";

export default function Home() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) setSubmitted(true);
  };

  return (
    <div className="relative flex h-full w-full flex-col items-center justify-center overflow-hidden bg-black">
      <GLSLHills />
      <div className="pointer-events-none z-10 absolute inset-0 flex flex-col items-center justify-center px-6">
        <div className="pointer-events-auto max-w-2xl space-y-8 text-center">
          <p className="text-sm font-medium uppercase tracking-[0.3em] text-white/40">
            Coming Soon
          </p>

          <h1 className="text-5xl font-semibold tracking-tight text-white sm:text-7xl" style={{ fontFamily: 'var(--font-inter)' }}>
            <span className="block text-4xl font-thin italic text-white/70 sm:text-6xl">
              The AI Layer for
            </span>
            Prediction Markets
          </h1>

          <p className="mx-auto max-w-md text-base leading-relaxed text-white/50">
            Kalshi + Polymarket on one screen. AI-scored recommendations powered by
            real-time news. Signals hide themselves when data quality drops.
          </p>

          {!submitted ? (
            <form
              onSubmit={handleSubmit}
              className="mx-auto flex max-w-md flex-col gap-3"
            >
              <div className="flex flex-col gap-3 sm:flex-row">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="elon.musk@gmail.com"
                  className="h-12 flex-1 rounded-lg border border-white/15 bg-white/5 backdrop-blur-xl shadow-[inset_0_1px_0_0_rgba(255,255,255,0.06)] px-4 text-sm text-white placeholder:text-white/25 outline-none focus:border-white/30 focus:bg-white/8 transition-all"
                />
                <button
                  type="submit"
                  className="h-12 shrink-0 rounded-lg bg-white px-6 text-sm font-medium text-black transition-opacity hover:opacity-90"
                >
                  Get Early Access
                </button>
              </div>
              <a
                href="/founders"
                className="flex items-center justify-center h-12 rounded-lg border border-white/15 bg-white/5 backdrop-blur-xl shadow-[inset_0_1px_0_0_rgba(255,255,255,0.06)] px-6 text-sm font-medium text-white/70 transition-all hover:bg-white/10 hover:text-white"
              >
                Meet Founders
              </a>
            </form>
          ) : (
            <p className="text-sm font-medium text-white/70">
              You&apos;re on the list. We&apos;ll be in touch.
            </p>
          )}

          <div className="flex items-center justify-center gap-6 text-xs text-white/25">
            <span>Real-time sentiment</span>
            <span className="h-3 w-px bg-white/15" />
            <span>Confidence scoring</span>
            <span className="h-3 w-px bg-white/15" />
            <span>No stale signals</span>
          </div>
        </div>
      </div>
    </div>
  );
}
