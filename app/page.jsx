'use client';

import Link from 'next/link';
// Import resume data - this is the "source of truth" for all home page content
import { resumeContext } from '@/data/resume';

/**
 * Home Page Component
 * 
 * This is the main landing page. It displays:
 * 1. Hero section with intro and positioning
 * 2. Featured Projects (3 best projects as preview cards)
 * 3. Featured Analyses (3 key insights/case studies)
 * 
 * Data Flow:
 * resume.js → this component → gets rendered as HTML
 * 
 * When you update resume.js, this page automatically updates.
 */
export default function Home() {
    // Destructure (extract) the data we need from resumeContext
    // This is like saying "get me these specific fields from the data"
    const { heroTag, heroTitle, heroAccent, summary, featuredProjects, featuredAnalyses } = resumeContext;

    return (
        <>
            {/* ============ HERO SECTION ============ */}
            {/* This is the above-the-fold area that visitors see first */}
            <section className="min-h-screen flex flex-col justify-center items-start px-8 md:px-16 lg:px-24 py-20 max-w-5xl mx-auto">
                {/* Tagline pill - appears above the title */}
                {/* bg-accent/10: 10% opacity cyan background */}
                {/* rounded-full: pill shape */}
                <div className="rounded-full bg-accent/10 px-4 py-2 text-accent text-sm uppercase tracking-[0.28em] font-semibold mb-8">
                    {heroTag}
                </div>

                {/* Main headline - your name and title */}
                {/* text-5xl md:text-7xl: responsive sizing (smaller on mobile, larger on desktop) */}
                {/* font-heading: uses Khand font (bold, uppercase-style) */}
                <h1 className="text-5xl md:text-7xl font-heading font-bold mb-6 tracking-tight">
                    {heroTitle}
                    <br />
                    {/* This part appears in cyan/accent color */}
                    <span className="text-accent">{heroAccent}</span>
                </h1>

                {/* Bio/summary paragraph */}
                {/* max-w-2xl: limits width for readability */}
                {/* text-gray-700: slightly dark gray color */}
                <p className="text-lg md:text-xl text-gray-700 max-w-2xl leading-relaxed mb-12">
                    {summary}
                </p>

                {/* Call-to-action buttons */}
                {/* flex flex-col sm:flex-row: stacks on mobile, horizontal on tablet+ */}
                <div className="flex flex-col sm:flex-row gap-4">
                    {/* Button 1: Solid black button */}
                    <Link
                        href="/projects"
                        className="inline-flex items-center justify-center rounded-full bg-black px-8 py-3 text-white font-heading uppercase text-sm tracking-wider hover:bg-gray-900 transition"
                    >
                        View Projects
                    </Link>
                    {/* Button 2: Outlined button with black border */}
                    <Link
                        href="/analyses"
                        className="inline-flex items-center justify-center rounded-full border-2 border-black px-8 py-3 text-black font-heading uppercase text-sm tracking-wider hover:bg-black hover:text-white transition"
                    >
                        Read Analyses
                    </Link>
                </div>
            </section>

            {/* ============ FEATURED PROJECTS SECTION ============ */}
            <section className="px-8 md:px-16 lg:px-24 py-20 bg-white max-w-5xl mx-auto w-full">
                {/* Section header with a "Browse all" link */}
                <div className="mb-10 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
                    <div>
                        {/* Accent label above the section title */}
                        <p className="text-accent uppercase tracking-[0.35em] text-xs font-bold mb-3">Featured Work</p>
                        <h2 className="text-3xl md:text-4xl font-heading font-bold">Projects that demonstrate product direction and execution.</h2>
                    </div>
                    {/* Link to view all projects */}
                    <Link
                        href="/projects"
                        className="inline-flex items-center justify-center rounded-full border-2 border-accent px-7 py-3 text-accent font-heading uppercase text-sm tracking-wider hover:bg-accent hover:text-black transition"
                    >
                        Browse all projects
                    </Link>
                </div>

                {/* Grid of project cards */}
                {/* md:grid-cols-2: 2 columns on desktop, 1 on mobile */}
                <div className="grid md:grid-cols-2 gap-8">
                    {/* Loop through each project and render a card */}
                    {/* .map() is a JavaScript function that creates a new element for each item in an array */}
                    {featuredProjects.map((project) => (
                        <div
                            key={project.id}
                            className="rounded-3xl border border-slate-200 bg-slate-50 p-8 shadow-sm hover:shadow-xl transition"
                        >
                            {/* "Project" badge at top of card */}
                            <div className="mb-4 inline-flex items-center rounded-full bg-black text-white px-4 py-1 text-xs font-semibold tracking-[0.2em] uppercase">
                                Project
                            </div>

                            {/* Project title */}
                            <h3 className="text-2xl font-heading font-bold mb-4">{project.title}</h3>

                            {/* Project description - shows the outcome/impact */}
                            <p className="text-gray-700 mb-6 leading-relaxed">{project.description}</p>

                            {/* Tags - shows relevant skills/domains */}
                            {/* Another .map() to loop through tags for this project */}
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

                            {/* "View details" link */}
                            <Link href={project.link} className="inline-flex items-center gap-2 text-black font-heading uppercase text-sm tracking-wider hover:text-accent transition">
                                View details
                                <span className="text-accent">→</span>
                            </Link>
                        </div>
                    ))}
                </div>
            </section>

            {/* ============ FEATURED ANALYSES SECTION ============ */}
            {/* Similar structure to projects, but with bg-slate-50 for visual distinction */}
            <section className="px-8 md:px-16 lg:px-24 py-20 bg-slate-50 max-w-5xl mx-auto w-full">
                {/* Section header */}
                <div className="mb-10">
                    <p className="text-accent uppercase tracking-[0.35em] text-xs font-bold mb-3">Insights</p>
                    <h2 className="text-3xl md:text-4xl font-heading font-bold">Recent analyses that shape product thinking.</h2>
                </div>

                {/* Grid of analysis cards */}
                <div className="grid gap-6 max-w-3xl">
                    {/* Loop through analyses */}
                    {featuredAnalyses.map((analysis) => (
                        <div
                            key={analysis.id}
                            className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-lg transition"
                        >
                            {/* Analysis title */}
                            <h3 className="text-xl font-heading font-bold mb-3">{analysis.title}</h3>

                            {/* Analysis summary - brief description */}
                            <p className="text-gray-700 mb-5 leading-relaxed">{analysis.summary}</p>

                            {/* "Read" link to go to full analyses page */}
                            <Link href="/analyses" className="inline-flex items-center gap-2 text-accent font-heading uppercase text-sm tracking-wider hover:underline">
                                Read
                                <span>→</span>
                            </Link>
                        </div>
                    ))}
                </div>

                {/* CTA button to view all analyses */}
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
