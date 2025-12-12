"use client";

import { useCallback, useEffect, useState } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import {
    EmbeddedCheckoutProvider,
    EmbeddedCheckout
} from '@stripe/react-stripe-js';

// Placeholder Key - User needs to provide real key
const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY || 'pk_test_placeholder');

export default function CheckoutPage() {
    const [clientSecret, setClientSecret] = useState('');

    const fetchClientSecret = useCallback(() => {
        // Create a Checkout Session
        return fetch("/api/checkout_sessions", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            // Hardcoded item for POC: 1 Hoodie
            body: JSON.stringify({ items: [{ id: 'sh-hoodie-001', quantity: 1 }] }),
        })
            .then((res) => res.json())
            .then((data) => data.clientSecret);
    }, []);

    const options = { fetchClientSecret };

    return (
        <div className="min-h-screen bg-[#0a0a0b] text-white flex flex-col items-center justify-center p-6">
            <div className="w-full max-w-4xl bg-white/5 rounded-3xl border border-white/10 p-8 shadow-2xl">
                <h1 className="text-3xl font-bold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-amber-200 to-amber-500">
                    Secure Checkout 🔒
                </h1>

                <div id="checkout">
                    <EmbeddedCheckoutProvider
                        stripe={stripePromise}
                        options={options}
                    >
                        <EmbeddedCheckout className="bg-transparent" />
                    </EmbeddedCheckoutProvider>
                </div>
            </div>

            <p className="mt-8 text-gray-500 text-sm">
                Powered by Stripe • Bank-Grade Security
            </p>
        </div>
    );
}
