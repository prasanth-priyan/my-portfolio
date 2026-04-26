'use client';

import Link from 'next/link';

export default function Projects() {
    const allProjects = [
        {
            id: 1,
            title: 'Mobile Checkout Redesign',
            description: 'Reduced friction in mobile checkout flow, increasing conversion rate by 18% through user research and iterative testing.',
            tags: ['UX Research', 'E-commerce', 'Mobile'],
        },
        {
            id: 2,
            title: 'Recommendation Engine Launch',
            description: 'Led cross-functional team to launch personalization engine. Achieved 12% increase in user engagement and 23% improvement in session duration.',
            tags: ['Data-Driven', 'Personalization', 'Analytics'],
        },
        {
            id: 3,
            title: 'Customer Onboarding Program',
            description: 'Designed and executed comprehensive onboarding strategy, reducing time-to-value by 40% and improving retention by 25%.',
            tags: ['User Onboarding', 'Retention', 'Strategy'],
        },
        {
            id: 4,
            title: 'API Documentation Portal',
            description: 'Built self-service developer documentation platform, reducing support tickets by 35% and enabling faster partner integrations.',
            tags: ['Developer Tools', 'Documentation', 'Self-Service'],
        },
        {
            id: 5,
            title: 'Enterprise Pricing Model',
            description: 'Restructured pricing strategy for enterprise segment, expanding addressable market and increasing average contract value by 40%.',
            tags: ['Pricing Strategy', 'Enterprise', 'Go-to-Market'],
        },
        {
            id: 6,
            title: 'Real-time Collaboration Feature',
            description: 'Led product discovery and launch of real-time editing. Drove 3x increase in team adoption and 15% increase in daily active users.',
            tags: ['Collaboration', 'Product Launch', 'Features'],
        },
    ];

    return (
        <div className="px-8 md:px-16 lg:px-24 py-16 max-w-5xl mx-auto">
            {/* Header */}
            <div className="mb-16">
                <Link href="/" className="text-accent font-heading uppercase text-xs font-bold mb-6 inline-block hover:underline">
                    ← Back
                </Link>
                <p className="text-accent uppercase tracking-[0.35em] text-xs font-bold mb-4">Product Initiatives</p>
                <h1 className="text-5xl md:text-6xl font-heading font-bold mb-4">All Projects</h1>
                <p className="text-lg text-gray-700 max-w-2xl leading-relaxed">
                    A selection of product initiatives, from discovery through launch and optimization.
                </p>
            </div>

            {/* Projects Grid */}
            <div className="grid md:grid-cols-2 gap-8">
                {allProjects.map((project) => (
                    <div
                        key={project.id}
                        className="rounded-3xl border border-slate-200 bg-slate-50 p-8 shadow-sm hover:shadow-xl transition flex flex-col"
                    >
                        <h3 className="text-2xl font-heading font-bold mb-3">{project.title}</h3>
                        <p className="text-gray-700 mb-6 leading-relaxed flex-grow">{project.description}</p>
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
                        <Link
                            href="#"
                            className="mt-auto inline-flex items-center justify-center rounded-full bg-black px-6 py-3 text-sm font-heading uppercase tracking-wider text-white hover:bg-gray-900 transition"
                        >
                            View project
                        </Link>
                    </div>
                ))}
            </div>

            {/* CTA */}
            <div className="mt-20 rounded-3xl border border-slate-200 bg-white p-10 shadow-sm">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
                    <div>
                        <h2 className="text-2xl font-heading font-bold mb-3">Interested in working together?</h2>
                        <p className="text-gray-700 max-w-2xl">
                            Let’s talk about how I can help shape your next product direction with clarity and impact.
                        </p>
                    </div>
                    <a
                        href="mailto:contact@example.com"
                        className="inline-flex items-center justify-center rounded-full bg-accent px-8 py-3 text-black font-heading uppercase text-sm tracking-wider hover:bg-blue-400 transition"
                    >
                        Get in touch
                    </a>
                </div>
            </div>
        </div>
    );
}
