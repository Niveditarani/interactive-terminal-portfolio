export default function Head() {
    return (
      <>
        <title>Nivedita Rani — Software Engineer | Interactive Terminal Portfolio</title>
        <meta
          name="description"
          content="Hi! I'm Nivedita Rani, a Copenhagen(Denmark) based Software Engineer designing and building fast, accessible interfaces with React, Next.js, and TypeScript. Explore projects, skills, and contact info."
        />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="me" href="https://github.com/Niveditarani" />
        <link rel="me" href="https://www.linkedin.com/in/nivedita-rani/" />
        <script
          type="application/ld+json"
          // JSON-LD Person schema for better SEO
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Person',
              name: 'Nivedita Rani',
              jobTitle: 'Software Engineer',
              url: 'https://niveditarani.dev',
              image: 'https://www.niveditarani.dev/og-preview.jpg',
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
                'JavaScript',
                'Tailwind CSS',
                'Docker',
                'Kubernetes',
              ],
              description:
                "Hi! I'm Nivedita Rani, who enjoy crafting delightful UI, pragmatic APIs, and production-ready systems.",
              address: {
                '@type': 'PostalAddress',
                addressLocality: 'Denmark',
                addressCountry: 'DK',
              },
            }),
          }}
        />
      </>
    );
  }