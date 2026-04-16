import { UploadCloud, Globe, Sparkles, Workflow } from "lucide-react";
import { StatusPill } from "../../ui";

const featureItems = [
  {
    title: "Upload Once",
    description:
      "No more uploading the same content to each platform. Upload it once and we handle the rest — resizing, formatting, everything.",
    Icon: UploadCloud,
    dark: true,
  },
  {
    title: "Multi-Platform Posting",
    description:
      "Post simultaneously to Facebook, LinkedIn, Instagram, and X. All platforms updated in a single click.",
    Icon: Globe,
    dark: false,
  },
  {
    title: "AI Caption Generation",
    description:
      "Generate platform-ready captions instantly. Use as-is, tweak, or write your own.",
    Icon: Sparkles,
    dark: false,
  },
  {
    title: "Clean Workflow",
    description:
      "Everything in one place. No switching tools, no context switching. Upload, caption, post — start to finish in one screen.",
    Icon: Workflow,
    dark: false,
  },
];

export default function Features() {
  return (
    <section id="feature" className="py-24 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12 text-center">
          <StatusPill
            className="mb-3 uppercase tracking-wider flex w-fit mx-auto"
            showIndicator={false}
          >
            Features
          </StatusPill>
          <h2 className="font-[family-name:var(--font-spline-sans)] text-4xl sm:text-5xl font-bold text-secondary mb-4 leading-tight">
            One platform. One click. Everything posted.
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-text font-[family-name:var(--font-poppins)] font-light">
            Every feature is designed around one goal: get your content out
            faster with zero friction.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {featureItems.map((feature) => (
            <article
              key={feature.title}
              className={`relative overflow-hidden rounded-2xl border p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl cursor-default ${
                feature.dark
                  ? "bg-secondary border-secondary"
                  : "bg-white border-gray-200 hover:border-primary/30"
              }`}
            >
              {/* Background decoration */}
              {feature.dark ? (
                <div className="absolute -top-16 -right-16 w-40 h-40 rounded-full bg-primary/20 blur-3xl pointer-events-none" />
              ) : (
                <div className="absolute -top-10 -right-10 w-28 h-28 rounded-full bg-primary/8 blur-2xl pointer-events-none" />
              )}

              <div className="relative z-10">
                <div
                  className={`mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl border ${
                    feature.dark
                      ? "border-white/20 bg-white/10 text-white"
                      : "border-primary/15 bg-primary/10 text-primary"
                  }`}
                >
                  <feature.Icon className="h-5 w-5" />
                </div>
                <h3
                  className={`font-[family-name:var(--font-spline-sans)] text-xl font-bold mb-2 ${
                    feature.dark ? "text-white" : "text-secondary"
                  }`}
                >
                  {feature.title}
                </h3>
                <p
                  className={`text-sm font-[family-name:var(--font-poppins)] leading-relaxed ${
                    feature.dark ? "text-white/70" : "text-text"
                  }`}
                >
                  {feature.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
