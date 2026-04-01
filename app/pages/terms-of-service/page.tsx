export default function TermsOfServicePage() {
  return (
    <main className="min-h-screen bg-white px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-3xl">
        <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-primary">
          Legal
        </p>
        <h1 className="mb-6 font-[family-name:var(--font-spline-sans)] text-4xl font-bold text-secondary">
          Terms of Service
        </h1>

        <div className="space-y-6 text-sm leading-relaxed text-text font-[family-name:var(--font-poppins)]">
          <p>Last updated: March 31, 2026</p>
          <p>
            By using OneClick, you agree to use the service lawfully and in
            accordance with these terms.
          </p>

          <section>
            <h2 className="mb-2 text-lg font-semibold text-secondary">
              Service use
            </h2>
            <ul className="list-disc space-y-1 pl-5">
              <li>You are responsible for content you publish</li>
              <li>You must maintain valid account credentials</li>
              <li>You must comply with third-party platform policies</li>
            </ul>
          </section>

          <section>
            <h2 className="mb-2 text-lg font-semibold text-secondary">
              Billing
            </h2>
            <p>
              Paid plans are billed according to your selected pricing tier.
              Monthly plans can be canceled anytime.
            </p>
          </section>

          <section>
            <h2 className="mb-2 text-lg font-semibold text-secondary">
              Contact
            </h2>
            <p>
              For terms inquiries, contact us at
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
