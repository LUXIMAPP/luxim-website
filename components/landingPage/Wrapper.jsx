import { Box } from '@chakra-ui/react';
import Navbar from './Navbar';
import Footer from '../Footer';

const Wrapper = ({ children }) => (
  <Box maxW="1440px" mx="auto">
    <Navbar />
    {children}
    <Footer />
  </Box>
);

export default Wrapper;
