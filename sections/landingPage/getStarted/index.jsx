import { Box, Text, Image } from '@chakra-ui/react';
import AppButton from '../../../components/AppButton';

const GetStarted = () => (
  <Box display="flex" flexDirection={{ base: 'column', lg: 'row' }}>
    <Box py={{ base: 20, lg: 36 }} bgColor="brand.primary1" w={{ base: '100%', lg: '50%' }} color="white" pr={{ base: 4, md: 32, lg: 0 }} pl={{ base: 4, md: 32, lg: 32 }}>
      <Text fontSize="14px" fontWeight="500" color="brand.lemon" mb={2}>
        GET STARTED WITH LUXIM - IT’S FREE!
      </Text>
      <Text as="h3" fontWeight="800" fontSize={{ base: '32px', lg: '48px' }} lineHeight={{ base: '38.4px', lg: '57.6px' }}>
        Are you ready to join the fashion revolution?
      </Text>
      <Text my={6}>
        Explore, buy, and sell extraordinary fashion pieces on Luxim at
        unbeatable prices
      </Text>
      <AppButton
        title="Get the  Luxim App"
        color="black"
        theme="brand.lemon"
        fontSize="14px"
        padding="8px 16px"
        onClick={() => window.open('https://download.luximapp.com/thank-you/', '_blank')}
        isHover
      />
    </Box>
    <Box w={{ base: '100%', lg: '50%' }} bgColor="brand.lemon">
      <Image src="/landingPage/images/hand-on-phone.png" className="soft-bounce" />
    </Box>
  </Box>
);

export default GetStarted;
