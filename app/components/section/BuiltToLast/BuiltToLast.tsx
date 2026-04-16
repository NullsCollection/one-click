import { ShieldCheck, Database, Settings2, CalendarCheck2 } from "lucide-react";
import { StatusPill } from "../../ui";

const trustItems = [
  {
    title: "Secure Integrations",
    description:
      "OAuth-based connections. We never store your passwords. Your accounts stay yours.",
    Icon: ShieldCheck,
  },
  {
    title: "No Data Hoarding",
    description:
      "We only keep what is needed to post. Your content is not stored longer than necessary.",
    Icon: Database,
  },
  {
    title: "Reliable Automation",
    description:
      "Built on reliable automation systems with production-grade monitoring and uptime.",
    Icon: Settings2,
  },
  {
    title: "Consistent Posting",
    description:
      "Post when you want, every time, across platforms without manual repetition.",
    Icon: CalendarCheck2,
  },
];

export default function BuiltToLast() {
  return (
    <section id="built-to-last" className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <StatusPill
            className="mb-3 uppercase tracking-wider flex w-fit mx-auto"
            showIndicator={false}
          >
            Built to Last
          </StatusPill>
          <h2 className="font-[family-name:var(--font-spline-sans)] text-4xl sm:text-5xl font-bold text-secondary mb-4 leading-tight">
            Reliable by design.
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-text font-[family-name:var(--font-poppins)] font-light">
            Your content publishing is mission-critical. We treat it that way.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {trustItems.map((item) => (
            <article
              key={item.title}
              className="group p-7 rounded-2xl border border-gray-200 bg-white hover:border-primary/30 hover:shadow-lg transition-all duration-300 cursor-default"
            >
              <item.Icon className="w-9 h-9 text-primary mb-5 transition-transform duration-300 group-hover:scale-110" />
              <h3 className="font-[family-name:var(--font-spline-sans)] text-base font-bold text-secondary mb-2">
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
