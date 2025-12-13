'use client';

import posthog from 'posthog-js';
import { PostHogProvider as PHProvider } from 'posthog-js/react';
import { useEffect } from 'react';

export function PostHogProvider({ children }: { children: React.ReactNode }) {
    useEffect(() => {
        posthog.init(process.env.NEXT_PUBLIC_POSTHOG_KEY || 'phc_Gf6hyKT7IJvxRE3DzuCBiLctcbK9ZMZEmTYOVJiEudP', {
            api_host: process.env.NEXT_PUBLIC_POSTHOG_HOST || 'https://us.i.posthog.com',
            capture_pageview: false, // We handle this manually in a PageView component if needed, or let Next.js router handle it - default false for SPA mostly
            // For simple Next.js App Router, auto-capture often works, but we should be careful with double counting.
            // Let's stick to default and auto-pageview off to be safe, then turn it on if valid.
            // Actually, for App Router, 'capture_pageview: false' and a Suspense wrapper is the 'correct' way.
            // For now, simple init.
        });
    }, []);

    return <PHProvider client={posthog}>{children}</PHProvider>;
}
