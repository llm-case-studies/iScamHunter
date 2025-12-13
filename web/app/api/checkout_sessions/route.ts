import { NextResponse } from 'next/server';
import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || 'sk_test_placeholder', {
    apiVersion: '2025-11-17.clover', // Validated against installed type definition
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
            // 1. Check for Interceptor Modifications (The "Pattern")
            const isVolunteer = item.id.endsWith('-volunteer');
            const baseId = isVolunteer ? item.id.replace('-volunteer', '') : item.id;

            const product = PRODUCT_CATALOG[baseId];
            if (!product) throw new Error(`Invalid Product ID: ${item.id}`);

            // 2. Apply Dynamic Pricing Logic
            let finalPrice = product.price;
            let finalName = product.name;

            if (isVolunteer) {
                finalPrice = Math.round(product.price * 0.85); // 15% Discount
                finalName = `${product.name} (Volunteer Rate)`;
            }

            return {
                price_data: {
                    currency: 'usd',
                    product_data: {
                        name: finalName,
                    },
                    unit_amount: finalPrice,
                },
                quantity: item.quantity || 1,
            };
        });

        // Create Checkout Session with Metadata
        const session = await stripe.checkout.sessions.create({
            ui_mode: 'embedded',
            line_items: lineItems,
            mode: 'payment',
            metadata: body.metadata || {}, // Capture the "Soft Hope" pledge
            return_url: `${req.headers.get('origin')}/return?session_id={CHECKOUT_SESSION_ID}`,
        });

        return NextResponse.json({ clientSecret: session.client_secret });
    } catch (err: any) {
        console.error('Stripe Error:', err);
        return NextResponse.json({ error: err.message }, { status: 500 });
    }
}
