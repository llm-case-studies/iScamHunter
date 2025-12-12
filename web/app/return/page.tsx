"use client";

import { useEffect, useState } from 'react';
import { redirect, useSearchParams } from 'next/navigation';
import Link from 'next/link';

export default function ReturnPage() {
    const [status, setStatus] = useState<string | null>(null);
    const [customerEmail, setCustomerEmail] = useState('');
    const searchParams = useSearchParams();
    const sessionId = searchParams.get('session_id');

    useEffect(() => {
        if (!sessionId) return;

        // In a real app, verify the session via API here
        // For POC, we just assume success if we got redirected here with an ID
        setStatus('complete');
    }, [sessionId]);

    if (!sessionId) {
        return <div className="text-white text-center py-20">Invalid Session</div>;
    }

    if (status === 'open') {
        return (
            <div className="text-white text-center py-20">
                Redirecting to Checkout...
            </div>
        );
    }

    if (status === 'complete') {
        return (
            <div className="min-h-screen bg-[#0a0a0b] text-white flex items-center justify-center p-6">
                <div className="w-full max-w-lg bg-green-500/10 border border-green-500/30 rounded-3xl p-10 text-center relative overflow-hidden">
                    {/* Success Glow */}
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-40 h-40 bg-green-500/50 blur-[80px] rounded-full" />

                    <div className="relative z-10">
                        <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg shadow-green-500/40">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-[#0a0a0b]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                            </svg>
                        </div>

                        <h1 className="text-4xl font-bold mb-4 text-white">Order Confirmed!</h1>
                        <p className="text-gray-300 mb-8 leading-relaxed">
                            Thank you joining the hunt. Your gear is pending fulfillment.<br />
                            <span className="text-sm opacity-60">(This is a test mode confirmed)</span>
                        </p>

                        <Link
                            href="/"
                            className="inline-block px-8 py-3 rounded-full bg-white text-[#0a0a0b] font-bold hover:scale-105 transition-transform"
                        >
                            Back to Command Center
                        </Link>
                    </div>
                </div>
            </div>
        );
    }

    return null;
}
