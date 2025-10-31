export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl md:text-6xl font-extrabold">GhostChrome</h1>
        <p className="text-gc-muted mt-3">Two passwords. Two realities. One private browser.</p>
        <a href="/pricing" className="inline-block mt-6 px-5 py-3 rounded-2xl border border-white/20">
          See Pricing
        </a>
      </div>
    </main>
  );
}
