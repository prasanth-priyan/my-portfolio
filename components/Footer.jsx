'use client';

import Link from 'next/link';

export default function Footer() {
    return (
        <footer className="bg-black text-white mt-20 border-t-4 border-accent">
            <div className="px-8 md:px-16 lg:px-24 py-12 max-w-5xl mx-auto">
                <div className="grid md:grid-cols-3 gap-12 mb-12">
                    {/* Brand */}
                    <div>
                        <h3 className="font-heading text-xl font-bold mb-4">PM</h3>
                        <p className="text-gray-400 text-sm">Product Manager. Strategy. Design. Data.</p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="font-heading font-bold text-sm uppercase mb-4 tracking-wider">Links</h4>
                        <ul className="space-y-2 text-sm text-gray-400">
                            <li>
                                <Link href="/" className="hover:text-accent transition">
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link href="/projects" className="hover:text-accent transition">
                                    Projects
                                </Link>
                            </li>
                            <li>
                                <Link href="/analyses" className="hover:text-accent transition">
                                    Analyses
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="font-heading font-bold text-sm uppercase mb-4 tracking-wider">Contact</h4>
                        <ul className="space-y-3 text-sm text-gray-400">
                            <li>
                                <a href="mailto:contact@example.com" className="hover:text-accent transition">
                                    Email
                                </a>
                            </li>
                            <li>
                                <a href="https://linkedin.com" className="hover:text-accent transition" target="_blank" rel="noopener noreferrer">
                                    LinkedIn
                                </a>
                            </li>
                            <li>
                                <a href="https://twitter.com" className="hover:text-accent transition" target="_blank" rel="noopener noreferrer">
                                    Twitter
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500">
                    <p>&copy; 2025. All rights reserved.</p>
                    <p>Deployed on Vercel. Built with Next.js.</p>
                </div>
            </div>
        </footer>
    );
}
