import { Box, Text } from '@chakra-ui/react';

const FaqHero = () => (
  <Box bg="brand.primary1" color="white" textAlign="center" py={24} px={{ base: 4, md: 0 }}>
    <Text fontWeight="600" mb={3}>Support</Text>
    <Text fontSize={{ base: '36px', md: '48px' }} lineHeight="60px" mb={6}>Everything you need to know</Text>
    <Text fontSize={{ base: '18px', md: '20px' }} fontWeight="400" lineHeight="30px">Need something cleared up? Here are our most frequently asked questions.</Text>
  </Box>
);

export default FaqHero;
