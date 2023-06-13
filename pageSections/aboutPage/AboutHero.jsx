import { Box, Text } from '@chakra-ui/react';

const AboutHero = () => (
  <Box bg="brand.primary1" color="white" textAlign="center" py={24} px={{ base: 4, md: 36, lg: 0 }}>
    <Text fontWeight="600" mb={3}>About us</Text>
    <Text fontSize={{ base: '36px', lg: '48px' }} lineHeight="60px" mb={6}>What you need to know about Luxim</Text>
  </Box>
);

export default AboutHero;
