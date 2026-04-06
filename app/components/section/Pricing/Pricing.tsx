"use client";

import { Check, Sparkles } from "lucide-react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/app/context/AuthContext";
import { Button, StatusPill } from "../../ui";

const plans = [
  {
    planKey: "starter",
    name: "Setup & Go",
    subtitle: "Starter",
    tagline: "You own it, I'll build it",
    price: "$349",
    period: "one-time",
    periodNote: "No recurring fee — it's yours forever",
    bestFor: "freelancers & budget-conscious teams",
    features: [
      "I set up n8n on your own account",
      "Connect your social platforms (Facebook, LinkedIn, etc.)",
      "AI caption automation workflow",
      "Initial testing & handover walkthrough",
      "You manage & maintain after setup",
    ],
    cta: "Book a call",
    maintenanceNote:
      "Additional maintenance fee applies (API token renewal, node fixes, minor tweaks).",
    highlighted: false,
  },
  {
    planKey: "managed",
    name: "Done for You",
    subtitle: "Managed",
    tagline: "I run it all — you just post",
    price: "$599",
    period: "/month",
    periodNote: "+ $99 one-time setup fee",
    bestFor: "social media managers & small businesses",
    features: [
      "I host & run n8n for you",
      "All platforms connected & maintained",
      "AI writes captions — edit before posting",
      "I handle updates, fixes & API renewals",
      "Priority support via chat",
      "Cancel anytime",
    ],
    cta: "Book a call",
    maintenanceNote:
      "Additional maintenance fee applies (API token renewal, node fixes, minor tweaks).",
    highlighted: true,
  },
  {
    planKey: "agency",
    name: "Growth & Scale",
    subtitle: "Agency",
    tagline: "Full power, multiple brands",
    price: "$1,499",
    period: "/month",
    periodNote: "+ $99 one-time setup fee",
    bestFor: "agencies managing multiple clients",
    features: [
      "Everything in Done for You",
      "Multiple brand/client accounts",
      "Faster processing & better AI outputs",
      "Expanded platform support",
      "Early access to new features",
      "Dedicated support & monthly check-in",
    ],
    cta: "Book a call",
    maintenanceNote: "",
    highlighted: false,
  },
];

export default function Pricing() {
  const router = useRouter();
  const { user } = useAuth();

  const handlePlanCTA = (planKey: string) => {
    if (user) {
      router.push(`/pages/onboarding?plan=${planKey}`);
    } else {
      router.push(`/pages/login?redirect=/pages/onboarding?plan=${planKey}`);
    }
  };

  return (
    <section id="pricing" className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <StatusPill
            className="mb-3 uppercase tracking-wider flex w-fit mx-auto"
            showIndicator={false}
          >
            Pricing
          </StatusPill>
          <h2 className="font-[family-name:var(--font-spline-sans)] text-4xl sm:text-5xl font-bold text-secondary mb-4 leading-tight">
            Pick the plan that fits your posting speed.
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-text font-[family-name:var(--font-poppins)] font-light">
            Start simple, scale when you grow. Most teams choose Pro.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch">
          {plans.map((plan) => (
            <article
              key={plan.name}
              className={`relative flex flex-col rounded-2xl border p-7 transition-all duration-300 hover:-translate-y-1 ${
                plan.highlighted
                  ? "bg-secondary border-secondary shadow-[0_12px_40px_rgba(31,43,72,0.30)] lg:scale-[1.03] lg:z-10 hover:shadow-[0_20px_60px_rgba(31,43,72,0.40)]"
                  : "bg-white border-gray-200 hover:shadow-lg hover:border-gray-300"
              }`}
            >
              {plan.highlighted && (
                <>
                  {/* Background decoration */}
                  <div className="absolute top-0 right-0 w-48 h-48 bg-primary/15 rounded-full blur-3xl pointer-events-none" />
                  <div className="absolute bottom-0 left-0 w-32 h-32 bg-primary/10 rounded-full blur-2xl pointer-events-none" />
                  {/* Badge */}
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 inline-flex items-center gap-1.5 rounded-full bg-primary text-white px-3.5 py-1.5 text-xs font-semibold shadow-[inset_0_-2px_0_rgba(0,0,0,0.18)] z-10">
                    <Sparkles className="w-3 h-3" />
                    Most Popular
                  </div>
                </>
              )}

              <div className="relative z-10 mb-5">
                <p
                  className={`text-xs uppercase tracking-wider font-semibold mb-2 ${
                    plan.highlighted ? "text-primary/80" : "text-primary"
                  }`}
                  style={plan.highlighted ? { color: "#818cf8" } : {}}
                >
                  {plan.subtitle}
                </p>
                <h3
                  className={`font-[family-name:var(--font-spline-sans)] text-2xl font-bold mb-1 ${
                    plan.highlighted ? "text-white" : "text-secondary"
                  }`}
                >
                  {plan.name}
                </h3>
                {plan.tagline && (
                  <p
                    className={`text-sm font-[family-name:var(--font-poppins)] font-light mb-3 ${
                      plan.highlighted ? "text-white/60" : "text-text"
                    }`}
                  >
                    {plan.tagline}
                  </p>
                )}
              </div>

              <div
                className={`relative z-10 mb-6 border-y py-5 ${
                  plan.highlighted ? "border-white/10" : "border-gray-100"
                }`}
              >
                <div>
                  <span
                    className={`font-[family-name:var(--font-spline-sans)] text-4xl font-bold ${
                      plan.highlighted ? "text-white" : "text-secondary"
                    }`}
                  >
                    {plan.price}
                  </span>
                  <span
                    className={`text-base ml-1 ${
                      plan.highlighted ? "text-white/60" : "text-text"
                    }`}
                  >
                    {plan.period}
                  </span>
                </div>
                {plan.periodNote && (
                  <p
                    className={`text-xs mt-1 font-[family-name:var(--font-poppins)] ${
                      plan.highlighted ? "text-white/40" : "text-text/70"
                    }`}
                  >
                    {plan.periodNote}
                  </p>
                )}
              </div>

              <p
                className={`relative z-10 text-xs mb-4 font-[family-name:var(--font-poppins)] ${
                  plan.highlighted ? "text-white/50" : "text-text"
                }`}
              >
                Best for{" "}
                <span
                  className={`font-medium ${
                    plan.highlighted ? "text-white/80" : "text-secondary"
                  }`}
                >
                  {plan.bestFor}
                </span>
              </p>

              <ul className="relative z-10 space-y-3 mb-7">
                {plan.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-start gap-2.5 text-sm"
                  >
                    <span
                      className={`mt-0.5 inline-flex h-5 w-5 items-center justify-center rounded-full flex-shrink-0 ${
                        plan.highlighted
                          ? "bg-white/15 text-white"
                          : "bg-primary/10 text-primary"
                      }`}
                    >
                      <Check className="w-3.5 h-3.5" />
                    </span>
                    <span
                      className={`font-[family-name:var(--font-poppins)] leading-relaxed ${
                        plan.highlighted ? "text-white/75" : "text-text"
                      }`}
                    >
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <div className="relative z-10 mt-auto">
                <Button
                  variant={plan.highlighted ? "primary" : "secondary"}
                  size="md"
                  className="w-full"
                  onClick={() => handlePlanCTA(plan.planKey)}
                >
                  {plan.cta}
                </Button>
              </div>
            </article>
          ))}
        </div>

        <p className="mt-6 rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-xs leading-relaxed text-gray-600 font-[family-name:var(--font-poppins)]">
          Note: Setup & Go plans have an additional maintenance fee for API
          token renewal, node fixes, and minor tweaks. Cancel anytime for
          monthly plans.
        </p>
      </div>
    </section>
  );
}
