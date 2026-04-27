'use client';

import Link from 'next/link';
// Hook from Next.js that gives us the current page URL
import { usePathname } from 'next/navigation';

/**
 * Navigation Component - Sticky header with links to all pages
 * 
 * Key Features:
 * - Sticky positioning (stays at top when scrolling)
 * - Active link highlighting (current page link turns cyan/accent color)
 * - Responsive design (works on mobile, tablet, desktop)
 * - Uses Next.js Link for client-side navigation (no page reload)
 */
export default function Navigation() {
    // Get the current page path (e.g., "/", "/projects", "/analyses")
    const pathname = usePathname();

    // Helper function to check if a link is the current page
    // Returns true if the path matches, used for styling the active link
    const isActive = (path) => pathname === path;

    return (
        // sticky: stays at top while scrolling
        // z-50: ensures it's on top of other content
        // border-b: bottom border for visual separation
        <nav className="sticky top-0 z-50 bg-white border-b border-gray-300">
            {/* Container with max-width and padding - centers content */}
            <div className="px-8 md:px-16 lg:px-24 py-6 max-w-5xl mx-auto flex justify-between items-center">

                {/* Logo / Home Link */}
                {/* text-2xl: large text, hover:text-accent: turns cyan on hover */}
                <Link href="/" className="font-heading text-2xl font-bold hover:text-accent transition">
                    PM
                </Link>

                {/* Navigation Links Container */}
                {/* flex gap-8: horizontal layout with spacing between items */}
                <div className="flex gap-8 items-center">

                    {/* Home Link */}
                    {/* Conditional styling: if on home page, show cyan (text-accent), else show black */}
                    <Link
                        href="/"
                        className={`font-heading uppercase text-sm tracking-wider font-bold transition ${isActive('/') ? 'text-accent' : 'text-black hover:text-accent'
                            }`}
                    >
                        Home
                    </Link>

                    {/* Projects Link - same logic as Home */}
                    <Link
                        href="/projects"
                        className={`font-heading uppercase text-sm tracking-wider font-bold transition ${isActive('/projects') ? 'text-accent' : 'text-black hover:text-accent'
                            }`}
                    >
                        Projects
                    </Link>

                    {/* Analyses Link - same logic as Home */}
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
