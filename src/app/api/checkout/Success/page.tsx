export default function Success() {
  return (
    <div className="max-w-2xl mx-auto px-4 py-20 text-center">
      <h1 className="text-4xl font-bold mb-4">🎉 You’re on GhostChrome Pro</h1>
      <p className="text-gc-muted">
        Your subscription is active. You can now use encrypted cloud sync and multi-device restore.
      </p>
      <a href="/download" className="inline-block mt-8 px-5 py-3 rounded-xl bg-white/10 border border-white/20">
        Get the Extension
      </a>
    </div>
  );
}
