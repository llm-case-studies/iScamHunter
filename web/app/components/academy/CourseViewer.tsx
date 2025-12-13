'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ChevronDown, ChevronRight, PlayCircle, CheckCircle, Lock } from 'lucide-react';

interface Lesson {
    id: string;
    title: string;
    duration: string;
    description?: string;
    isCompleted?: boolean;
    isLocked?: boolean;
}

interface Module {
    id: string;
    title: string;
    lessons: Lesson[];
    isLocked?: boolean;
}

interface Course {
    id: string;
    title: string;
    modules: Module[];
}

interface CourseViewerProps {
    course: Course;
}

export function CourseViewer({ course }: CourseViewerProps) {
    const [expandedModules, setExpandedModules] = useState<string[]>(
        course.modules.map((m) => m.id) // Default all open for now
    );

    const toggleModule = (moduleId: string) => {
        setExpandedModules((prev) =>
            prev.includes(moduleId)
                ? prev.filter((id) => id !== moduleId)
                : [...prev, moduleId]
        );
    };

    return (
        <div className="max-w-4xl mx-auto p-6">
            <div className="mb-8">
                <h1 className="text-3xl font-bold mb-2 text-slate-900 dark:text-white">
                    {course.title}
                </h1>
                <div className="h-2 w-full bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
                    <div
                        className="h-full bg-scam-red transition-all duration-500"
                        style={{ width: '0%' }}
                    />
                </div>
                <p className="text-sm text-slate-500 mt-2">0% Complete</p>
            </div>

            <div className="space-y-6">
                {course.modules.map((module, moduleIndex) => {
                    const isExpanded = expandedModules.includes(module.id);
                    return (
                        <div
                            key={module.id}
                            className="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 overflow-hidden shadow-sm"
                        >
                            <button
                                onClick={() => toggleModule(module.id)}
                                className="w-full flex items-center justify-between p-4 bg-slate-50 dark:bg-slate-800/50 hover:bg-slate-100 dark:hover:bg-slate-700/50 transition-colors"
                            >
                                <div className="flex items-center gap-3">
                                    <div className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 font-bold text-sm">
                                        {moduleIndex + 1}
                                    </div>
                                    <h2 className="text-lg font-semibold text-slate-800 dark:text-white">
                                        {module.title}
                                    </h2>
                                </div>
                                {isExpanded ? (
                                    <ChevronDown className="w-5 h-5 text-slate-400" />
                                ) : (
                                    <ChevronRight className="w-5 h-5 text-slate-400" />
                                )}
                            </button>

                            <div
                                className={`grid transition-all duration-300 ease-in-out ${isExpanded ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                                    }`}
                            >
                                <div className="overflow-hidden">
                                    <div className="p-4 space-y-3">
                                        {module.lessons.map((lesson) => (
                                            <Link
                                                key={lesson.id}
                                                href={`/academy/${course.id}/lesson/${lesson.id}`}
                                                className={`group flex items-center p-3 rounded-lg border border-slate-100 dark:border-slate-700/50 hover:border-blue-200 dark:hover:border-blue-800 hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-all ${lesson.isLocked ? 'opacity-60 pointer-events-none' : ''
                                                    }`}
                                            >
                                                <div className="mr-4">
                                                    {lesson.isCompleted ? (
                                                        <CheckCircle className="w-6 h-6 text-green-500" />
                                                    ) : lesson.isLocked ? (
                                                        <Lock className="w-6 h-6 text-slate-400" />
                                                    ) : (
                                                        <PlayCircle className="w-6 h-6 text-blue-500 group-hover:scale-110 transition-transform" />
                                                    )}
                                                </div>
                                                <div className="flex-1">
                                                    <h3 className="font-medium text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                                                        {lesson.title}
                                                    </h3>
                                                    {lesson.description && (
                                                        <p className="text-sm text-slate-500 dark:text-slate-400 line-clamp-1">
                                                            {lesson.description}
                                                        </p>
                                                    )}
                                                </div>
                                                <div className="text-xs font-mono text-slate-400 group-hover:text-slate-600 dark:group-hover:text-slate-300">
                                                    {lesson.duration}
                                                </div>
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
