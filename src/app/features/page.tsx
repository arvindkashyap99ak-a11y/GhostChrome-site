export default function Features() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-20">
      <h1 className="text-4xl font-bold mb-6">Features</h1>

      <div className="space-y-8">

        <div>
          <h2 className="text-2xl font-semibold mb-2">🔐 Dual Session Lock</h2>
          <p className="text-gc-muted">
            Real password opens your real browser session.  
            Fake password opens a decoy session with fake tabs.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-2">🧠 Ephemeral Encryption Key</h2>
          <p className="text-gc-muted">
            GhostChrome uses PBKDF2 + AES-GCM encryption. Your key is never stored.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-2">🛑 Fake Panic Mode</h2>
          <p className="text-gc-muted">
            Enter fake password to instantly close real tabs and open safe decoy tabs.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-2">💾 Encrypted Session Storage</h2>
          <p className="text-gc-muted">
            Save sessions securely — only you can decrypt them.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-2">☁️ Cloud Sync (Pro)</h2>
          <p className="text-gc-muted">
            Option to sync encrypted blobs across devices. Premium optional add-on.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-2">⏳ Auto-Lock</h2>
          <p className="text-gc-muted">
            Browser auto-locks after inactivity. Never forget to protect your session.
          </p>
        </div>

      </div>
    </div>
  );
}
