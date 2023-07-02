/* eslint-disable react-hooks/exhaustive-deps */
import { Box } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import Head from 'next/head';
import CountDown from '../sections/homePage/CountDown';
import About from '../sections/homePage/About';
import CTADescription from '../sections/homePage/CTADescription';
import AppShell from '../components/AppShell';
import Hero from '../sections/homePage/Hero';
import NavigationGuide from '../sections/homePage/NavigationGuide';
import CTA from '../sections/homePage/CTA';
import ScanCode from '../sections/homePage/ScanCode';

const Home = () => {
  const router = useRouter();
  useEffect(() => {
    router.prefetch('/about');
    router.prefetch('/faqs');
  }, []);

  return (
    <>
      <Head>
        <meta name="description" content="Sell designer, vintage, preloved, latest trends, event attire and more" />
        <meta name="title" property="og:title" content="Luxim | Buy . Sell . Discover Your Style." />
        <meta name="type" property="og:type" content="website" />
        <meta
          name="image"
          property="og:image"
          content="https://luxim-images.s3.us-east-2.amazonaws.com/mainLoginImg.webp"
        />
        <meta property="og:description" content="Sell designer, vintage, preloved, latest trends, event attire and more" />
        <meta name="author" content="Luxim" />
        <meta property="og:site_name" content="Luxim" />

        {/* Twitter tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Luxim | Buy . Sell . Discover Your Style." />
        <meta name="twitter:description" content="Sell designer, vintage, preloved, latest trends, event attire and more" />
        <meta name="twitter:site" content="@Luxim" />
        <meta name="twitter:creator" content="@Luxim" />
        <meta name="twitter:image:alt" content="Luxim" />
        <meta
          name="twitter:image:src"
          content="https://luxim-images.s3.us-east-2.amazonaws.com/mainLoginImg.webp"
        />
      </Head>
      <AppShell>
        <Box minHeight="100%">
          <Hero />
          <CountDown />
          <Box display={{ base: 'flex', md: 'block' }} flexDirection="column">
            <NavigationGuide />
            <CTADescription />
            <CTA />
            <About />
          </Box>
        </Box>
        <ScanCode />
      </AppShell>
    </>
  );
};

export default Home;
