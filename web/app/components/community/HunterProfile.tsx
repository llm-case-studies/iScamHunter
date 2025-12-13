'use client';

import React from 'react';
import { User, Shield, Trophy, Award, Zap } from 'lucide-react';

interface Badge {
    id: string;
    slug: string;
    awardedAt: string;
}

interface HunterProfileProps {
    user: {
        name: string | null;
        email: string | null;
        rank: string;
        xp: number;
        joinedAt: string;
        badges: Badge[];
    }
}

export function HunterProfile({ user }: HunterProfileProps) {
    // Calculate progress to next rank (mock logic)
    const nextRankXp = 2000;
    const progressPercent = Math.min(100, (user.xp / nextRankXp) * 100);

    return (
        <div className="max-w-4xl mx-auto">
            {/* Header Card */}
            <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl overflow-hidden border border-slate-200 dark:border-slate-700 mb-8">
                <div className="h-32 bg-gradient-to-r from-blue-600 to-purple-600 relative">
                    <div className="absolute -bottom-16 left-8 p-1 bg-white dark:bg-slate-800 rounded-full">
                        <div className="w-32 h-32 bg-slate-200 dark:bg-slate-700 rounded-full flex items-center justify-center border-4 border-white dark:border-slate-800">
                            <User className="w-16 h-16 text-slate-400" />
                        </div>
                    </div>
                </div>
                <div className="pt-20 px-8 pb-8">
                    <div className="flex justify-between items-start">
                        <div>
                            <h1 className="text-3xl font-bold text-slate-900 dark:text-white">{user.name || 'Anonymous Hunter'}</h1>
                            <p className="text-slate-500 dark:text-slate-400 flex items-center gap-2 mt-1">
                                <Shield className="w-4 h-4" />
                                {user.rank}
                            </p>
                        </div>
                        <div className="text-right">
                            <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">{user.xp} XP</div>
                            <div className="text-sm text-slate-500">Total Contribution</div>
                        </div>
                    </div>

                    {/* XP Bar */}
                    <div className="mt-8">
                        <div className="flex justify-between text-sm mb-2 font-medium">
                            <span className="text-slate-600 dark:text-slate-300">Current Level</span>
                            <span className="text-slate-600 dark:text-slate-300">Next Rank</span>
                        </div>
                        <div className="h-3 bg-slate-100 dark:bg-slate-700 rounded-full overflow-hidden">
                            <div
                                className="h-full bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-1000"
                                style={{ width: `${progressPercent}%` }}
                            />
                        </div>
                        <div className="mt-2 text-xs text-slate-400 text-right">
                            {nextRankXp - user.xp} XP to level up
                        </div>
                    </div>
                </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
                {/* Badges Section */}
                <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-700 p-6">
                    <div className="flex items-center gap-3 mb-6">
                        <Award className="w-6 h-6 text-yellow-500" />
                        <h2 className="text-xl font-bold text-slate-900 dark:text-white">Achievements</h2>
                    </div>

                    <div className="grid grid-cols-3 gap-4">
                        {user.badges.map(badge => (
                            <div key={badge.id} className="flex flex-col items-center text-center group">
                                <div className="w-16 h-16 bg-slate-100 dark:bg-slate-700 rounded-xl flex items-center justify-center mb-2 group-hover:scale-110 transition-transform">
                                    <Trophy className="w-8 h-8 text-yellow-500" />
                                </div>
                                <span className="text-xs font-medium text-slate-600 dark:text-slate-300 capitalize">
                                    {badge.slug.replace('-', ' ')}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Recent Activity (Placeholder logic) */}
                <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-700 p-6">
                    <div className="flex items-center gap-3 mb-6">
                        <Zap className="w-6 h-6 text-blue-500" />
                        <h2 className="text-xl font-bold text-slate-900 dark:text-white">Recent Activity</h2>
                    </div>

                    <div className="space-y-6">
                        <div className="flex gap-4">
                            <div className="mt-1">
                                <div className="w-2 h-2 rounded-full bg-green-500 ring-4 ring-green-100 dark:ring-green-900/30" />
                            </div>
                            <div>
                                <p className="text-sm font-medium text-slate-900 dark:text-white">Completed &quot;Digital Reconnaissance&quot;</p>
                                <p className="text-xs text-slate-500">2 hours ago • +150 XP</p>
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <div className="mt-1">
                                <div className="w-2 h-2 rounded-full bg-blue-500 ring-4 ring-blue-100 dark:ring-blue-900/30" />
                            </div>
                            <div>
                                <p className="text-sm font-medium text-slate-900 dark:text-white">Joined &quot;Field Operations&quot; Module</p>
                                <p className="text-xs text-slate-500">1 day ago</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
