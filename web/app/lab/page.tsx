"use client";

import { useState } from 'react';
import Link from 'next/link';
import ScamGenealogist from "../components/ScamGenealogist";
import ScamLibrary from "../components/ScamLibrary";

export default function LabPage() {
    const [activeRoom, setActiveRoom] = useState<'genealogist' | 'librarian'>('genealogist');

    return (
        <div className="min-h-screen bg-[#0a0a0b] text-white selection:bg-amber-500/30 font-sans">
            {/* Background Effects */}
            <div className="fixed inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-amber-500/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2" />
                <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2" />
            </div>

            <div className="relative z-10 container mx-auto px-6 py-20">
                <div className="absolute top-0 left-6">
                    <Link
                        href="/"
                        className="text-sm text-gray-500 hover:text-amber-500 transition-colors flex items-center gap-2"
                    >
                        ← Back to Base
                    </Link>
                </div>

                <div className="text-center mb-10">
                    <h1 className="text-5xl md:text-7xl font-black mb-6 tracking-tight">
                        The <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 to-amber-500">Lab</span>
                    </h1>
                    <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-8">
                        Where we deconstruct deception using history, humor, and AI.
                    </p>

                    {/* Room Switcher */}
                    <div className="inline-flex bg-white/5 border border-white/10 rounded-full p-1 backdrop-blur-xl">
                        <button
                            onClick={() => setActiveRoom('genealogist')}
                            className={`px-6 py-2 rounded-full text-sm font-bold transition-all ${activeRoom === 'genealogist'
                                ? 'bg-amber-500 text-[#0a0a0b] shadow-lg shadow-amber-500/20'
                                : 'text-gray-400 hover:text-white'
                                }`}
                        >
                            The Genealogist 🧬
                        </button>
                        <button
                            onClick={() => setActiveRoom('librarian')}
                            className={`px-6 py-2 rounded-full text-sm font-bold transition-all ${activeRoom === 'librarian'
                                ? 'bg-amber-500 text-[#0a0a0b] shadow-lg shadow-amber-500/20'
                                : 'text-gray-400 hover:text-white'
                                }`}
                        >
                            The Librarian 📚
                        </button>
                    </div>
                </div>

                {/* Dynamic Content */}
                <div className="min-h-[600px]">
                    {activeRoom === 'genealogist' ? <ScamGenealogist /> : <ScamLibrary />}
                </div>
            </div>
        </div>
    );
}
