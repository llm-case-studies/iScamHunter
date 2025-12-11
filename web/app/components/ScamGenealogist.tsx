import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Mock database of historical scams
const HISTORICAL_SCAMS = [
    {
        keywords: ['crypto', 'token', 'yield', 'bitcoin', 'coin', 'defi'],
        ancestor: 'The South Sea Bubble',
        year: '1720',
        origin: 'London, England',
        quote: '"The company for carrying on an undertaking of great advantage, but nobody to know what it is."',
        description: 'In 1720, speculators sold shares in companies with no business plan, driving prices to insane heights before the inevitable crash. Your "revolutionary token" is just a 300-year-old coffee shop hustle.',
        originalityScore: 0
    },
    {
        keywords: ['prince', 'king', 'royal', 'wealth', 'inheritance', 'bank', 'transfer'],
        ancestor: 'The Spanish Prisoner',
        year: '1588',
        origin: 'Europe',
        quote: '"A wealthy nobleman is imprisoned under a false name and needs funds to smuggle his treasure out..."',
        description: 'This confidence trick predates the internet by 400 years. It evolved into the "Nigerian Prince" scam, but the mechanism is identical: Advance Fee Fraud. You aren\'t a hacker; you\'re a reenactor.',
        originalityScore: 1
    },
    {
        keywords: ['pyramid', 'recruit', 'downline', 'referral', 'marketing'],
        ancestor: 'The Ponzi Scheme (Charles Ponzi)',
        year: '1920',
        origin: 'Boston, USA',
        quote: '"Robbing Peter to pay Paul."',
        description: 'Charles Ponzi promised 50% returns in 45 days using international postal reply coupons. He was just paying early investors with new investors\' money. Classic structure, zero innovation.',
        originalityScore: 0
    }
];

export default function ScamGenealogist() {
    const [input, setInput] = useState('');
    const [analyzing, setAnalyzing] = useState(false);
    const [result, setResult] = useState<typeof HISTORICAL_SCAMS[0] | null>(null);

    const analyzeScam = () => {
        if (!input) return;
        setAnalyzing(true);
        setResult(null);

        // Simulate AI thinking time
        setTimeout(() => {
            const lowerInput = input.toLowerCase();
            const match = HISTORICAL_SCAMS.find(scam =>
                scam.keywords.some(keyword => lowerInput.includes(keyword))
            );

            // Default fallback if no match
            setResult(match || {
                keywords: [],
                ancestor: ' The Snake Oil Salesman',
                year: '1800s',
                origin: 'American Frontier',
                quote: '"Good for what ails you!"',
                description: 'Vague promises, miraculous cures, and a quick exit. A tale as old as time.',
                originalityScore: 2
            });
            setAnalyzing(false);
        }, 2000);
    };

    return (
        <div className="w-full max-w-4xl mx-auto p-6">
            <div className="bg-black/40 backdrop-blur-xl border border-white/10 rounded-3xl p-8 shadow-2xl">
                <div className="text-center mb-10">
                    <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-amber-200 to-amber-500 mb-2">
                        The Scam Genealogist 🧬
                    </h2>
                    <p className="text-gray-400">
                        Tell us about a "new" scam. Our AI historians will find its ancestor and deflate the scammer's ego.
                    </p>
                </div>

                <div className="space-y-6">
                    <div className="relative">
                        <textarea
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            placeholder="Paste the scam message or describe the scheme here... (e.g., 'New crypto token promising 1000% yield')"
                            className="w-full h-32 bg-white/5 border border-white/10 rounded-xl p-4 text-white placeholder-gray-500 focus:outline-none focus:border-amber-500/50 transition-all resize-none"
                        />
                        <div className="absolute bottom-4 right-4 text-xs text-gray-600">
                            AI-Powered History Engine
                        </div>
                    </div>

                    <div className="flex justify-center">
                        <button
                            onClick={analyzeScam}
                            disabled={analyzing || !input}
                            className={`
                px-8 py-3 rounded-full font-bold text-lg transition-all
                ${analyzing
                                    ? 'bg-gray-700 text-gray-500 cursor-not-allowed'
                                    : 'bg-gradient-to-r from-amber-500 to-orange-600 text-white hover:scale-105 hover:shadow-lg hover:shadow-amber-500/20'}
              `}
                        >
                            {analyzing ? 'Consulting the Archives...' : 'Analyze Ancestry 🔍'}
                        </button>
                    </div>
                </div>

                <AnimatePresence>
                    {result && (
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            className="mt-12 border-t border-white/10 pt-10"
                        >
                            <div className="grid md:grid-cols-2 gap-8 items-center">
                                <div className="space-y-4">
                                    <div className="inline-block px-3 py-1 rounded-full bg-amber-500/10 text-amber-500 text-xs font-bold border border-amber-500/20">
                                        ANCESTOR IDENTIFIED
                                    </div>
                                    <h3 className="text-4xl font-black text-white">
                                        {result.ancestor}
                                    </h3>
                                    <div className="flex items-center gap-4 text-sm text-gray-400 font-mono">
                                        <span>🗓️ {result.year}</span>
                                        <span>📍 {result.origin}</span>
                                    </div>
                                    <blockquote className="border-l-2 border-amber-500 pl-4 py-2 text-gray-300 italic">
                                        {result.quote}
                                    </blockquote>
                                </div>

                                <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
                                    <h4 className="text-amber-500 font-bold mb-3 uppercase text-sm tracking-wider">
                                        Ego Deflation Report
                                    </h4>
                                    <p className="text-gray-300 leading-relaxed mb-6">
                                        {result.description}
                                    </p>

                                    <div className="flex items-center justify-between pt-4 border-t border-white/10">
                                        <span className="text-gray-500 text-sm">Originality Score</span>
                                        <div className="flex items-center gap-2">
                                            <span className="text-4xl font-black text-red-500">{result.originalityScore}</span>
                                            <span className="text-gray-600 text-xl font-bold">/ 10</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </div>
    );
}
