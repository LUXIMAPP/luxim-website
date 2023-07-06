import { Box } from '@chakra-ui/react';
import Wrapper from './Wrapper';

const FooterClosure = ({ children, ...rest }) => (
  <Wrapper display={{ base: 'block', lg: 'flex' }} padding={{ base: 3, lg: 6 }} justifyContent="center" mb={{ base: 16, lg: -131 }}>
    <Box
      bg="brand.lightLemon"
      width={{ base: '100%', lg: '70vw' }}
      px={{ base: 6, lg: 24 }}
      py={{ base: 6, lg: 8 }}
      borderRadius="16px"
      boxShadow={{ base: 'none', lg: '0px 20px 24px -4px rgba(16, 24, 40, 0.1), 0px 8px 8px -4px rgba(16, 24, 40, 0.04)' }}
      {...rest}
    >
      {children}
    </Box>
  </Wrapper>
);

export default FooterClosure;
