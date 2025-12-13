"use client";

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

type Scam = {
    id: number;
    title: string;
    year: number;
    medium: string;
    location: string;
    description: string;
    mechanism_name: string;
    psychology: string;
};

export default function ScamLibrary() {
    const [scams, setScams] = useState<Scam[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        async function fetchScams() {
            try {
                const response = await fetch('/api/scams');
                if (!response.ok) throw new Error('Failed to load library');
                const data = await response.json();
                setScams(data.scams);
            } catch (err) {
                setError(String(err));
            } finally {
                setLoading(false);
            }
        }
        fetchScams();
    }, []);

    if (loading) return <div className="text-center text-amber-500 py-20 animate-pulse">Consulting the Archives...</div>;
    if (error) return <div className="text-center text-red-500 py-20">Error: {error}</div>;

    return (
        <div className="w-full max-w-6xl mx-auto py-12">
            <div className="flex items-center justify-between mb-12">
                <div>
                    <h2 className="text-3xl font-bold text-white mb-2">The Archives 🏛️</h2>
                    <p className="text-gray-400">Documented instances of fraud from 300 BC to Present.</p>
                </div>
                <div className="bg-white/5 border border-white/10 px-4 py-2 rounded-lg text-sm text-gray-400 font-mono">
                    {scams.length} Documents Indexed
                </div>
            </div>

            <div className="space-y-8 relative">
                {/* Timeline Line */}
                <div className="absolute left-[39px] top-0 bottom-0 w-px bg-white/10 md:left-1/2" />

                {scams.map((scam, index) => {
                    const isLeft = index % 2 === 0;

                    return (
                        <motion.div
                            key={scam.id}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            className={`flex flex-col md:flex-row gap-8 items-start relative ${isLeft ? 'md:flex-row-reverse' : ''}`}
                        >
                            {/* Timeline Dot */}
                            <div className="absolute left-[39px] md:left-1/2 w-3 h-3 bg-amber-500 rounded-full -translate-x-1.5 mt-8 z-10 box-content border-4 border-[#0a0a0b]" />

                            {/* Date Badge (Mobile: Left, Desktop: Center) */}
                            <div className="w-20 pt-6 text-right md:text-center md:absolute md:left-1/2 md:-translate-x-1/2 z-0">
                                <span className="font-mono text-amber-500 font-bold text-lg block md:bg-[#0a0a0b] md:py-1">
                                    {scam.year < 0 ? `${Math.abs(scam.year)} BC` : scam.year}
                                </span>
                            </div>

                            {/* Content Card */}
                            <div className="flex-1 w-full md:w-[calc(50%-40px)] pl-20 md:pl-0">
                                <div className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-amber-500/30 transition-all group">
                                    <div className="flex items-start justify-between mb-4">
                                        <h3 className="text-xl font-bold text-white group-hover:text-amber-200 transition-colors">
                                            {scam.title}
                                        </h3>
                                        <span className="text-xs bg-white/10 px-2 py-1 rounded text-gray-300 border border-white/5">
                                            {scam.medium}
                                        </span>
                                    </div>

                                    <div className="mb-4 text-xs font-mono text-amber-500/80 uppercase tracking-wider">
                                        Mechanism: {scam.mechanism_name}
                                    </div>

                                    <p className="text-gray-300 text-sm leading-relaxed mb-4">
                                        {scam.description}
                                    </p>

                                    <div className="flex items-center gap-2 text-xs text-gray-500 border-t border-white/10 pt-3 mt-2">
                                        <span>🧠 Psychology:</span>
                                        <span className="text-gray-400 italic">{scam.psychology}</span>
                                    </div>
                                </div>
                            </div>

                            {/* Spacer for alternating layout */}
                            <div className="hidden md:block flex-1" />
                        </motion.div>
                    );
                })}
            </div>
        </div>
    );
}
