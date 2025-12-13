'use client';

import React from 'react';

interface WebinarPlayerProps {
    videoId: string; // YouTube ID for now
    title: string;
}

export function WebinarPlayer({ videoId, title }: WebinarPlayerProps) {
    return (
        <div className="relative w-full aspect-video rounded-2xl overflow-hidden shadow-2xl border border-white/10 bg-black">
            <iframe
                src={`https://www.youtube.com/embed/${videoId}?autoplay=1&modestbranding=1&rel=0`}
                title={title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute inset-0 w-full h-full"
            />
        </div>
    );
}
