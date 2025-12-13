'use client';

import React, { useState, useEffect } from 'react';
import { WebinarPlayer } from '../components/webinar/WebinarPlayer';
import Link from 'next/link';

export default function WebinarPage() {
    // State to simulate "Live" vs "Replay" or "Offer Reveal"
    const [showOffer, setShowOffer] = useState(false);

    // Simulate offer appearing after 5 seconds for demo purposes
    useEffect(() => {
        const timer = setTimeout(() => setShowOffer(true), 5000);
        return () => clearTimeout(timer);
    }, []);

    return (
        <div className="min-h-screen bg-[#0a0a0b] text-white">
            {/* Header */}
            <header className="border-b border-white/10 bg-[#0a0a0b]/80 backdrop-blur-md sticky top-0 z-50">
                <div className="container mx-auto px-6 h-16 flex items-center justify-between">
                    <div className="font-bold text-xl tracking-tight">
                        <span className="text-amber-500">SCAM</span> HUNTERS <span className="text-xs uppercase bg-red-600 text-white px-2 py-0.5 rounded ml-2 animate-pulse">Live</span>
                    </div>
                    <Link href="/" className="text-sm text-gray-400 hover:text-white transition-colors">
                        Exit Room
                    </Link>
                </div>
            </header>

            <main className="container mx-auto px-6 py-12">
                <div className="max-w-5xl mx-auto">
                    {/* Headline */}
                    <div className="text-center mb-8">
                        <h1 className="text-3xl md:text-5xl font-black mb-4">
                            How to Spot a "Pig Butchering" Scam in 30 Seconds
                        </h1>
                        <p className="text-xl text-gray-400">
                            Exclusive Training for First Wave Hunters
                        </p>
                    </div>

                    {/* Video Player */}
                    <div className="mb-12">
                        {/* Using a placeholder YouTube ID - User can replace with actual webinar */}
                        <WebinarPlayer videoId="dQw4w9WgXcQ" title="Scam Hunters Training" />
                    </div>

                    {/* Dynamic Offer Section (The "CTA") */}
                    <div className={`transition-all duration-1000 transform ${showOffer ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                        <div className="bg-gradient-to-br from-amber-500/10 to-amber-900/10 border border-amber-500/20 rounded-3xl p-8 md:p-12 text-center relative overflow-hidden">
                            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-amber-500 to-transparent" />

                            <h2 className="text-2xl md:text-3xl font-bold mb-4">
                                Ready to join the First Wave?
                            </h2>
                            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
                                Get the full "Field Operations" kit, access to the private Discord, and your official Hunter Badge.
                            </p>

                            <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
                                <Link
                                    href="/checkout"
                                    className="px-8 py-4 bg-amber-500 hover:bg-amber-400 text-black font-bold text-lg rounded-full shadow-lg shadow-amber-500/20 transition-all hover:scale-105"
                                >
                                    Get The Kit - $69.95
                                </Link>
                                <span className="text-sm text-gray-500">
                                    30-Day Money Back Guarantee
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* Chat / Sidebar (Visual Placeholder) */}
                    <div className="mt-16 border-t border-white/10 pt-12">
                        <h3 className="text-lg font-bold mb-6 text-gray-500">Live Chat Replay</h3>
                        <div className="space-y-4 max-w-xl mx-auto md:mx-0">
                            <ChatMessage user="Sarah_K" message="I had no idea the 'wrong number' texts were connected to this!" time="2m ago" />
                            <ChatMessage user="Mike_Hunter" message="The desk mat is actually super high quality. Use it daily." time="1m ago" />
                            <ChatMessage user="Admin" message="Link is live! unique discount applied." time="Just now" isMod />
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}

function ChatMessage({ user, message, time, isMod = false }: { user: string, message: string, time: string, isMod?: boolean }) {
    return (
        <div className="flex gap-3 items-start">
            <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold ${isMod ? 'bg-amber-500 text-black' : 'bg-white/10 text-white'}`}>
                {user[0]}
            </div>
            <div>
                <div className="flex gap-2 items-baseline">
                    <span className={`text-sm font-bold ${isMod ? 'text-amber-500' : 'text-gray-300'}`}>{user}</span>
                    <span className="text-xs text-gray-600">{time}</span>
                </div>
                <p className="text-gray-400 text-sm">{message}</p>
            </div>
        </div>
    );
}
