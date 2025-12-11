"use client";

import ScamGenealogist from "../components/ScamGenealogist";
import Navigation from "../components/Navigation"; // Assuming you might have a generic Nav later, typically sticking to Layout. But for now, straightforward.

export default function LabPage() {
    return (
        <div className="min-h-screen bg-[#0a0a0b] text-white selection:bg-amber-500/30">
            {/* Background Effects */}
            <div className="fixed inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-amber-500/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2" />
                <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2" />
            </div>

            <div className="relative z-10 container mx-auto px-6 py-20">
                <div className="text-center mb-16">
                    <h1 className="text-5xl md:text-7xl font-black mb-6 tracking-tight">
                        The <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 to-amber-500">Lab</span>
                    </h1>
                    <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                        Where we deconstruct deception using history, humor, and AI.
                    </p>
                </div>

                <ScamGenealogist />
            </div>
        </div>
    );
}
