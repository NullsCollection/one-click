"use client";

import { ArrowRight } from "lucide-react";
import { Button, StatusPill } from "../../ui";

export default function GetStarted() {
  return (
    <section
      id="get-started"
      className="relative overflow-hidden py-24 px-4 sm:px-6 lg:px-8 bg-slate-950"
    >
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[720px] h-[420px] bg-gradient-radial from-primary/25 via-primary/10 to-transparent" />
        <div className="absolute -bottom-40 right-[-120px] w-[420px] h-[420px] rounded-full bg-primary/10 blur-3xl" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <StatusPill
          className="mb-4 uppercase tracking-wider flex w-fit mx-auto bg-primary/20 border-primary/30 text-primary"
          showIndicator={false}
        >
          Get Started Today
        </StatusPill>

        <h2 className="font-[family-name:var(--font-spline-sans)] text-4xl sm:text-5xl font-bold text-white mb-4 leading-tight">
          Start posting in one click today.
        </h2>

        <p className="max-w-2xl mx-auto text-lg text-slate-300 font-[family-name:var(--font-poppins)] font-light mb-9">
          Join creators already saving hours every week. Choose the plan that
          fits your workflow and go live in under 2 minutes.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-5">
          <Button
            variant="primary"
            size="md"
            className="min-w-[220px]"
            onClick={() => (window.location.href = "#pricing")}
          >
            Get Started
            <ArrowRight size={18} />
          </Button>
          <a
            href="#how-it-works"
            className="inline-flex items-center justify-center min-w-[220px] px-6 py-3 text-base rounded-xl border border-slate-700 border-b-4 text-slate-200 font-medium font-[family-name:var(--font-poppins)] hover:border-primary/50 hover:text-white transition-colors active:border-b-2 active:translate-y-0.5"
          >
            See how it works
          </a>
        </div>
      </div>
    </section>
  );
}
