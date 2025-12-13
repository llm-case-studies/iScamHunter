'use client';

import React from 'react';
import { Play, FileText, Gamepad2 } from 'lucide-react';

interface LessonPlayerProps {
    type: 'video' | 'article' | 'quiz' | 'simulation';
    videoId?: string;
    title: string;
    onComplete?: () => void;
}

export function LessonPlayer({ type, videoId, title, onComplete }: LessonPlayerProps) {
    if (type === 'article') {
        return (
            <div className="bg-white dark:bg-slate-800 rounded-xl p-8 shadow-sm border border-slate-200 dark:border-slate-700">
                <div className="flex items-center gap-4 mb-6">
                    <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-full">
                        <FileText className="w-8 h-8 text-blue-600 dark:text-blue-400" />
                    </div>
                    <h1 className="text-2xl font-bold text-slate-900 dark:text-white">{title}</h1>
                </div>
                <div className="prose dark:prose-invert max-w-none">
                    <p className="text-lg leading-relaxed text-slate-700 dark:text-slate-300">
                        This is a placeholder for the article content. In a real implementation,
                        this would render Markdown or rich text from the CMS.
                    </p>
                    <hr className="my-6 border-slate-200 dark:border-slate-700" />
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor
                        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                        nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                </div>
            </div>
        );
    }

    if (type === 'simulation') {
        return (
            <div className="bg-slate-900 rounded-xl overflow-hidden shadow-2xl border border-purple-500/30 relative">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-20" />
                <div className="relative z-10 p-12 text-center">
                    <div className="w-24 h-24 bg-purple-500/20 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg shadow-purple-500/30">
                        <Gamepad2 className="w-10 h-10 text-purple-400" />
                    </div>
                    <h2 className="text-3xl font-bold text-white mb-4">{title}</h2>
                    <p className="text-purple-200 mb-8 max-w-lg mx-auto">
                        Engage in an interactive scenario to test your skills. Detect the scam patterns
                        and deploy the correct Active Signal.
                    </p>
                    <button className="bg-purple-600 hover:bg-purple-500 text-white font-bold py-3 px-8 rounded-full shadow-lg transition-all transform hover:scale-105">
                        Start Simulation
                    </button>
                </div>
            </div>
        );
    }

    // Default to Video
    return (
        <div className="aspect-video bg-black rounded-xl overflow-hidden shadow-2xl relative group">
            <div className="absolute inset-0 flex items-center justify-center bg-slate-900/50 group-hover:bg-slate-900/40 transition-colors cursor-pointer">
                <div className="text-center">
                    <div className="w-20 h-20 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                        <Play className="w-8 h-8 text-white fill-white ml-1" />
                    </div>
                    <p className="text-white/80 font-medium">Click to Play: {title}</p>
                </div>
            </div>
            {/* Optional overlay can go here */}
        </div>
    );
}
