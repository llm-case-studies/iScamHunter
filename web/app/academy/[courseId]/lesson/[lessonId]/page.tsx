import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft, CheckCircle } from 'lucide-react';
import { LessonPlayer } from '@/app/components/academy/LessonPlayer';
import { Course } from '@/app/components/academy/CourseViewer';
import coursesData from '@/data/courses.json';

interface PageProps {
    params: {
        courseId: string;
        lessonId: string;
    };
}

export default function LessonPage({ params }: PageProps) {
    const courses = (coursesData as unknown as { courses: Course[] }).courses;
    const course = courses.find((c) => c.id === params.courseId);
    const courseModule = course?.modules.find((m) =>
        m.lessons.some((l) => l.id === params.lessonId)
    );
    const lesson = courseModule?.lessons.find((l) => l.id === params.lessonId);

    if (!course || !courseModule || !lesson) {
        notFound();
    }

    return (
        <div className="min-h-screen bg-slate-50 dark:bg-black pt-24 pb-20">
            <div className="max-w-4xl mx-auto px-6">
                <Link
                    href={`/academy/${course.id}`}
                    className="inline-flex items-center text-slate-500 hover:text-slate-800 dark:hover:text-white transition-colors mb-8"
                >
                    <ArrowLeft className="w-4 h-4 mr-2" />
                    Back to Course
                </Link>

                {/* Content Player */}
                <div className="mb-8">
                    <LessonPlayer title={lesson.title} type={lesson.type} />
                </div>

                {/* Lesson Metadata */}
                <div className="bg-white dark:bg-slate-900 rounded-xl p-8 border border-slate-200 dark:border-slate-800">
                    <div className="flex items-start justify-between gap-4">
                        <div>
                            <div className="text-sm font-semibold text-blue-600 dark:text-blue-400 mb-2 uppercase tracking-wider">
                                {courseModule.title}
                            </div>
                            <h1 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">
                                {lesson.title}
                            </h1>
                            <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-lg">
                                {lesson.description || 'No description available for this lesson.'}
                            </p>
                        </div>

                        <button className="flex-shrink-0 flex items-center gap-2 px-4 py-2 bg-slate-100 dark:bg-slate-800 hover:bg-green-100 dark:hover:bg-green-900/30 text-slate-600 dark:text-slate-400 hover:text-green-700 dark:hover:text-green-400 rounded-lg font-medium transition-colors">
                            <CheckCircle className="w-5 h-5" />
                            Mark Complete
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export function generateStaticParams() {
    const params = [];
    for (const course of coursesData.courses) {
        for (const courseModule of course.modules) {
            for (const lesson of courseModule.lessons) {
                params.push({
                    courseId: course.id,
                    lessonId: lesson.id,
                });
            }
        }
    }
    return params;
}
