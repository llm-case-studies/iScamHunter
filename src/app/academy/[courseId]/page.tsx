import { notFound } from 'next/navigation';
import { CourseViewer } from '@/components/academy/CourseViewer';
import coursesData from '@/data/courses.json';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

interface PageProps {
    params: {
        courseId: string;
    };
}

export default function CoursePage({ params }: PageProps) {
    const course = coursesData.courses.find((c) => c.id === params.courseId);

    if (!course) {
        notFound();
    }

    return (
        <div className="min-h-screen bg-slate-50 dark:bg-black pt-24 pb-20">
            <div className="max-w-4xl mx-auto px-6 mb-8">
                <Link
                    href="/academy"
                    className="inline-flex items-center text-slate-500 hover:text-slate-800 dark:hover:text-white transition-colors mb-4"
                >
                    <ArrowLeft className="w-4 h-4 mr-2" />
                    Back to Academy
                </Link>
            </div>
            <CourseViewer course={course} />
        </div>
    );
}

export function generateStaticParams() {
    return coursesData.courses.map((course) => ({
        courseId: course.id,
    }));
}
