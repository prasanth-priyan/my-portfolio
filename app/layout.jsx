'use client';

// Import global styles - includes Tailwind directives and custom CSS
import './globals.css';
// Import the sticky navigation component that appears on all pages
import Navigation from '@/components/Navigation';
// Import the footer component that appears on all pages
import Footer from '@/components/Footer';

/**
 * RootLayout - The main layout wrapper for the entire application
 * 
 * In Next.js 13+ with the app directory:
 * - This layout wraps every page in the app
 * - The `children` prop receives the page content
 * - Navigation and Footer are included on every page
 * - Metadata (title, description) is set here and applies globally
 * 
 * This is like the "master template" for the whole site.
 */
export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <head>
                {/* Character encoding for proper text rendering */}
                <meta charSet="utf-8" />
                {/* Viewport settings for responsive mobile design */}
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                {/* SEO description shown in search results */}
                <meta name="description" content="Product Manager Portfolio" />
                {/* Browser tab title */}
                <title>PM Portfolio</title>
            </head>
            {/* Body with Tailwind classes: white background, black text, custom font */}
            <body className="bg-white text-black font-body">
                {/* Navigation bar - sticky, visible on all pages */}
                <Navigation />
                {/* Main content area - page content goes here */}
                <main>{children}</main>
                {/* Footer - visible on all pages */}
                <Footer />
            </body>
        </html>
    );
}
