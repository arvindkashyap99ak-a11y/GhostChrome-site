export default function Cancel() {
  return (
    <div className="max-w-2xl mx-auto px-4 py-20 text-center">
      <h1 className="text-4xl font-bold mb-4">Payment Canceled</h1>
      <p className="text-gc-muted">No charge was made. You can try again anytime.</p>
      <a href="/pricing" className="inline-block mt-8 px-5 py-3 rounded-xl border border-white/20">
        Back to Pricing
      </a>
    </div>
  );
}
