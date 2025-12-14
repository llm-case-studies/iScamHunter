"use client";

import { useState } from 'react';

type Props = {
    description: string;
    specs: any | null; // JSON object
};

export default function ProductTabs({ description, specs }: Props) {
    const [activeTab, setActiveTab] = useState<'description' | 'specs'>('description');

    return (
        <div className="w-full">
            {/* Tab Headers */}
            <div className="flex border-b border-white/10 mb-6">
                <button
                    onClick={() => setActiveTab('description')}
                    className={`pb-4 px-4 text-sm font-bold uppercase tracking-wider transition-colors border-b-2 ${activeTab === 'description'
                            ? 'border-amber-500 text-amber-500'
                            : 'border-transparent text-gray-500 hover:text-gray-300'
                        }`}
                >
                    Mission Brief
                </button>
                {specs && (
                    <button
                        onClick={() => setActiveTab('specs')}
                        className={`pb-4 px-4 text-sm font-bold uppercase tracking-wider transition-colors border-b-2 ${activeTab === 'specs'
                                ? 'border-amber-500 text-amber-500'
                                : 'border-transparent text-gray-500 hover:text-gray-300'
                            }`}
                    >
                        Tech Specs
                    </button>
                )}
            </div>

            {/* Tab Content */}
            <div className="min-h-[150px]">
                {activeTab === 'description' && (
                    <p className="text-gray-300 leading-relaxed text-lg">
                        {description}
                    </p>
                )}

                {activeTab === 'specs' && specs && (
                    <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                        <table className="w-full text-left">
                            <tbody>
                                {Object.entries(specs).map(([key, value]) => (
                                    <tr key={key} className="border-b border-white/5 last:border-0">
                                        <td className="py-3 text-gray-500 font-mono text-sm capitalize pr-8">
                                            {key.replace(/_/g, ' ')}
                                        </td>
                                        <td className="py-3 text-white font-mono text-sm">
                                            {Array.isArray(value)
                                                ? value.join(', ') // Handle arrays like ports list
                                                : String(value)
                                            }
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                )}
            </div>
        </div>
    );
}
