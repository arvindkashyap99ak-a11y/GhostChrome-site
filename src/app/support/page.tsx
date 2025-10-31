export default function Support() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-20">
      <h1 className="text-4xl font-bold mb-6">Support</h1>

      <p className="text-gc-muted mb-6">
        Need help? Have a feature request? We're here for you.
      </p>

      <div className="space-y-6 text-gc-muted">

        <div>
          <h2 className="text-xl font-semibold text-white mb-1">📧 Email Support</h2>
          <p>
            Email us anytime:<br />
            <a href="mailto:support@ghostchrome.com" className="underline">
              support@ghostchrome.com
            </a>
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-white mb-1">🐛 Report a Bug</h2>
          <p>
            Found something broken? Tell us what happened and your browser version.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-white mb-1">💡 Feature Requests</h2>
          <p>
            We love feedback. Email us your ideas and we might add them to the roadmap.
          </p>
        </div>

      </div>
    </div>
  );
}
