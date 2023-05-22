/* eslint-disable @next/next/no-page-custom-font */
/* eslint-disable camelcase */
import Head from 'next/head';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import '../styles/globals.css';
import '@fontsource/germania-one';
import '@fontsource/plus-jakarta-sans';

const colors = {
  brand: {
    900: '#1a365d',
    800: '#153e75',
    700: '#2a69ac',
  },
};

const fonts = {
  germania: '\'Germania One\', \'sans-serif\'',
};

export const theme = extendTheme({ colors, fonts });

const MyApp = ({ Component, pageProps }) => (
  <>
    <Head>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
      <link href="https://fonts.googleapis.com/css2?family=Germania+One&family=Plus+Jakarta+Sans:wght@400;500;600;700&display=swap" rel="stylesheet" />
    </Head>
    <ChakraProvider theme={theme}>
      <main className="main-font">
        <Component {...pageProps} />
      </main>
    </ChakraProvider>
  </>
);

export default MyApp;
