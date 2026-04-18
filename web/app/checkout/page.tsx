"use client";

import Link from 'next/link';

export default function CheckoutPage() {
    return (
        <div className="min-h-screen bg-[#0a0a0b] text-white flex flex-col items-center justify-center p-6">
            <div className="w-full max-w-lg bg-white/5 rounded-3xl border border-white/10 p-12 shadow-2xl text-center">
                <div className="text-5xl mb-6">🛒</div>
                <h1 className="text-3xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-amber-200 to-amber-500">
                    Shop Coming Soon
                </h1>
                <p className="text-gray-400 text-lg mb-8 leading-relaxed">
                    We are setting up secure payments. The Armory will open shortly
                    with desk mats, gear, and more.
                </p>
                <Link
                    href="/"
                    className="inline-block px-8 py-3 font-bold rounded-full transition-all hover:scale-105"
                    style={{ backgroundColor: '#EFC724', color: '#0a0a0b' }}
                >
                    Back to Home
                </Link>
            </div>
        </div>
    );
}
