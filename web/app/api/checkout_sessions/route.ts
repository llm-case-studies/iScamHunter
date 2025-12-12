import { NextResponse } from 'next/server';
import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
    apiVersion: '2025-01-27.acacia', // Latest API version
});

// Secure Pricing Map
const PRODUCT_CATALOG: Record<string, { price: number; name: string }> = {
    'sh-hoodie-001': { price: 6995, name: 'Scam Hunters™ Hoodie' },
    'sh-ishield-001': { price: 1895, name: 'iShield Case' },
    'sh-deskmat-001': { price: 2595, name: 'War Room Desk Mat' },
    'sh-donation-001': { price: 100, name: 'Community Donation' },
};

export async function POST(req: Request) {
    try {
        const body = await req.json();
        const { items } = body; // Expects [{ id: 'sh-hoodie-001', quantity: 1 }]

        if (!items || !Array.isArray(items)) {
            return NextResponse.json({ error: 'Invalid items format' }, { status: 400 });
        }

        const lineItems = items.map((item: any) => {
            const product = PRODUCT_CATALOG[item.id];
            if (!product) throw new Error(`Invalid Product ID: ${item.id}`);

            return {
                price_data: {
                    currency: 'usd',
                    product_data: {
                        name: product.name,
                    },
                    unit_amount: product.price,
                },
                quantity: item.quantity || 1,
            };
        });

        // Create Checkout Session
        const session = await stripe.checkout.sessions.create({
            ui_mode: 'embedded',
            line_items: lineItems,
            mode: 'payment',
            return_url: `${req.headers.get('origin')}/return?session_id={CHECKOUT_SESSION_ID}`,
        });

        return NextResponse.json({ clientSecret: session.client_secret });
    } catch (err: any) {
        console.error('Stripe Error:', err);
        return NextResponse.json({ error: err.message }, { status: 500 });
    }
}
