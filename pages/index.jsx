/* eslint-disable react-hooks/exhaustive-deps */
import { Box } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import CountDown from '../sections/homePage/CountDown';
import About from '../sections/homePage/About';
import CTADescription from '../sections/homePage/CTADescription';
import AppShell from '../components/AppShell';
import Hero from '../sections/homePage/Hero';
import NavigationGuide from '../sections/homePage/NavigationGuide';
import CTA from '../sections/homePage/CTA';
import ScanCode from '../sections/homePage/ScanCode';
import OgHead from '../components/OgHead';

const Home = () => {
  const router = useRouter();
  useEffect(() => {
    router.prefetch('/about');
    router.prefetch('/faqs');
  }, []);

  return (
    <>
      <OgHead description="Sell designer, vintage, preloved, latest trends, event attire and more." title="Luxim | Buy . Sell . Discover Your Style." />
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
