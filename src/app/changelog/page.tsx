export default function Changelog() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-20">
      <h1 className="text-4xl font-bold mb-6">Changelog</h1>
      <p className="text-gc-muted mb-10">Product updates &amp; improvements.</p>

      <div className="space-y-10">

        <section>
          <h2 className="text-2xl font-semibold text-white mb-2">v1.0 — MVP Launch</h2>
          <ul className="list-disc pl-6 text-gc-muted space-y-1">
            <li>Real &amp; Fake password login</li>
            <li>Encrypted session storage (AES-GCM)</li>
            <li>Auto-lock timer</li>
            <li>Export / Import encrypted backup</li>
            <li>UI polish / tooltips / helper messages</li>
            <li>Initial website + Chrome extension built</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-white mb-2">Upcoming</h2>
          <ul className="list-disc pl-6 text-gc-muted space-y-1">
            <li>Optional encrypted cloud sync for Pro users</li>
            <li>Stripe subscription system</li>
            <li>Account login + device sync</li>
            <li>Multi-device session restore</li>
            <li>In-app support channel</li>
          </ul>
        </section>

      </div>
    </div>
  );
}
