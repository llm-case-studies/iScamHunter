import { NextResponse } from 'next/server';
import Stripe from 'stripe';
import { PrismaClient } from '@prisma/client';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || 'sk_test_placeholder', {
    apiVersion: '2025-11-17.clover', // Validated against installed type definition
});

const prisma = new PrismaClient();

export async function POST(req: Request) {
    try {
        const body = await req.json();
        const { items } = body; // Expects [{ id: 'sh-hoodie-001', quantity: 1 }]

        if (!items || !Array.isArray(items)) {
            return NextResponse.json({ error: 'Invalid items format' }, { status: 400 });
        }

        const lineItems = [];

        for (const item of items) {
            // 1. Check for Interceptor Modifications (The "Pattern")
            const isVolunteer = item.id.endsWith('-volunteer');
            const baseId = isVolunteer ? item.id.replace('-volunteer', '') : item.id;

            // 2. Fetch Product from DB (Replacing Hardcoded Catalog)
            const product = await prisma.product.findUnique({
                where: { id: baseId }
            });

            if (!product) throw new Error(`Invalid Product ID: ${item.id}`);

            // 3. Apply Dynamic Pricing Logic
            let finalPrice = product.price;
            let finalName = product.name;

            if (isVolunteer) {
                finalPrice = Math.round(product.price * 0.85); // 15% Discount
                finalName = `${product.name} (Volunteer Rate)`;
            }

            let finalImage = product.image;
            if (finalImage && finalImage.startsWith('/')) {
                const origin = req.headers.get('origin') || 'http://localhost:3000';
                finalImage = `${origin}${finalImage}`;
            }

            lineItems.push({
                price_data: {
                    currency: product.currency,
                    product_data: {
                        name: finalName,
                        description: product.richDescription || undefined,
                        images: finalImage ? [finalImage] : [],
                        metadata: {
                            provider: product.provider,
                            externalId: product.externalId
                        }
                    },
                    unit_amount: finalPrice,
                },
                quantity: item.quantity || 1,
            });

            // 4. Handle Add-ons (Server-Side Validation)
            if (item.addons && Array.isArray(item.addons) && item.addons.length > 0) {
                if (product.specs) {
                    try {
                        const specs = JSON.parse(product.specs as string);
                        if (specs.options && Array.isArray(specs.options)) {
                            for (const addonId of item.addons) {
                                const option = specs.options.find((o: any) => o.id === addonId);
                                if (option) {
                                    lineItems.push({
                                        price_data: {
                                            currency: product.currency,
                                            product_data: {
                                                name: `+ ${option.name}`, // "Ad-on" naming style
                                                description: option.description,
                                                metadata: {
                                                    type: 'addon',
                                                    parentId: product.id
                                                }
                                            },
                                            unit_amount: option.price,
                                        },
                                        quantity: item.quantity || 1, // Match parent quantity
                                    });
                                }
                            }
                        }
                    } catch (e) {
                        console.error("Error parsing product specs for add-ons", e);
                    }
                }
            }
        }

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
