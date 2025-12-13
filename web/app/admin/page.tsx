import { PrismaClient } from '@prisma/client';
import { HunterTable } from '../components/admin/HunterTable';
import { ExternalLink, Database, CreditCard } from 'lucide-react';
import Link from 'next/link';

const prisma = new PrismaClient();

async function getHunters() {
    return await prisma.user.findMany({
        orderBy: { xp: 'desc' },
        include: {
            _count: {
                select: { badges: true }
            }
        }
    });
}

export default async function AdminPage() {
    const hunters = await getHunters();

    // Serialize dates for client component
    const serializedHunters = hunters.map(h => ({
        ...h,
        joinedAt: h.joinedAt.toISOString()
    }));

    return (
        <div className="min-h-screen bg-slate-50 dark:bg-slate-900 pb-20 pt-24 px-6">
            <div className="max-w-7xl mx-auto">

                {/* Header */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-12">
                    <div>
                        <h1 className="text-3xl font-bold text-slate-900 dark:text-white flex items-center gap-3">
                            <span className="bg-indigo-600 text-white p-2 rounded-lg">
                                <Database className="w-6 h-6" />
                            </span>
                            Librarian Dashboard
                        </h1>
                        <p className="text-slate-500 mt-2">
                            Command center for managing the Scam Hunter community.
                        </p>
                    </div>
                    <Link
                        href="https://dashboard.stripe.com"
                        target="_blank"
                        className="flex items-center gap-2 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 px-4 py-2 rounded-lg border border-slate-200 dark:border-slate-700 hover:shadow-md transition-all font-medium"
                    >
                        <CreditCard className="w-4 h-4 text-indigo-500" />
                        Open Stripe Dashboard
                        <ExternalLink className="w-3 h-3 text-slate-400" />
                    </Link>
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                    <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-sm border border-slate-200 dark:border-slate-700">
                        <div className="text-sm font-medium text-slate-500 mb-1">Total Hunters</div>
                        <div className="text-3xl font-bold text-slate-900 dark:text-white">{hunters.length}</div>
                    </div>
                    <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-sm border border-slate-200 dark:border-slate-700">
                        <div className="text-sm font-medium text-slate-500 mb-1">Total XP Awarded</div>
                        <div className="text-3xl font-bold text-indigo-600 dark:text-indigo-400">
                            {hunters.reduce((acc, curr) => acc + curr.xp, 0).toLocaleString()}
                        </div>
                    </div>
                    <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-sm border border-slate-200 dark:border-slate-700">
                        <div className="text-sm font-medium text-slate-500 mb-1">Verified Scams</div>
                        <div className="text-3xl font-bold text-green-600 dark:text-green-400">0</div>
                        <div className="text-xs text-slate-400 mt-1">Ready for workflows</div>
                    </div>
                </div>

                {/* Main Content */}
                <div className="space-y-6">
                    <h2 className="text-xl font-bold text-slate-900 dark:text-white">Active Hunters</h2>
                    <HunterTable hunters={serializedHunters} />
                </div>
            </div>
        </div>
    );
}
