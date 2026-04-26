'use client';

import Link from 'next/link';

export default function Analyses() {
    const analyses = [
        {
            id: 1,
            title: 'Platform Consolidation Analysis',
            date: 'March 2025',
            category: 'Market Analysis',
            summary: 'Deep dive into market trends and competitive landscape driving the shift toward single-platform solutions in SaaS.',
            excerpt: 'The SaaS landscape is consolidating. Companies are increasingly moving away from point solutions toward integrated platforms. This analysis examines the drivers, winners, and implications for product strategy.',
        },
        {
            id: 2,
            title: 'AI Integration in Enterprise Software',
            date: 'February 2025',
            category: 'Technology Trends',
            summary: 'Examination of how enterprises are evaluating and adopting AI tools, and implications for product roadmaps.',
            excerpt: 'Enterprise buyers are cautious but pragmatic about AI. Rather than chasing hype, product leaders should focus on solving specific workflows. This analysis breaks down adoption patterns across industries.',
        },
        {
            id: 3,
            title: 'Customer Lifetime Value Metrics',
            date: 'January 2025',
            category: 'Metrics & Analytics',
            summary: 'Framework for measuring and optimizing CLV in subscription businesses—beyond surface-level revenue metrics.',
            excerpt: 'CLV is more nuanced than gross revenue. This case study explores cohort analysis, expansion revenue, and churn patterns to build a comprehensive CLV model.',
        },
        {
            id: 4,
            title: 'Competitive Moats in Developer Tools',
            date: 'December 2024',
            category: 'Competitive Analysis',
            summary: 'What makes developer tools sticky? Analysis of lock-in mechanisms, network effects, and switching costs.',
            excerpt: 'Developer tool adoption is sticky for predictable reasons: integration depth, ecosystem, and community. Understanding these moats is critical for go-to-market strategy.',
        },
        {
            id: 5,
            title: 'Pricing Elasticity in B2B SaaS',
            date: 'November 2024',
            category: 'Pricing Strategy',
            summary: 'Data-driven framework for understanding price sensitivity across customer segments and use cases.',
            excerpt: 'Price sensitivity varies dramatically by segment, use case, and budget availability. This analysis provides a framework for running experiments and setting optimal pricing.',
        },
        {
            id: 6,
            title: 'Building Product Sense at Scale',
            date: 'October 2024',
            category: 'Leadership & Org',
            summary: 'How do you maintain strong product decision-making in a growing organization? Principles for scaling product instinct.',
            excerpt: 'As organizations scale, decision-making can become slow and political. This piece outlines principles for maintaining product rigor and good instinct across teams.',
        },
    ];

    return (
        <div className="px-8 md:px-16 lg:px-24 py-16 max-w-4xl mx-auto">
            {/* Header */}
            <div className="mb-16">
                <Link href="/" className="text-accent font-heading uppercase text-xs font-bold mb-6 inline-block hover:underline">
                    ← Back
                </Link>
                <p className="text-accent uppercase tracking-[0.35em] text-xs font-bold mb-4">Product Insight</p>
                <h1 className="text-5xl md:text-6xl font-heading font-bold mb-4">Analyses & Case Studies</h1>
                <p className="text-lg text-gray-700 max-w-2xl leading-relaxed">
                    Thoughtful analysis of market direction, product strategy, and decision-making frameworks.
                </p>
            </div>

            {/* Analyses List */}
            <div className="space-y-8">
                {analyses.map((analysis) => (
                    <article
                        key={analysis.id}
                        className="rounded-3xl border border-slate-200 bg-slate-50 p-8 shadow-sm hover:shadow-lg transition"
                    >
                        <div className="mb-4 flex flex-wrap items-center gap-3">
                            <span className="text-xs font-heading uppercase px-3 py-1 bg-white text-gray-900 tracking-wider shadow-sm">
                                {analysis.category}
                            </span>
                            <span className="text-xs text-gray-500">{analysis.date}</span>
                        </div>
                        <h2 className="text-2xl font-heading font-bold mb-3 hover:text-accent transition cursor-pointer">
                            {analysis.title}
                        </h2>
                        <p className="text-gray-700 mb-4 leading-relaxed">{analysis.summary}</p>
                        <p className="text-gray-600 mb-6 text-sm leading-relaxed">{analysis.excerpt}</p>
                        <a href="#" className="inline-flex items-center justify-center rounded-full bg-accent px-5 py-3 text-sm font-heading uppercase tracking-wider text-black hover:bg-blue-400 transition">
                            Read full analysis
                        </a>
                    </article>
                ))}
            </div>

            {/* CTA */}
            <div className="mt-20 rounded-3xl border border-slate-200 bg-white p-10 shadow-sm">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
                    <div>
                        <h2 className="text-2xl font-heading font-bold mb-3">Stay Updated</h2>
                        <p className="text-gray-700 max-w-2xl">
                            Subscribe for new product insights and case studies as they are published.
                        </p>
                    </div>
                    <form className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
                        <input
                            type="email"
                            placeholder="you@example.com"
                            className="flex-1 min-w-0 rounded-full border border-gray-300 px-4 py-3 focus:outline-none focus:border-accent"
                            disabled
                        />
                        <button
                            type="submit"
                            disabled
                            className="rounded-full bg-gray-400 px-6 py-3 text-white font-heading uppercase text-sm tracking-wider cursor-not-allowed"
                        >
                            Coming soon
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}
