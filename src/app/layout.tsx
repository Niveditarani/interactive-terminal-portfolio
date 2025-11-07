// src/app/layout.tsx
import './globals.css';
import Footer from './Footer';
import type { ReactNode } from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Nivedita Rani',
  description:
    "Hi! I'm Nivedita Rani, a Software Engineer crafting interactive experiences with React, Next.js, and TypeScript. Welcome to my terminal-style portfolio.",
  keywords: [
    'Nivedita Rani',
    'Software Engineer',
    'Full Stack Developer',
    'Next.js',
    'React',
    'Portfolio',
    'Interactive Terminal',
  ],
  icons: {
    icon: [
      { url: '/favicon.ico', type: 'image/x-icon' },
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/favicon-32x32.png', type: 'image/png', sizes: '32x32' },
      { url: '/favicon-16x16.png', type: 'image/png', sizes: '16x16' },
      { url: '/favicon-96x96.png', type: 'image/png', sizes: '96x96' },
    ],
    apple: [{ url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' }],
    other: [
      { rel: 'icon', url: '/android-chrome-192x192.png', sizes: '192x192', type: 'image/png' },
      { rel: 'icon', url: '/android-chrome-512x512.png', sizes: '512x512', type: 'image/png' },
    ],
  },
  manifest: '/site.webmanifest',
  openGraph: {
    title: "Nivedita Rani's Portfolio",
    description:
      'Explore the interactive terminal-style portfolio of Nivedita Rani, Software Engineer.',
    url: 'https://niveditarani.dev',
    siteName: 'Nivedita Rani Portfolio',
    images: [
      {
        url: 'https://www.niveditarani.dev/og-preview.jpg',
        width: 1200,
        height: 630,
        alt: 'Nivedita Rani Terminal Portfolio',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Nivedita Rani's Portfolio",
    description: 'Interactive terminal-style portfolio of Nivedita Rani, Software Engineer.',
    creator: '@memoizedMom',
    images: ['https://www.niveditarani.dev/og-preview.jpg'],
  },
  metadataBase: new URL('https://niveditarani.dev'),
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        {/* ✅ JSON-LD Person Schema for SEO & GEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Person',
              name: 'Nivedita Rani',
              jobTitle: 'Software Engineer',
              description:
                'Fullstack developer based in Copenhagen, Denmark. Experienced in React, Next.js, and cloud technologies.',
              url: 'https://niveditarani.dev',
              image: 'https://www.niveditarani.dev/og-preview.jpg',
              address: {
                '@type': 'PostalAddress',
                addressLocality: 'Copenhagen',
                addressCountry: 'DK',
              },
              sameAs: [
                'https://github.com/Niveditarani',
                'https://www.linkedin.com/in/nivedita-rani/',
                'https://x.com/memoizedMom',
              ],
              knowsAbout: [
                'React',
                'Next.js',
                'TypeScript',
                'Frontend Development',
                'Full Stack',
                'SEO',
                'AI Search Optimization',
              ],
            }),
          }}
        />
      </head>

      <body className="bg-black font-mono text-green-400 h-screen m-0 flex flex-col">
        <header className="bg-black z-50 shrink-0 text-center lg:text-left">
          <div className="px-6 pt-4">
            <h1 className="text-2xl font-extrabold text-green-400 leading-tight">
              Nivedita Rani
            </h1>
            <p className="text-md text-blue-400 mb-4">Software Engineer</p>
          </div>
          <div className="h-px w-full bg-green-400" />
        </header>

        <main className="px-1 lg:px-2 flex-1 overflow-y-auto">{children}</main>

        <footer className="shrink-0">
          <div className="h-px w-full bg-green-400" />
          <Footer />
        </footer>
      </body>
    </html>
  );
}
