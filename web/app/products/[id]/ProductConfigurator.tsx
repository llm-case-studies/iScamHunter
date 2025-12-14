"use client";

import { useState } from 'react';
import Link from 'next/link';

type Option = {
    id: string;
    name: string;
    price: number;
    description: string;
};

type Props = {
    basePrice: number;
    productId: string;
    options: Option[];
};

export default function ProductConfigurator({ basePrice, productId, options }: Props) {
    const [selectedOptions, setSelectedOptions] = useState<string[]>([]);

    const toggleOption = (id: string) => {
        setSelectedOptions(prev =>
            prev.includes(id) ? prev.filter(x => x !== id) : [...prev, id]
        );
    };

    const totalPrice = basePrice + options
        .filter(opt => selectedOptions.includes(opt.id))
        .reduce((sum, opt) => sum + opt.price, 0);

    // Build URL with options encoded
    // Format: /checkout?productId=xyz&addons=opt_vllm,opt_admin
    const checkoutUrl = `/checkout?productId=${productId}&addons=${selectedOptions.join(',')}`;

    return (
        <div className="bg-white/5 border border-white/10 rounded-xl p-6 mt-8">
            <h3 className="text-xl font-bold text-white mb-4">Configure Your Loadout</h3>

            <div className="space-y-4 mb-6">
                {options.map(option => (
                    <div
                        key={option.id}
                        onClick={() => toggleOption(option.id)}
                        className={`flex items-start p-4 rounded-lg cursor-pointer border transition-all ${selectedOptions.includes(option.id)
                                ? 'bg-amber-500/10 border-amber-500'
                                : 'bg-black/20 border-white/5 hover:border-white/20'
                            }`}
                    >
                        <div className={`w-5 h-5 mt-1 rounded border flex items-center justify-center mr-4 ${selectedOptions.includes(option.id) ? 'bg-amber-500 border-amber-500' : 'border-gray-500'
                            }`}>
                            {selectedOptions.includes(option.id) && (
                                <span className="text-black font-bold text-xs">✓</span>
                            )}
                        </div>
                        <div className="flex-1">
                            <div className="flex justify-between">
                                <span className={selectedOptions.includes(option.id) ? 'text-amber-500 font-bold' : 'text-white font-medium'}>
                                    {option.name}
                                </span>
                                <span className="text-amber-500 font-mono">
                                    +${(option.price / 100).toFixed(2)}
                                </span>
                            </div>
                            <p className="text-gray-400 text-sm mt-1">{option.description}</p>
                        </div>
                    </div>
                ))}
            </div>

            <div className="border-t border-white/10 pt-4 flex items-center justify-between mb-4">
                <span className="text-gray-400">Total Configured Price</span>
                <span className="text-2xl font-mono text-amber-500 font-bold">
                    ${(totalPrice / 100).toFixed(2)}
                </span>
            </div>

            <Link
                href={checkoutUrl}
                className="w-full block text-center bg-amber-500 text-black font-bold text-lg py-4 rounded-xl hover:bg-amber-400 transition-all hover:scale-[1.02] shadow-lg shadow-amber-500/20"
            >
                Acquire Configured Asset
            </Link>
        </div>
    );
}
