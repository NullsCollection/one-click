import { UploadCloud, Sparkles, Send } from "lucide-react";
import { StatusPill } from "../../ui";

const steps = [
  {
    number: "1",
    title: "Upload your content",
    description:
      "Drag & drop your image — single post or carousel. That's your only upload. Ever.",
    Icon: UploadCloud,
  },
  {
    number: "2",
    title: "Choose your mode",
    description:
      "Write it yourself, let AI generate it, or edit what AI creates. You're always in control.",

    Icon: Sparkles,
  },
  {
    number: "3",
    title: "Post everywhere",
    description:
      "Hit the button. Watch your content publish across all your platforms in seconds.",

    Icon: Send,
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <StatusPill
            className="mb-3 uppercase tracking-wider flex w-fit mx-auto"
            showIndicator={false}
          >
            How It Works
          </StatusPill>
          <h2 className="font-[family-name:var(--font-spline-sans)] text-4xl sm:text-5xl font-bold text-secondary mb-4 leading-tight">
            Three steps. That&apos;s it.
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-text font-[family-name:var(--font-poppins)] font-light">
            No tutorials, no complex setup, no learning curve. If you&apos;ve
            ever uploaded a photo, you already know how to use it.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {steps.map((step) => (
            <article
              key={step.number}
              className="relative rounded-2xl border border-gray-200 p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="mb-5 flex items-center justify-between">
                <div className="w-12 h-12 rounded-full bg-primary text-white font-[family-name:var(--font-spline-sans)] text-[15px] font-bold flex items-center justify-center shadow-[0_2px_6px_rgba(79,70,229,0.22),inset_0_-2px_0_rgba(0,0,0,0.18)]">
                  {step.number}
                </div>
                <div className="w-10 h-10 rounded-lg bg-white border border-gray-200 text-primary flex items-center justify-center">
                  <step.Icon className="w-5 h-5" />
                </div>
              </div>

              <h3 className="font-[family-name:var(--font-spline-sans)] text-xl font-bold text-secondary mb-2">
                {step.title}
              </h3>
              <p className="text-sm text-text font-[family-name:var(--font-poppins)] leading-relaxed mb-4">
                {step.description}
              </p>

              {step.number === "1" && (
                <div className="mb-4 rounded-xl border border-gray-200 bg-white p-3">
                  <div className="text-[10px] font-medium text-secondary uppercase tracking-wide mb-2">
                    IMAGES
                  </div>
                  <div className="border-2 border-dashed border-gray-300 rounded-lg p-5 text-center bg-gray-50/70">
                    <div className="flex flex-col items-center gap-2">
                      <div className="w-9 h-9 rounded-full bg-gray-100 flex items-center justify-center">
                        <UploadCloud className="w-4 h-4 text-text" />
                      </div>
                      <div>
                        <p className="text-xs font-medium text-secondary">
                          Drag & drop or click to upload
                        </p>
                        <p className="text-[11px] text-text/60 mt-0.5">
                          PNG, JPG, WEBP
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {step.number === "2" && (
                <div className="rounded-xl border border-gray-200 bg-white p-3">
                  <div className="text-[10px] font-medium text-secondary uppercase tracking-wide mb-2">
                    MODE
                  </div>
                  <div className="flex gap-1 bg-gray-50 border border-gray-200 rounded-lg p-1 mb-4">
                    <button className="flex-1 py-1.5 text-xs font-medium text-text rounded-md transition-all cursor-pointer hover:text-secondary">
                      Manual
                    </button>
                    <button className="flex-1 py-1.5 text-xs font-medium text-primary bg-white rounded-md shadow-sm transition-all cursor-pointer">
                      AI Mode
                    </button>
                    <button className="flex-1 py-1.5 text-xs font-medium text-text rounded-md transition-all cursor-pointer hover:text-secondary">
                      Hybrid
                    </button>
                  </div>

                  {/* Caption */}
                  <div className="relative bg-gray-50 border border-gray-200 rounded-lg p-3 mb-4 min-h-[60px]">
                    <p className="text-xs text-text leading-relaxed">
                      🚀 Excited to share our biggest product launch yet! Built
                      for creators who move fast and want results. Drop a 🔥 if
                      you're ready!
                    </p>
                  </div>
                </div>
              )}

              {step.number === "3" && (
                <div className="rounded-xl border border-gray-200 bg-white p-3">
                  <div className="text-[10px] font-medium text-secondary uppercase tracking-wide mb-2">
                    SUBMIT POST
                  </div>

                  <div className="relative bg-gray-50 border border-gray-200 rounded-lg p-2.5 mb-3 min-h-[48px]">
                    <p className="text-[11px] text-text leading-relaxed">
                      🚀 Excited to share our biggest launch yet. Built for
                      creators who move fast and want results.
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-3">
                    <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[11px] font-medium border border-primary bg-primary/10 text-primary">
                      Facebook
                    </span>
                    <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[11px] font-medium border border-primary bg-primary/10 text-primary">
                      LinkedIn
                    </span>
                  </div>

                  <button className="w-full bg-secondary text-white py-2 rounded-lg text-xs font-semibold flex items-center justify-center gap-2 hover:bg-secondary/90 transition-colors shadow-sm">
                    Submit
                  </button>
                </div>
              )}

              {/* <div className="flex flex-wrap gap-2">
                {step.tags.map((tag) => (
                  <span
                    key={tag}
                    className="inline-flex items-center rounded-full border border-primary/20 bg-primary/10 px-2.5 py-1 text-xs font-medium text-primary"
                  >
                    {tag}
                  </span>
                ))}
              </div> */}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
