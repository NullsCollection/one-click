export default function CookiePolicyPage() {
  return (
    <main className="min-h-screen bg-white px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-3xl">
        <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-primary">
          Legal
        </p>
        <h1 className="mb-6 font-[family-name:var(--font-spline-sans)] text-4xl font-bold text-secondary">
          Cookie Policy
        </h1>

        <div className="space-y-6 text-sm leading-relaxed text-text font-[family-name:var(--font-poppins)]">
          <p>Last updated: March 31, 2026</p>
          <p>
            We use cookies and similar technologies to keep OneClick secure,
            remember preferences, and improve product performance.
          </p>

          <section>
            <h2 className="mb-2 text-lg font-semibold text-secondary">
              Cookie types
            </h2>
            <ul className="list-disc space-y-1 pl-5">
              <li>Essential cookies for authentication and security</li>
              <li>Preference cookies for UI settings</li>
              <li>Analytics cookies for usage insights</li>
            </ul>
          </section>

          <section>
            <h2 className="mb-2 text-lg font-semibold text-secondary">
              Your choices
            </h2>
            <p>
              You can control cookies through your browser settings. Disabling
              essential cookies may impact service functionality.
            </p>
          </section>

          <section>
            <h2 className="mb-2 text-lg font-semibold text-secondary">
              Contact
            </h2>
            <p>
              For cookie questions, contact us at
              <a className="ml-1 text-primary" href="mailto:support@oneclick.app">
                support@oneclick.app
              </a>
              .
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
