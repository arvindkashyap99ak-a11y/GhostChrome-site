import Stripe from "stripe";
import { NextRequest, NextResponse } from "next/server";

const stripeKey = process.env.STRIPE_SECRET_KEY;
const stripe = stripeKey ? new Stripe(stripeKey as string) : null;

// Return a clear message when someone opens this in a browser (GET)
export async function GET() {
  return NextResponse.json({ error: "Method Not Allowed" }, { status: 405 });
}

export async function POST(req: NextRequest) {
  try {
    // TEMP DEBUG: see if Vercel injected envs
    console.log("STRIPE DEBUG >>>", {
      hasSecret: !!process.env.STRIPE_SECRET_KEY,
      monthly: !!process.env.STRIPE_PRICE_PRO_MONTHLY,
      yearly: !!process.env.STRIPE_PRICE_PRO_YEARLY,
      successUrl: !!process.env.STRIPE_SUCCESS_URL,
      cancelUrl: !!process.env.STRIPE_CANCEL_URL,
    });

    if (!stripe) {
      return NextResponse.json({ error: "Stripe not configured" }, { status: 500 });
    }

    const { price } = await req.json();

    const priceId =
      price === "yearly"
        ? process.env.STRIPE_PRICE_PRO_YEARLY
        : process.env.STRIPE_PRICE_PRO_MONTHLY;

    if (!priceId) {
      return NextResponse.json({ error: "Missing price ID" }, { status: 400 });
    }

    const session = await stripe.checkout.sessions.create({
      mode: "subscription",
      allow_promotion_codes: true,
      line_items: [{ price: priceId, quantity: 1 }],
      subscription_data: { trial_period_days: 7 },
      success_url: process.env.STRIPE_SUCCESS_URL as string,
      cancel_url: process.env.STRIPE_CANCEL_URL as string,
    });

    return NextResponse.json({ url: session.url });
  } catch (error: any) {
    console.error("CHECKOUT ERROR >>>", error?.message || error);
    return NextResponse.json({ error: error?.message ?? "Checkout error" }, { status: 500 });
  }
}
