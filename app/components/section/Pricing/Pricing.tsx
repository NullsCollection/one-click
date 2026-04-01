import { Check, Sparkles } from "lucide-react";
import { Button, StatusPill } from "../../ui";

const plans = [
  {
    name: "Setup & Go",
    subtitle: "Starter",
    tagline: "You own it, I'll build it",
    price: "$299",
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
    cta: "Get started",
    maintenanceNote:
      "Additional maintenance fee applies (API token renewal, node fixes, minor tweaks).",
    highlighted: false,
  },
  {
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
    cta: "Get started",
    maintenanceNote:
      "Additional maintenance fee applies (API token renewal, node fixes, minor tweaks).",
    highlighted: true,
  },
  {
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
              className={`relative flex flex-col rounded-2xl border p-7 bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-lg ${
                plan.highlighted
                  ? "border-primary shadow-[0_10px_30px_rgba(79,70,229,0.16)] lg:scale-[1.03] lg:z-10"
                  : "border-gray-200"
              }`}
            >
              {plan.highlighted && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 inline-flex items-center gap-1 rounded-full border border-primary/20 bg-primary text-white px-3 py-1 text-xs font-semibold shadow-[inset_0_-2px_0_rgba(0,0,0,0.16)]">
                  <Sparkles className="w-3.5 h-3.5" />
                  Most Popular
                </div>
              )}

              <div className="mb-5">
                <p className="text-xs uppercase tracking-wider text-primary font-semibold mb-2">
                  {plan.subtitle}
                </p>
                <h3 className="font-[family-name:var(--font-spline-sans)] text-2xl font-bold text-secondary mb-1">
                  {plan.name}
                </h3>
                {plan.tagline && (
                  <p className="text-sm text-text font-[family-name:var(--font-poppins)] font-light mb-3">
                    {plan.tagline}
                  </p>
                )}
              </div>

              <div className="mb-6 border-y border-gray-100 py-5">
                <div>
                  <span className="font-[family-name:var(--font-spline-sans)] text-4xl font-bold text-secondary">
                    {plan.price}
                  </span>
                  <span className="text-text text-base ml-1">
                    {plan.period}
                  </span>
                </div>
                {plan.periodNote && (
                  <p className="text-xs text-text/70 mt-1 font-[family-name:var(--font-poppins)]">
                    {plan.periodNote}
                  </p>
                )}
              </div>

              <p className="text-xs text-text mb-4 font-[family-name:var(--font-poppins)]">
                Best for{" "}
                <span className="text-secondary font-medium">
                  {plan.bestFor}
                </span>
              </p>

              <ul className="space-y-3 mb-7">
                {plan.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-start gap-2.5 text-sm text-text"
                  >
                    <span className="mt-0.5 inline-flex h-5 w-5 items-center justify-center rounded-full bg-primary/10 text-primary">
                      <Check className="w-3.5 h-3.5" />
                    </span>
                    <span className="font-[family-name:var(--font-poppins)] leading-relaxed">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <Button
                variant={plan.highlighted ? "secondary" : "primary"}
                size="md"
                className="w-full mt-auto"
              >
                {plan.cta}
              </Button>
            </article>
          ))}
        </div>

        <p className="mt-6 rounded-lg border border-gray-200 bg-gray-50 px-4 py-3 text-xs leading-relaxed text-gray-700 font-[family-name:var(--font-poppins)]">
          Note: Setup & Go plans have an additional maintenance fee for API
          token renewal, node fixes, and minor tweaks. Cancel anytime for
          monthly plans.
        </p>
      </div>
    </section>
  );
}
