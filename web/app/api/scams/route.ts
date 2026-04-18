import { NextResponse } from 'next/server';
import { readFileSync, existsSync } from 'fs';
import { join } from 'path';

export async function GET() {
    try {
        // Try loading scams from bundled JSON (works in Docker + dev)
        const jsonPath = join(process.cwd(), 'data', 'scams.json');
        if (existsSync(jsonPath)) {
            const data = JSON.parse(readFileSync(jsonPath, 'utf-8'));
            return NextResponse.json({ scams: data });
        }

        // Fallback: try the scouting directory (dev only)
        const devPath = join(process.cwd(), '..', 'scouting', 'scams.json');
        if (existsSync(devPath)) {
            const data = JSON.parse(readFileSync(devPath, 'utf-8'));
            return NextResponse.json({ scams: data });
        }

        return NextResponse.json({ scams: [], message: 'No scam data found' });
    } catch (error) {
        console.error('Scams API Error:', error);
        return NextResponse.json(
            { error: 'Failed to fetch scams', details: String(error) },
            { status: 500 }
        );
    }
}
