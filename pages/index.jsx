import { Box } from '@chakra-ui/react';
import Hero from '../pageSections/homePage/Hero';
import CountDown from '../pageSections/homePage/CountDown';

const Home = () => (
  <Box className="text-center h-screen">
    <Hero />
    <CountDown />
  </Box>
);

export default Home;
