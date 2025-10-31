export default function Terms() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-20">
      <h1 className="text-4xl font-bold mb-6">Terms of Service</h1>

      <p className="text-gc-muted mb-4">
        By using GhostChrome, you agree to these terms.
      </p>

      <h2 className="text-2xl font-semibold text-white mt-6 mb-2">1. Usage</h2>
      <p className="text-gc-muted mb-4">
        GhostChrome is a privacy tool that allows you to lock your browser and protect your browsing sessions.
        You may not use GhostChrome for illegal activity.
      </p>

      <h2 className="text-2xl font-semibold text-white mt-6 mb-2">2. Subscriptions</h2>
      <p className="text-gc-muted mb-4">
        Paid plans are billed through Stripe. Subscription renews automatically until canceled. 
        You can cancel anytime from your billing email/portal.
      </p>

      <h2 className="text-2xl font-semibold text-white mt-6 mb-2">3. Data & Privacy</h2>
      <p className="text-gc-muted mb-4">
        GhostChrome does not collect plain browsing data. Encryption is handled client-side. 
        Optional sync stores only encrypted blobs.
      </p>

      <h2 className="text-2xl font-semibold text-white mt-6 mb-2">4. No Guarantee</h2>
      <p className="text-gc-muted mb-4">
        We do our best, but GhostChrome is provided “as is” without warranties. 
        Use at your own discretion.
      </p>

      <h2 className="text-2xl font-semibold text-white mt-6 mb-2">5. Contact</h2>
      <p className="text-gc-muted">
        Questions? Email: <a href="mailto:support@ghostchrome.com" className="underline">support@ghostchrome.com</a>
      </p>
    </div>
  );
}
