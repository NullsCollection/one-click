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
      className="py-24 px-4 sm:px-6 lg:px-8 bg-gray-50/70"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <StatusPill
            className="mb-3 uppercase tracking-wider flex w-fit mx-auto"
            showIndicator={false}
          >
            Why We&apos;re Different
          </StatusPill>
          <h2 className="font-[family-name:var(--font-spline-sans)] text-4xl sm:text-5xl font-bold text-secondary mb-4 leading-tight">
            Built for execution, not complexity.
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-text font-[family-name:var(--font-poppins)] font-light">
            Most tools add complexity. We stripped things down to what creators
            and teams actually use.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {differentiators.map((item) => (
            <article
              key={item.title}
              className="rounded-2xl border border-gray-200 bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl border border-primary/15 bg-primary/10 text-primary">
                <item.Icon className="h-5 w-5" />
              </div>
              <h3 className="font-[family-name:var(--font-spline-sans)] text-xl font-bold text-secondary mb-2">
                {item.title}
              </h3>
              <p className="text-sm text-text font-[family-name:var(--font-poppins)] leading-relaxed">
                {item.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
