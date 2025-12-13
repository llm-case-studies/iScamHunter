import Link from 'next/link';
import { getSortedPostsData } from '@/lib/blog';
import { Shield } from 'lucide-react';

export default function BlogIndex() {
    const posts = getSortedPostsData();

    return (
        <div className="min-h-screen bg-slate-50 dark:bg-slate-900 pb-20">
            {/* Header */}
            <div className="bg-slate-900 text-white py-16">
                <div className="max-w-6xl mx-auto px-4">
                    <div className="flex items-center gap-4 mb-6">
                        <div className="p-3 bg-blue-600 rounded-lg">
                            <Shield className="w-8 h-8 text-white" />
                        </div>
                        <h1 className="text-4xl md:text-5xl font-bold tracking-tight">Hunter's Log</h1>
                    </div>
                    <p className="text-xl text-slate-400 max-w-2xl">
                        Field reports, intelligence briefings, and updates from the fight against digital deception.
                    </p>
                </div>
            </div>

            {/* Posts Grid */}
            <div className="max-w-6xl mx-auto px-4 py-12">
                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {posts.map(({ slug, frontmatter }) => (
                        <Link
                            key={slug}
                            href={`/blog/${slug}`}
                            className="group block bg-white dark:bg-slate-800 rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all border border-slate-200 dark:border-slate-700"
                        >
                            <div className="p-8">
                                <div className="text-sm text-blue-600 dark:text-blue-400 font-medium mb-3">
                                    {frontmatter.date}
                                </div>
                                <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-blue-600 transition-colors">
                                    {frontmatter.title}
                                </h2>
                                <p className="text-slate-600 dark:text-slate-300 line-clamp-3 mb-6">
                                    {frontmatter.description}
                                </p>
                                <div className="flex flex-wrap gap-2">
                                    {frontmatter.tags?.map(tag => (
                                        <span key={tag} className="px-2 py-1 bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 text-xs rounded-md uppercase tracking-wider font-semibold">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </Link>
                    ))}

                    {posts.length === 0 && (
                        <div className="col-span-full text-center py-20">
                            <p className="text-xl text-slate-500">No signals detected yet.</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
