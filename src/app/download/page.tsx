export default function Download() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-20">
      <h1 className="text-4xl font-bold mb-4">Download GhostChrome</h1>
      <p className="text-gc-muted mb-6">
        Install the GhostChrome extension to protect your browsing with Real & Fake sessions.
      </p>

      <a 
        href="#"
        className="inline-block px-5 py-3 rounded-xl bg-white/10 border border-white/20"
      >
        🚀 Install from Chrome Web Store
      </a>

      <div className="mt-6 text-sm text-gc-muted">
        <p>Manual install instructions (developer mode):</p>
        <ol className="list-decimal pl-4 space-y-1 mt-2">
          <li>Download extension ZIP</li>
          <li>Go to chrome://extensions</li>
          <li>Enable Developer Mode</li>
          <li>Click “Load unpacked”</li>
          <li>Select GhostChrome folder</li>
        </ol>
      </div>
    </div>
  );
}
