"use client";

import { ArrowRight, Workflow, Settings2, Plug } from "lucide-react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/app/context/AuthContext";
import { Button, StatusPill } from "../../ui";

const highlights = [
  {
    Icon: Workflow,
    title: "Built Around Your Business",
    description:
      "We map your exact posting needs and build an n8n workflow from scratch — no templates, no shortcuts.",
  },
  {
    Icon: Plug,
    title: "Any Platform, Any Stack",
    description:
      "Facebook, LinkedIn, Instagram, X, TikTok — plus webhooks, Airtable, Notion, or any tool you already use.",
  },
  {
    Icon: Settings2,
    title: "You Own It Forever",
    description:
      "The workflow lives in your own n8n instance. No vendor lock-in, no monthly hostage fees.",
  },
];

export default function CustomWorkflow() {
  const router = useRouter();
  const { user } = useAuth();

  const handleCTA = () => {
    if (user) {
      router.push("/pages/onboarding?plan=custom");
    } else {
      router.push("/pages/login?redirect=/pages/onboarding?plan=custom");
    }
  };

  return (
    <section
      id="custom-workflow"
      className="relative overflow-hidden py-24 px-4 sm:px-6 lg:px-8 bg-white dotted-grid"
    >
      {/* Gradient fade edges */}
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-white via-transparent to-white" />
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-r from-white via-transparent to-white" />

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-14">
          <StatusPill
            className="mb-4 uppercase tracking-wider flex w-fit mx-auto"
            showIndicator={false}
          >
            We Also Offer Custom Workflow
          </StatusPill>

          <h2 className="font-[family-name:var(--font-spline-sans)] text-4xl sm:text-5xl font-bold text-secondary mb-4 leading-tight">
            Custom Workflow,{" "}
            <span className="text-primary">Built for You.</span>
          </h2>

          <p className="max-w-2xl mx-auto text-lg text-text font-[family-name:var(--font-poppins)] font-light">
            Not every business fits a template. If your automation needs are
            unique, we design and build an n8n workflow tailored exactly to how
            you work.
          </p>
        </div>

        {/* Highlight cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-14">
          {highlights.map(({ Icon, title, description }) => (
            <div
              key={title}
              className="relative bg-white/80 backdrop-blur-sm rounded-2xl border border-slate-200 p-8 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-200"
            >
              <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center mb-5">
                <Icon size={22} className="text-primary" />
              </div>
              <h3 className="font-[family-name:var(--font-spline-sans)] text-lg font-bold text-secondary mb-2">
                {title}
              </h3>
              <p className="text-sm text-text font-[family-name:var(--font-poppins)] leading-relaxed">
                {description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button
            variant="secondary"
            size="md"
            className="min-w-[240px]"
            onClick={handleCTA}
          >
            Start your custom build
            <ArrowRight size={18} />
          </Button>
          <p className="mt-3 text-sm text-text font-[family-name:var(--font-poppins)]">
            {user
              ? "Continue to onboarding to tell us about your workflow."
              : "Sign in to get started — takes less than a minute."}
          </p>
        </div>
      </div>
    </section>
  );
}
