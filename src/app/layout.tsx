// src/app/layout.tsx
import './globals.css';
import Footer from './Footer';
import type { ReactNode } from 'react';

export const metadata = {
  title: "Nivedita Rani",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-black font-mono text-green-400 h-full m-0 overflow-hidden">
        <div className="grid grid-rows-[auto_1fr_auto] h-full">
          {/* Header */}
          <header className="bg-black z-50">
            <div className="px-6 pt-4">
              <span className="block text-2xl font-extrabold text-green-400 leading-tight">
                Nivedita Rani
              </span>
              <span className="block text-md text-blue-400 mb-4">
                Software Engineer
              </span>
            </div>
            <div className="h-px w-full bg-green-400" />
          </header>

          {/* Main content */}
          <main className="px-2 h-full flex flex-col">
            {children}
          </main>

          {/* Footer */}
          <div>
            <div className="h-px w-full bg-green-400" />
            <Footer />
          </div>
        </div>
      </body>
    </html>
  );
}
