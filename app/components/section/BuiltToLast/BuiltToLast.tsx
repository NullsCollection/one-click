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
              className="relative p-7 rounded-2xl border border-gray-200 bg-gray-50 hover:border-gray-300 hover:shadow-md transition-all duration-300 group overflow-hidden"
            >
              <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

              <div className="flex items-center gap-4 border-b border-gray-200 pb-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors text-primary">
                  <item.Icon className="h-6 w-6" />
                </div>
                <h3 className="flex-1 font-[family-name:var(--font-spline-sans)] text-md font-bold text-secondary">
                  {item.title}
                </h3>
              </div>

              <p className="text-sm text-text font-[family-name:var(--font-poppins)] leading-relaxed mt-4">
                {item.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
