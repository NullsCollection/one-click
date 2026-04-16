import { SlidersHorizontal, Zap, Target, BookOpen } from "lucide-react";
import { StatusPill } from "../../ui";

const differentiators = [
  {
    title: "Hybrid Mode",
    description:
      "AI drafts, you edit, and publishing stays automatic. You get control and speed in one workflow.",
    Icon: SlidersHorizontal,
  },
  {
    title: "Built for Speed",
    description:
      "No heavy dashboards or complicated setup. You can start posting in minutes, not hours.",
    Icon: Zap,
  },
  {
    title: "Execution First",
    description:
      "This is a posting engine, not a planning tool. The focus is simple: get content live quickly.",
    Icon: Target,
  },
  {
    title: "Zero Learning Curve",
    description:
      "If you know how to upload a photo, you already know how to use OneClick.",
    Icon: BookOpen,
  },
];

export default function WhyDifferent() {
  return (
    <section
      id="why-different"
      className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden bg-[#0d1526]"
    >
      {/* Background dot grid */}
      <div
        className="absolute inset-0 pointer-events-none opacity-40"
        style={{
          backgroundImage:
            "radial-gradient(circle, #2a3a55 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />
      {/* Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-64 pointer-events-none bg-gradient-radial from-primary/18 to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <StatusPill
            className="mb-3 uppercase tracking-wider flex w-fit mx-auto bg-primary/20 border-primary/30 text-primary"
            showIndicator={false}
          >
            Why We&apos;re Different
          </StatusPill>
          <h2 className="font-[family-name:var(--font-spline-sans)] text-4xl sm:text-5xl font-bold text-white mb-4 leading-tight">
            Built for execution, not complexity.
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-slate-400 font-[family-name:var(--font-poppins)] font-light">
            Most tools add complexity. We stripped things down to what creators
            and teams actually use.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {differentiators.map((item) => (
            <article
              key={item.title}
              className="flex items-start gap-5 rounded-2xl border border-white/[0.08] bg-white/[0.04] p-6 transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/[0.06] hover:border-white/[0.12] cursor-default"
            >
              <div className="flex-shrink-0 w-11 h-11 rounded-xl flex items-center justify-center bg-primary/20 border border-primary/30 text-indigo-400">
                <item.Icon className="h-5 w-5" />
              </div>
              <div>
                <h3 className="font-[family-name:var(--font-spline-sans)] text-lg font-bold text-white mb-1.5">
                  {item.title}
                </h3>
                <p className="text-sm text-slate-400 font-[family-name:var(--font-poppins)] leading-relaxed">
                  {item.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
