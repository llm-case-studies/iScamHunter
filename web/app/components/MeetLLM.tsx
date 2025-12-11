import Image from "next/image";
import { useState } from "react";

export default function MeetLLM() {
    const [active, setActive] = useState(false);

    return (
        <div
            className="relative p-1 group cursor-pointer"
            onMouseEnter={() => setActive(true)}
            onMouseLeave={() => setActive(false)}
            onClick={() => setActive(!active)}
        >
            <div
                className={`absolute inset-0 rounded-2xl blur-xl transition-all duration-500 ${active ? 'opacity-100 bg-[#EFC724]' : 'opacity-20 bg-white'}`}
            />

            <div className="relative p-8 rounded-2xl bg-slate-900 border border-white/10 overflow-hidden min-h-[300px] flex flex-col items-center justify-center text-center transition-all">
                {/* Default State */}
                <div className={`transition-all duration-500 absolute inset-0 flex flex-col items-center justify-center p-6 ${active ? 'opacity-0 scale-90' : 'opacity-100 scale-100'}`}>
                    <span className="text-4xl mb-4">🤖</span>
                    <h3 className="text-2xl font-bold text-white mb-2">Meet our LLM</h3>
                    <p className="text-gray-400 font-mono text-sm tracking-widest uppercase">
                        Fast. Sharp. Pre-trained.
                    </p>
                    <div className="mt-6 px-4 py-2 rounded-full border border-white/20 text-xs text-gray-500 group-hover:border-white/40 group-hover:text-white transition-all">
                        Hover to activate
                    </div>
                </div>

                {/* Revealed State */}
                <div className={`transition-all duration-500 absolute inset-0 flex flex-col items-center justify-center p-6 bg-black/90 ${active ? 'opacity-100 scale-100' : 'opacity-0 scale-110'}`}>
                    <div className="relative w-32 h-32 mb-4 animate-bounce">
                        <Image
                            src="/assets/logo/variants/logo_gold.svg"
                            alt="Lady Lasso Magic"
                            fill
                            className="object-contain drop-shadow-[0_0_15px_rgba(239,199,36,0.5)]"
                        />
                    </div>
                    <h3 className="text-2xl font-black text-[#EFC724] mb-2 tracking-tighter">
                        LADY LASSO MAGIC
                    </h3>
                    <p className="text-white font-bold text-lg italic">
                        &ldquo;You have been pre-warned.<br />
                        Do not even try...&rdquo;
                    </p>
                </div>
            </div>
        </div>
    );
}
