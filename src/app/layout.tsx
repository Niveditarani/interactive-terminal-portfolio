// src/app/layout.tsx
import './globals.css';
import Footer from './Footer';
import type { ReactNode } from 'react';

export const metadata = {
  title: "Nivedita Rani",
  description:
    "Hi! I'm Nivedita Rani, a Software Engineer crafting interactive experiences with React, Next.js, and TypeScript. Welcome to my terminal-style portfolio.",
  keywords: [
    "Nivedita Rani",
    "Software Engineer",
    "Full Stack Developer",
    "Next.js",
    "React",
    "Portfolio",
    "Interactive Terminal",
  ],
  icons: {
    icon: "/favicon-32x32.png",        // default icon for most browsers
    shortcut: "/favicon.ico",          // fallback for legacy support
    apple: "/apple-touch-icon.png",    // for iOS devices
  },
  manifest: '/site.webmanifest',
  openGraph: {
    title: 'Nivedita Rani | Terminal Portfolio',
    description: 'Explore the interactive terminal-style portfolio of Nivedita Rani, Software Engineer.',
    url: 'https://niveditarani.dev',
    siteName: 'Nivedita Rani Portfolio',
    images: [
      {
        url: 'https://niveditarani.dev/preview.png',
        width: 1200,
        height: 630,
        alt: 'Nivedita Rani Terminal Portfolio Screenshot',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Nivedita Rani | Terminal Portfolio',
    description: 'Interactive terminal-style portfolio of Nivedita Rani, Software Engineer.',
    creator: '@memoizedMom',
    images: ['https://niveditarani.dev/preview.png'],
  },
  metadataBase: new URL('https://niveditarani.dev'),
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-black font-mono text-green-400 h-screen m-0 flex flex-col">
        {/* <div className="grid grid-rows-[auto_1fr_auto] h-full"> */}
          {/* Header */}
          <header className="bg-black z-50 shrink-0 text-center lg:text-left">
            <div className="px-6 pt-4">
              <h1 className=" text-2xl font-extrabold text-green-400 leading-tight">
                Nivedita Rani
              </h1>
              <p className="text-md text-blue-400 mb-4">
                Software Engineer
              </p>
            </div>
            <div className="h-px w-full bg-green-400" />
          </header>

          {/* Main content */}
          <main className="px-1 lg:px-2 flex-1 overflow-y-auto">
            {children}
          </main>

          {/* Footer */}
          <footer className="shrink-0">
            <div className="h-px w-full bg-green-400" />
            <Footer />
          </footer>
        {/* </div> */}
      </body>
    </html>
  );
}
