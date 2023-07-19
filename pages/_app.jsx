/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable @next/next/no-page-custom-font */
/* eslint-disable camelcase */
import Head from 'next/head';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import '../styles/globals.css';
import '@fontsource/germania-one';
import '@fontsource/plus-jakarta-sans';
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const colors = {
  brand: {
    primary1: '#102816',
    primary2: '#D3DB22',
    secondary: '#E24311',
    grey: '#879099',
    lemon: '#F6F8D3',
    lightLemon: '#FCFCED',
  },
};

const fonts = {
  germania: '\'Germania One\', \'sans-serif\'',
};

export const theme = extendTheme({ colors, fonts });

const MyApp = ({ Component, pageProps }) => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      // once: false,
    });
  }, []);
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <title>
          Luxim | Buy . Sell . Discover Your Style
        </title>
        <link rel="shortcut icon" type="image/jpg" href="/images&svgs/luxim-logo.svg" />
        <link href="https://fonts.googleapis.com/css2?family=Germania+One&family=Plus+Jakarta+Sans:wght@400;500;600;700&display=swap" rel="stylesheet" />
      </Head>
      <ChakraProvider theme={theme}>
        <main className="main-font">
          <Component {...pageProps} />
        </main>
      </ChakraProvider>
    </>
  );
};

export default MyApp;
