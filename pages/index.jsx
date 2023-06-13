import { Box } from '@chakra-ui/react';
import CountDown from '../pageSections/homePage/CountDown';
import About from '../pageSections/homePage/About';
import CTADescription from '../pageSections/homePage/CTADescription';
// import CAT from '../pageSections/homePage/CAT';
import AppShell from '../components/AppShell';
import Hero from '../pageSections/homePage/Hero';
import NavigationGuide from '../pageSections/homePage/NavigationGuide';
import CTA from '../pageSections/homePage/CTA';
import ScanCode from '../pageSections/homePage/ScanCode';

const Home = () => (
  <AppShell>
    <Box minHeight="100%">
      <Hero />
      <CountDown />
      <Box display={{ base: 'flex', md: 'block' }} flexDirection="column">
        <Box order={1}>
          <NavigationGuide />
        </Box>
        <Box order={3}>
          <CTADescription />
        </Box>
        <Box order={4}>
          <CTA />
        </Box>
        <Box order={2}>
          <About />
        </Box>
      </Box>
    </Box>
    <ScanCode />
  </AppShell>
);

export default Home;
