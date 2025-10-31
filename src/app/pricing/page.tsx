'use client';

async function checkout(price: 'monthly' | 'yearly') {
  const r = await fetch('/api/checkout', {
    method: 'POST',
    headers: {'Content-Type':'application/json'},
    body: JSON.stringify({ price })
  });
  const { url, error } = await r.json();
  if (error) alert(error);
  else if (url) window.location.href = url;
}

export default function Pricing() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-16">
      <h1 className="text-4xl font-extrabold">Pricing</h1>
      <p className="text-gc-muted mt-2">Start free. Upgrade to Pro.</p>

      <div className="mt-10 grid md:grid-cols-3 gap-6">

        <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
          <div className="font-semibold">Free</div>
          <div className="text-3xl font-bold mt-2">$0</div>
          <ul className="mt-4 text-gc-muted space-y-2 text-sm">
            <li>Local encrypted storage</li>
            <li>1 Real + 1 Fake session</li>
            <li>Idle lock</li>
          </ul>
          <a href="/download" className="mt-6 inline-block px-4 py-2 rounded-xl border border-white/20">Get Free</a>
        </div>

        <div className="p-6 rounded-2xl bg-white/5 border border-white/20">
          <div className="font-semibold">Pro</div>
          <div className="text-3xl font-bold mt-2">$4.99<span className="text-base text-gc-muted">/mo</span></div>
          <ul className="mt-4 text-gc-muted space-y-2 text-sm">
            <li>Encrypted cloud sync</li>
            <li>Multi-device</li>
            <li>Priority support</li>
          </ul>
          <button onClick={()=>checkout('monthly')} className="mt-6 px-4 py-2 rounded-xl bg-white/10 border border-white/20">Start 7-day Trial</button>
        </div>

        <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
          <div className="font-semibold">Pro Annual</div>
          <div className="text-3xl font-bold mt-2">$49<span className="text-base text-gc-muted">/yr</span></div>
          <ul className="mt-4 text-gc-muted space-y-2 text-sm">
            <li>2 months free</li>
          </ul>
          <button onClick={()=>checkout('yearly')} className="mt-6 px-4 py-2 rounded-xl border border-white/20">Go Annual</button>
        </div>

      </div>
      <p className="text-xs text-gc-muted mt-6">Taxes may apply. Manage subscription via Stripe.</p>
    </div>
  );
}
