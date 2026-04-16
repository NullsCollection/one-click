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
    <section id="problem" className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {painPoints.map((point, index) => (
            <div
              key={index}
              className="relative p-7 rounded-2xl border border-gray-200 bg-white hover:border-primary/30 hover:shadow-lg transition-all duration-300 group overflow-hidden cursor-default"
            >
              {/* Large watermark number */}
              <div className="absolute top-2 right-4 font-[family-name:var(--font-spline-sans)] text-8xl font-bold text-gray-100 leading-none select-none pointer-events-none">
                {(index + 1).toString().padStart(2, "0")}
              </div>

              <div className="relative z-10">
                <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
                  <point.Icon className="w-5 h-5 text-primary" />
                </div>

                <h3 className="font-[family-name:var(--font-spline-sans)] text-base font-bold text-secondary mb-3 leading-snug">
                  {point.title}
                </h3>

                <p className="text-sm text-text font-[family-name:var(--font-poppins)] leading-relaxed">
                  {point.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
