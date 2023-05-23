import { Box } from '@chakra-ui/react';
import Hero from '../pageSections/homePage/Hero';
import CountDown from '../pageSections/homePage/CountDown';
import CTA from '../pageSections/homePage/CTA';
import About from '../pageSections/homePage/About';
import Wrapper from '../components/Wrapper';

const Home = () => (
  <Box className="text-center h-screen">
    <Wrapper showRightPadding={0}>
      <Hero />
    </Wrapper>
    <CountDown />
    <CTA />
    <About />
  </Box>
);

export default Home;
