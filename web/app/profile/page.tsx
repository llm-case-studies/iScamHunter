import { PrismaClient } from '@prisma/client';
import { HunterProfile } from '../components/community/HunterProfile';

const prisma = new PrismaClient();

async function getHunterData() {
    // Mock user fetching for development - fetching the seeded user
    return await prisma.user.findUnique({
        where: { email: 'hunter@scamhunters.io' },
        include: {
            badges: true,
            progress: true
        }
    });
}

export default async function ProfilePage() {
    const hunter = await getHunterData();

    if (!hunter) {
        return (
            <div className="min-h-screen pt-32 text-center">
                <h1 className="text-2xl font-bold">Hunter not found.</h1>
                <p>Run the seed script first.</p>
            </div>
        );
    }

    // Transform dates to strings for Client Component serialization
    const serializedHunter = {
        ...hunter,
        joinedAt: hunter.joinedAt.toISOString(),
        badges: hunter.badges.map((b: any) => ({
            ...b,
            awardedAt: b.awardedAt.toISOString()
        }))
    };

    return (
        <div className="min-h-screen bg-slate-50 dark:bg-slate-900 py-12 px-4">
            {/* Spacer for navbar */}
            <div className="h-16" />

            <HunterProfile user={serializedHunter} />
        </div>
    );
}
