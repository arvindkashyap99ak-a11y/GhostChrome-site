export default function HowItWorks() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-20">
      <h1 className="text-4xl font-bold mb-6">How GhostChrome Works</h1>

      <div className="space-y-10 text-gc-muted text-lg">

        <div>
          <h2 className="text-2xl font-semibold text-white mb-2">1️⃣ Set two passwords</h2>
          <p>
            You create a real password and a fake password.
            <br/>Real unlocks your real session. Fake opens a decoy session.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-white mb-2">2️⃣ Save two sets of tabs</h2>
          <p>
            Save your <b>real browsing tabs</b> securely.
            Save a <b>fake set of harmless tabs</b> for decoy mode.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-white mb-2">3️⃣ Get locked instantly</h2>
          <p>
            Click lock or wait for inactivity timeout — GhostChrome locks your browser.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-white mb-2">4️⃣ Enter a password to unlock</h2>
          <p>
            ✅ Real password → restores your real tabs<br/>
            🚨 Fake password → closes real tabs & opens decoy tabs
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-white mb-2">5️⃣ Encryption protects everything</h2>
          <p>
            Sessions are encrypted with AES-GCM and PBKDF2 — your key never leaves your device.
          </p>
        </div>

      </div>
    </div>
  );
}
