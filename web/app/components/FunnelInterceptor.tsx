"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

type CartItem = { id: string; quantity: number };

interface FunnelInterceptorProps {
    initialCart: CartItem[];
    onProceed: (finalCart: CartItem[], metadata?: Record<string, any>) => void;
}

export default function FunnelInterceptor({ initialCart, onProceed }: FunnelInterceptorProps) {
    const [step, setStep] = useState<'offer' | 'complete'>('offer');

    const handleAccept = () => {
        // Logic: User accepts the "Volunteer Pledge"
        // 1. Add usage "metadata" (volunteer: true)
        // 2. SWAP the item for the "Discounted" version (Simulating coupon or ID swap)

        // In a real app, we'd swap 'sh-hoodie-001' ($69.95) for 'sh-hoodie-volunteer' ($59.95)
        // For this POC, we'll just demonstrate the metadata pass-through and a console log of the swap
        const finalCart = initialCart.map(item => ({ ...item, id: item.id + '-volunteer' }));

        // Proceed with modified cart and metadata
        onProceed(finalCart, { volunteer_pledge: true });
    };

    const handleDecline = () => {
        // Proceed with original cart
        onProceed(initialCart, { volunteer_pledge: false });
    };

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4">
            <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="bg-zinc-900 border border-amber-500/30 p-8 rounded-2xl max-w-md w-full shadow-2xl relative overflow-hidden"
            >
                {/* Background FX */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/10 blur-[50px] rounded-full pointer-events-none" />

                <div className="text-center relative z-10">
                    <div className="text-4xl mb-4">🎁</div>
                    <h2 className="text-2xl font-bold text-white mb-2">Wait! A Surprise for You...</h2>
                    <p className="text-gray-400 mb-6">
                        We are building a community of researchers. If you pledge to
                        <strong> volunteer data</strong> (e.g. reporting 1 scam/month),
                        we will give you an instant <strong>15% Discount</strong> today.
                    </p>

                    <div className="flex flex-col gap-3">
                        <button
                            onClick={handleAccept}
                            className="w-full py-4 bg-gradient-to-r from-amber-500 to-amber-600 text-black font-bold rounded-lg hover:scale-[1.02] transition-transform shadow-lg shadow-amber-500/20"
                        >
                            Agreed! I'll Help & Save 15%
                        </button>

                        <button
                            onClick={handleDecline}
                            className="text-sm text-gray-500 hover:text-gray-300 py-2"
                        >
                            No thanks, I'll pay full price.
                        </button>
                    </div>
                </div>
            </motion.div>
        </div>
    );
}
