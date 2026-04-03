import { Play, Clock3, Sparkles } from "lucide-react";
import { StatusPill } from "../../ui";

export default function VideoDemo() {
  return (
    <section id="demo" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10">
          <StatusPill
            className="mb-3 uppercase tracking-wider flex w-fit mx-auto"
            showIndicator={false}
          >
            Product Demo
          </StatusPill>
          <h2 className="font-[family-name:var(--font-spline-sans)] text-3xl sm:text-4xl font-bold text-secondary mb-3">
            See it in action
          </h2>
          <p className="max-w-2xl mx-auto text-text text-base sm:text-lg font-[family-name:var(--font-poppins)] font-light">
            A quick walkthrough of the full flow: Upload, choose caption mode,
            and publish across platforms.
          </p>
        </div>

        <div className="relative overflow-hidden rounded-2xl border border-gray-200 bg-gradient-to-br from-slate-900 via-secondary to-slate-800 p-2 shadow-[0_18px_40px_rgba(31,43,72,0.25)]">
          <div className="absolute top-4 left-4 inline-flex items-center gap-2 rounded-full bg-white/10 border border-white/20 px-3 py-1 text-xs text-white backdrop-blur-sm">
            <Clock3 className="h-3.5 w-3.5" />
            90-sec walkthrough
          </div>

          <div className="absolute top-4 right-4 inline-flex items-center gap-2 rounded-full bg-primary/20 border border-primary/30 px-3 py-1 text-xs text-white backdrop-blur-sm">
            <Sparkles className="h-3.5 w-3.5" />
            SaaS Workflow Demo
          </div>

          <div className="relative aspect-video w-full rounded-xl bg-[radial-gradient(circle_at_30%_20%,rgba(79,70,229,0.35),transparent_45%),radial-gradient(circle_at_70%_80%,rgba(34,211,238,0.28),transparent_40%),linear-gradient(135deg,#0f172a,#1e293b)] border border-white/10">
            <div className="absolute inset-0 flex items-center justify-center">
              <button className="group inline-flex items-center gap-3 rounded-full bg-white text-secondary px-5 py-3 text-sm font-semibold shadow-lg hover:scale-105 transition-transform">
                <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-primary text-white">
                  <Play className="h-4 w-4 fill-current" />
                </span>
                Play Demo Video
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
