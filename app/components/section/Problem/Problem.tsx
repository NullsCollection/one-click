import { RefreshCw, Smartphone, PenTool, TrendingDown } from "lucide-react";
import { StatusPill } from "../../ui";

export default function Problem() {
  const painPoints = [
    {
      Icon: RefreshCw,
      title: "Uploading the same thing — twice",
      description:
        "You have great content. But you're stuck re-uploading the same image to every single platform, one by one.",
    },
    {
      Icon: Smartphone,
      title: "Switching between apps constantly",
      description:
        "Facebook, Instagram, LinkedIn, Twitter. Each one has its own login, its own upload flow, its own quirks.",
    },
    {
      Icon: PenTool,
      title: "Writing captions from scratch — every time",
      description:
        "You stare at a blank caption field. Again. For the same post. On the fourth platform today.",
    },
    {
      Icon: TrendingDown,
      title: "Inconsistent posting kills growth",
      description:
        "The friction is so high, you post less. Less posting means less reach. Your audience forgets you exist.",
    },
  ];

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <StatusPill
            className="mb-3 uppercase tracking-wider flex w-fit mx-auto"
            showIndicator={false}
          >
            The Problem
          </StatusPill>
          <h2 className="font-[family-name:var(--font-spline-sans)] text-4xl sm:text-5xl font-bold text-secondary mb-4 leading-tight">
            Posting content shouldn't take hours.
          </h2>
          <p className="text-lg text-text font-[family-name:var(--font-poppins)] font-light max-w-xl mx-auto">
            Every creator and social media manager knows the pain. The same
            content. The same captions. The same upload — over and over again.
          </p>
        </div>

        {/* Pain Points Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {painPoints.map((point, index) => (
            <div
              key={index}
              className="relative p-7 rounded-2xl border border-gray-200 bg-gray-50 hover:border-gray-300 hover:shadow-md transition-all duration-300 group overflow-hidden"
            >
              {/* Top gradient line */}
              <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

              <div className="flex items-center gap-4 border-b border-gray-200 pb-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <point.Icon className="w-6 h-6 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="font-[family-name:var(--font-spline-sans)] text-md font-bold text-secondary mb-2">
                    {point.title}
                  </h3>
                </div>
              </div>

              <p className="text-sm text-text font-[family-name:var(--font-poppins)] leading-relaxed mt-4">
                {point.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
