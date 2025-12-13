'use client';

import React from 'react';
import { Shield, Award, Zap } from 'lucide-react';

interface User {
    id: string;
    name: string | null;
    email: string | null;
    rank: string;
    xp: number;
    joinedAt: string;
    _count: {
        badges: number;
    }
}

interface HunterTableProps {
    hunters: User[];
}

export function HunterTable({ hunters }: HunterTableProps) {
    return (
        <div className="bg-white dark:bg-slate-800 rounded-xl shadow-sm border border-slate-200 dark:border-slate-700 overflow-hidden">
            <div className="overflow-x-auto">
                <table className="w-full text-left text-sm">
                    <thead className="bg-slate-50 dark:bg-slate-900/50 text-slate-500 dark:text-slate-400 font-medium">
                        <tr>
                            <th className="px-6 py-4">Hunter</th>
                            <th className="px-6 py-4">Rank</th>
                            <th className="px-6 py-4">XP</th>
                            <th className="px-6 py-4">Badges</th>
                            <th className="px-6 py-4">Joined</th>
                            <th className="px-6 py-4 text-right">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200 dark:divide-slate-700">
                        {hunters.map((hunter) => (
                            <tr key={hunter.id} className="hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-colors">
                                <td className="px-6 py-4">
                                    <div className="font-medium text-slate-900 dark:text-white">
                                        {hunter.name || 'Anonymous'}
                                    </div>
                                    <div className="text-slate-500 text-xs">
                                        {hunter.email}
                                    </div>
                                </td>
                                <td className="px-6 py-4">
                                    <div className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300">
                                        <Shield className="w-3 h-3 mr-1" />
                                        {hunter.rank}
                                    </div>
                                </td>
                                <td className="px-6 py-4 font-mono text-slate-600 dark:text-slate-300">
                                    {hunter.xp.toLocaleString()}
                                </td>
                                <td className="px-6 py-4">
                                    <div className="flex items-center text-slate-600 dark:text-slate-300">
                                        <Award className="w-4 h-4 mr-1 text-yellow-500" />
                                        {hunter._count.badges}
                                    </div>
                                </td>
                                <td className="px-6 py-4 text-slate-500">
                                    {new Date(hunter.joinedAt).toLocaleDateString()}
                                </td>
                                <td className="px-6 py-4 text-right">
                                    <button className="text-blue-600 hover:text-blue-500 font-medium text-xs border border-blue-200 dark:border-blue-800 px-3 py-1 rounded hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-colors">
                                        Grant XP
                                    </button>
                                </td>
                            </tr>
                        ))}
                        {hunters.length === 0 && (
                            <tr>
                                <td colSpan={6} className="px-6 py-12 text-center text-slate-500">
                                    No hunters found. The database is empty.
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
