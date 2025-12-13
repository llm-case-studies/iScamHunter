import { getPostBySlug, getSortedPostsData } from '@/lib/blog';
import { MDXRemote } from 'next-mdx-remote/rsc';
import Link from 'next/link';
import { ArrowLeft, Calendar, User, Shield } from 'lucide-react';
import { notFound } from 'next/navigation';

export async function generateStaticParams() {
    const posts = getSortedPostsData();
    return posts.map((post) => ({
        slug: post.slug,
    }));
}

// Custom components for MDX
const components = {
    CallToAction: ({ href, children }: { href: string; children: React.ReactNode }) => (
        <div className="my-8 p-8 bg-gradient-to-r from-blue-600 to-indigo-700 rounded-xl shadow-lg text-center text-white not-prose">
            <Shield className="w-12 h-12 mx-auto mb-4 text-white/80" />
            <h3 className="text-2xl font-bold mb-4">Taking Action?</h3>
            <Link href={href} className="inline-block bg-white text-blue-700 font-bold py-3 px-8 rounded-full hover:bg-blue-50 transition-colors shadow-md">
                {children}
            </Link>
        </div>
    ),
    // Override standard elements for better styling
    h1: (props: any) => <h1 {...props} className="text-3xl font-bold mt-8 mb-4 text-slate-900 dark:text-white" />,
    h2: (props: any) => <h2 {...props} className="text-2xl font-bold mt-8 mb-4 text-slate-900 dark:text-white" />,
    h3: (props: any) => <h3 {...props} className="text-xl font-bold mt-6 mb-3 text-slate-900 dark:text-white" />,
    p: (props: any) => <p {...props} className="mb-4 leading-relaxed text-slate-700 dark:text-slate-300" />,
    ul: (props: any) => <ul {...props} className="list-disc pl-6 mb-4 space-y-2 text-slate-700 dark:text-slate-300" />,
    li: (props: any) => <li {...props} className="pl-1" />,
};

type Props = {
    params: Promise<{ slug: string }>;
};

export default async function BlogPost({ params }: Props) {
    // @ts-ignore - Next.js 15+ param unwrapping
    const { slug } = await params;
    const post = getPostBySlug(slug);

    if (!post) {
        notFound();
    }

    return (
        <div className="min-h-screen bg-slate-50 dark:bg-slate-900 pb-20">
            {/* Header Image/Pattern */}
            <div className="h-64 bg-slate-900 relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-20" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent" />
            </div>

            <div className="max-w-3xl mx-auto px-4 -mt-32 relative z-10">
                <Link
                    href="/blog"
                    className="inline-flex items-center text-white/80 hover:text-white mb-6 transition-colors font-medium backdrop-blur-sm bg-black/20 px-3 py-1 rounded-full"
                >
                    <ArrowLeft className="w-4 h-4 mr-2" />
                    Back to Hunter's Log
                </Link>

                <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl overflow-hidden border border-slate-200 dark:border-slate-700">
                    <div className="p-8 md:p-12">
                        <div className="flex flex-wrap gap-2 mb-6">
                            {post.frontmatter.tags?.map(tag => (
                                <span key={tag} className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-sm rounded-full font-semibold uppercase tracking-wide">
                                    {tag}
                                </span>
                            ))}
                        </div>

                        <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white mb-6 leading-tight">
                            {post.frontmatter.title}
                        </h1>

                        <div className="flex items-center gap-6 text-slate-500 dark:text-slate-400 mb-8 border-b border-slate-100 dark:border-slate-700 pb-8">
                            <div className="flex items-center gap-2">
                                <Calendar className="w-4 h-4" />
                                <span>{post.frontmatter.date}</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <User className="w-4 h-4" />
                                <span>{post.frontmatter.author}</span>
                            </div>
                        </div>

                        <div className="prose dark:prose-invert max-w-none text-lg">
                            <MDXRemote source={post.content} components={components} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
