'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navigation() {
    const pathname = usePathname();

    const isActive = (path) => pathname === path;

    return (
        <nav className="sticky top-0 z-50 bg-white border-b border-gray-300">
            <div className="px-8 md:px-16 lg:px-24 py-6 max-w-5xl mx-auto flex justify-between items-center">
                {/* Logo / Home */}
                <Link href="/" className="font-heading text-2xl font-bold hover:text-accent transition">
                    PM
                </Link>

                {/* Navigation Links */}
                <div className="flex gap-8 items-center">
                    <Link
                        href="/"
                        className={`font-heading uppercase text-sm tracking-wider font-bold transition ${isActive('/') ? 'text-accent' : 'text-black hover:text-accent'
                            }`}
                    >
                        Home
                    </Link>
                    <Link
                        href="/projects"
                        className={`font-heading uppercase text-sm tracking-wider font-bold transition ${isActive('/projects') ? 'text-accent' : 'text-black hover:text-accent'
                            }`}
                    >
                        Projects
                    </Link>
                    <Link
                        href="/analyses"
                        className={`font-heading uppercase text-sm tracking-wider font-bold transition ${isActive('/analyses') ? 'text-accent' : 'text-black hover:text-accent'
                            }`}
                    >
                        Analyses
                    </Link>
                </div>
            </div>
        </nav>
    );
}
