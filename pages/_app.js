import Head from 'next/head';

function MyApp({ Component, pageProps }) {
    return (
      <>
        <Head>
          <meta name="google-site-verification" content="sg9gp71Bnz41_Y39HD7n2NG6wMelJt715XR2rADs9jY" />
        </Head>
        <Component {...pageProps} />
      </>
    );
  }
  
  export default MyApp;