'use client';

import Link from 'next/link';
import { resumeContext } from '@/data/resume';

export default function Home() {
    const { heroTag, heroTitle, heroAccent, summary, featuredProjects, featuredAnalyses } = resumeContext;

    return (
        <>
            {/* Hero Section */}
            <section className="min-h-screen flex flex-col justify-center items-start px-8 md:px-16 lg:px-24 py-20 max-w-5xl mx-auto">
                <div className="rounded-full bg-accent/10 px-4 py-2 text-accent text-sm uppercase tracking-[0.28em] font-semibold mb-8">
                    {heroTag}
                </div>
                <h1 className="text-5xl md:text-7xl font-heading font-bold mb-6 tracking-tight">
                    {heroTitle}
                    <br />
                    <span className="text-accent">{heroAccent}</span>
                </h1>
                <p className="text-lg md:text-xl text-gray-700 max-w-2xl leading-relaxed mb-12">
                    {summary}
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                    <Link
                        href="/projects"
                        className="inline-flex items-center justify-center rounded-full bg-black px-8 py-3 text-white font-heading uppercase text-sm tracking-wider hover:bg-gray-900 transition"
                    >
                        View Projects
                    </Link>
                    <Link
                        href="/analyses"
                        className="inline-flex items-center justify-center rounded-full border-2 border-black px-8 py-3 text-black font-heading uppercase text-sm tracking-wider hover:bg-black hover:text-white transition"
                    >
                        Read Analyses
                    </Link>
                </div>
            </section>

            {/* Featured Projects */}
            <section className="px-8 md:px-16 lg:px-24 py-20 bg-white max-w-5xl mx-auto w-full">
                <div className="mb-10 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
                    <div>
                        <p className="text-accent uppercase tracking-[0.35em] text-xs font-bold mb-3">Featured Work</p>
                        <h2 className="text-3xl md:text-4xl font-heading font-bold">Projects that demonstrate product direction and execution.</h2>
                    </div>
                    <Link
                        href="/projects"
                        className="inline-flex items-center justify-center rounded-full border-2 border-accent px-7 py-3 text-accent font-heading uppercase text-sm tracking-wider hover:bg-accent hover:text-black transition"
                    >
                        Browse all projects
                    </Link>
                </div>
                <div className="grid md:grid-cols-2 gap-8">
                    {featuredProjects.map((project) => (
                        <div
                            key={project.id}
                            className="rounded-3xl border border-slate-200 bg-slate-50 p-8 shadow-sm hover:shadow-xl transition"
                        >
                            <div className="mb-4 inline-flex items-center rounded-full bg-black text-white px-4 py-1 text-xs font-semibold tracking-[0.2em] uppercase">
                                Project
                            </div>
                            <h3 className="text-2xl font-heading font-bold mb-4">{project.title}</h3>
                            <p className="text-gray-700 mb-6 leading-relaxed">{project.description}</p>
                            <div className="flex flex-wrap gap-2 mb-6">
                                {project.tags.map((tag, idx) => (
                                    <span
                                        key={idx}
                                        className="text-xs font-heading uppercase px-3 py-1 bg-white text-gray-900 tracking-wider shadow-sm"
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>
                            <Link href={project.link} className="inline-flex items-center gap-2 text-black font-heading uppercase text-sm tracking-wider hover:text-accent transition">
                                View details
                                <span className="text-accent">→</span>
                            </Link>
                        </div>
                    ))}
                </div>
            </section>

            {/* Featured Analyses */}
            <section className="px-8 md:px-16 lg:px-24 py-20 bg-slate-50 max-w-5xl mx-auto w-full">
                <div className="mb-10">
                    <p className="text-accent uppercase tracking-[0.35em] text-xs font-bold mb-3">Insights</p>
                    <h2 className="text-3xl md:text-4xl font-heading font-bold">Recent analyses that shape product thinking.</h2>
                </div>
                <div className="grid gap-6 max-w-3xl">
                    {featuredAnalyses.map((analysis) => (
                        <div
                            key={analysis.id}
                            className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-lg transition"
                        >
                            <h3 className="text-xl font-heading font-bold mb-3">{analysis.title}</h3>
                            <p className="text-gray-700 mb-5 leading-relaxed">{analysis.summary}</p>
                            <Link href="/analyses" className="inline-flex items-center gap-2 text-accent font-heading uppercase text-sm tracking-wider hover:underline">
                                Read
                                <span>→</span>
                            </Link>
                        </div>
                    ))}
                </div>
                <div className="mt-12 text-center">
                    <Link
                        href="/analyses"
                        className="inline-block rounded-full px-8 py-3 border-2 border-black font-heading uppercase text-sm tracking-wider hover:bg-black hover:text-white transition"
                    >
                        View All Analyses
                    </Link>
                </div>
            </section>
        </>
    );
}
