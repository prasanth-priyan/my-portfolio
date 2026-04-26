'use client';

import './globals.css';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <head>
                <meta charSet="utf-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name="description" content="Product Manager Portfolio" />
                <title>PM Portfolio</title>
            </head>
            <body className="bg-white text-black font-body">
                <Navigation />
                <main>{children}</main>
                <Footer />
            </body>
        </html>
    );
}
