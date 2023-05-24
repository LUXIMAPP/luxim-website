import { Box, Text } from '@chakra-ui/react';

const FaqHero = () => (
  <Box bg="brand.primary1" color="white" textAlign="center" py={24}>
    <Text fontWeight="600" mb={3}>Support</Text>
    <Text fontSize="48px" lineHeight="60px" mb={6}>Everything you need to know</Text>
    <Text fontSize="20px" fontWeight="400" lineHeight="30px">Need something cleared up? Here are our most frequently asked questions.</Text>
  </Box>
);

export default FaqHero;
