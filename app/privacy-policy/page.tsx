export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-white px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-3xl">
        <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-primary">
          Legal
        </p>
        <h1 className="mb-6 font-[family-name:var(--font-spline-sans)] text-4xl font-bold text-secondary">
          Privacy Policy
        </h1>

        <div className="space-y-6 text-sm leading-relaxed text-text font-[family-name:var(--font-poppins)]">
          <p>Last updated: March 31, 2026</p>
          <p>
            We only collect the data needed to operate OneClick, process your
            requests, and keep the service reliable.
          </p>

          <section>
            <h2 className="mb-2 text-lg font-semibold text-secondary">
              What we collect
            </h2>
            <ul className="list-disc space-y-1 pl-5">
              <li>Account information (name, email)</li>
              <li>Connected platform metadata required for posting</li>
              <li>Operational logs for reliability and troubleshooting</li>
            </ul>
          </section>

          <section>
            <h2 className="mb-2 text-lg font-semibold text-secondary">
              How we use data
            </h2>
            <ul className="list-disc space-y-1 pl-5">
              <li>Deliver posting automation features</li>
              <li>Improve product stability and performance</li>
              <li>Provide support and maintenance</li>
            </ul>
          </section>

          <section>
            <h2 className="mb-2 text-lg font-semibold text-secondary">
              Contact
            </h2>
            <p>
              For privacy questions, contact us at
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
