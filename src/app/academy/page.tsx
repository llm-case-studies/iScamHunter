import Link from 'next/link';
import { BookOpen, Trophy, ArrowRight } from 'lucide-react';
import coursesData from '@/data/courses.json';

export default function AcademyDashboard() {
    return (
        <div className="min-h-screen bg-slate-50 dark:bg-black pb-20">
            {/* Hero Section */}
            <div className="bg-gradient-to-r from-blue-900 to-slate-900 text-white pt-32 pb-20 px-6">
                <div className="max-w-7xl mx-auto">
                    <div className="max-w-3xl">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/20 text-blue-300 text-sm font-semibold mb-6 border border-blue-500/30">
                            <Trophy className="w-4 h-4" />
                            <span>Phase 7: Academy Beta</span>
                        </div>
                        <h1 className="text-4xl md:text-6xl font-black mb-6 tracking-tight">
                            Scam Hunter <span className="text-blue-400">Academy</span>
                        </h1>
                        <p className="text-xl text-slate-300 leading-relaxed mb-8 max-w-2xl">
                            Master the art of digital self-defense. Learn the psychology,
                            tactics, and tools used by scammers — and how to beat them at their
                            own game.
                        </p>
                    </div>
                </div>
            </div>

            {/* Course Grid */}
            <div className="max-w-7xl mx-auto px-6 -mt-12 relative z-10">
                <div className="grid md:grid-cols-2 gap-8">
                    {coursesData.courses.map((course) => (
                        <Link
                            key={course.id}
                            href={`/academy/${course.id}`}
                            className="group bg-white dark:bg-slate-900 rounded-2xl p-8 border border-slate-200 dark:border-slate-800 shadow-xl hover:shadow-2xl hover:border-blue-500 dark:hover:border-blue-500 transition-all duration-300"
                        >
                            <div className="flex items-start justify-between mb-6">
                                <div className="w-14 h-14 bg-blue-100 dark:bg-blue-900/30 rounded-xl flex items-center justify-center text-blue-600 dark:text-blue-400">
                                    <BookOpen className="w-7 h-7" />
                                </div>
                                <div className="px-3 py-1 bg-slate-100 dark:bg-slate-800 rounded-full text-xs font-semibold text-slate-600 dark:text-slate-400">
                                    {course.modules.length} Modules
                                </div>
                            </div>

                            <h2 className="text-2xl font-bold mb-3 text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                                {course.title}
                            </h2>
                            <p className="text-slate-600 dark:text-slate-400 mb-6">
                                Complete comprehensive training modules designed to take you from a novice to a certified Scam Hunter.
                            </p>

                            <div className="flex items-center text-blue-600 dark:text-blue-400 font-semibold group-hover:translate-x-2 transition-transform">
                                Start Learning <ArrowRight className="w-5 h-5 ml-2" />
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
}
