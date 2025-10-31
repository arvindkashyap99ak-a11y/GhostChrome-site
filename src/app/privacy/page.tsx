export default function Privacy() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-20">
      <h1 className="text-4xl font-bold mb-6">Privacy Policy</h1>
      
      <p className="text-gc-muted mb-4">
        GhostChrome is built for privacy from day one. We do not and will not collect 
        your browsing activity, history, or tabs.
      </p>

      <h2 className="text-2xl font-semibold text-white mt-6 mb-2">🔐 Encryption</h2>
      <p className="text-gc-muted mb-4">
        Your real and fake sessions are encrypted locally using  
        <b> AES-GCM + PBKDF2 </b> before being stored.
      </p>

      <h2 className="text-2xl font-semibold text-white mt-6 mb-2">🧠 Local-Only Mode</h2>
      <p className="text-gc-muted mb-4">
        Free users store data on your device only. 
        Nothing is sent anywhere.
      </p>

      <h2 className="text-2xl font-semibold text-white mt-6 mb-2">☁️ Optional Sync (Pro)</h2>
      <p className="text-gc-muted mb-4">
        If you choose to sync, we store only encrypted blobs — never your key, password, 
        or plaintext data.
      </p>

      <h2 className="text-2xl font-semibold text-white mt-6 mb-2">🛑 What we never collect</h2>
      <ul className="text-gc-muted list-disc pl-6 space-y-2">
        <li>No browsing history</li>
        <li>No open tabs</li>
        <li>No bookmarks</li>
        <li>No clipboard data</li>
        <li>No plaintext passwords</li>
      </ul>

      <h2 className="text-2xl font-semibold text-white mt-6 mb-2">📬 Contact</h2>
      <p className="text-gc-muted">
        For privacy questions: <a href="mailto:privacy@ghostchrome.com" className="underline">privacy@ghostchrome.com</a>
      </p>
    </div>
  );
}
