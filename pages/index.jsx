import { Box } from '@chakra-ui/react';
import CountDown from '../pageSections/homePage/CountDown';
import About from '../pageSections/homePage/About';
import CTADescription from '../pageSections/homePage/CTADescription';
import CAT from '../pageSections/homePage/CAT';
import AppShell from '../components/AppShell';
import Hero from '../pageSections/homePage/Hero';

const Home = () => (
  <AppShell>
    <Box minHeight="100%">
      <Hero />
      <CountDown />
      <CTADescription />
      <About />
      <CAT />
    </Box>
  </AppShell>
);

export default Home;
