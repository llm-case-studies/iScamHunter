"use client";

import { useCallback, useState, Suspense } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import {
    EmbeddedCheckoutProvider,
    EmbeddedCheckout
} from '@stripe/react-stripe-js';

// Placeholder Key - User needs to provide real key
const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY || 'pk_test_placeholder');

import FunnelInterceptor from '../components/FunnelInterceptor';

import { useSearchParams } from 'next/navigation';

function CheckoutContent() {
    const searchParams = useSearchParams();
    const productId = searchParams.get('productId');
    const addonsParam = searchParams.get('addons'); // e.g., "opt_vllm,opt_admin"

    const [showInterceptor, setShowInterceptor] = useState(true); // Start with Interceptor pattern
    const [cartMetadata, setCartMetadata] = useState({});

    // Initialize with passed product or default to hoodie
    const [items, setItems] = useState([{
        id: productId || 'sh-hoodie-001',
        quantity: 1,
        addons: addonsParam ? addonsParam.split(',') : []
    }]);

    const fetchClientSecret = useCallback(() => {
        // Create a Checkout Session
        return fetch("/api/checkout_sessions", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ items, metadata: cartMetadata }),
        })
            .then((res) => res.json())
            .then((data) => data.clientSecret);
    }, [items, cartMetadata]);

    const handleInterceptorProceed = (finalCart: any[], metadata: any) => {
        setItems(finalCart);
        setCartMetadata(metadata || {});
        setShowInterceptor(false); // Move to Stripe Step
    };

    const options = { fetchClientSecret };

    return (
        <div className="min-h-screen bg-[#0a0a0b] text-white flex flex-col items-center justify-center p-6">

            {/* Pattern: Funnel Interceptor */}
            {showInterceptor && (
                <FunnelInterceptor
                    initialCart={items}
                    onProceed={handleInterceptorProceed}
                />
            )}

            {/* Pattern: Payment */}
            {!showInterceptor && (
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
            )}

            <p className="mt-8 text-gray-500 text-sm">
                Powered by Stripe • Bank-Grade Security
            </p>
        </div>
    );
}

export default function CheckoutPage() {
    return (
        <Suspense fallback={<div className="text-white text-center p-20">Loading Secure Environment...</div>}>
            <CheckoutContent />
        </Suspense>
    );
}
