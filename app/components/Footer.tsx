import { Zap } from "lucide-react";

const footerLinks = {
  Product: [
    { label: "Features", href: "#feature" },
    { label: "How it works", href: "#how-it-works" },
    { label: "Pricing", href: "#pricing" },
  ],
  Company: [
    { label: "Why We're Different", href: "#why-different" },
    { label: "Built to Last", href: "#built-to-last" },
    { label: "Get Started", href: "#get-started" },
  ],
  Legal: [
    { label: "Privacy Policy", href: "/pages/privacy-policy" },
    { label: "Terms of Service", href: "/pages/terms-of-service" },
    { label: "Cookie Policy", href: "/pages/cookie-policy" },
    { label: "Cancel Subscription", href: "#pricing" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-slate-950 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="md:col-span-1">
            <a
              href="#top"
              className="inline-flex items-center gap-2 text-white font-[family-name:var(--font-spline-sans)] text-xl font-bold"
            >
              <span className="w-7 h-7 rounded-lg bg-primary flex items-center justify-center">
                <Zap className="w-4 h-4 text-white" />
              </span>
              OneClick
            </a>
            <p className="mt-4 text-sm text-slate-400 font-[family-name:var(--font-poppins)] leading-relaxed">
              Upload once. Post everywhere. The simplest way to manage your
              social media workflow from one place.
            </p>
          </div>

          {Object.entries(footerLinks).map(([group, links]) => (
            <div key={group}>
              <h4 className="text-sm font-semibold text-white mb-3 font-[family-name:var(--font-spline-sans)]">
                {group}
              </h4>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-slate-400 hover:text-white transition-colors font-[family-name:var(--font-poppins)]"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-10 pt-6 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-slate-500 font-[family-name:var(--font-poppins)]">
            © 2026 OneClick. All rights reserved.
          </p>
          <p className="text-xs text-slate-500 font-[family-name:var(--font-poppins)]">
            Made for creators who move fast.
          </p>
        </div>
      </div>
    </footer>
  );
}
