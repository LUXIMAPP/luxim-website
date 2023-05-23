import { Box, Input, Text } from '@chakra-ui/react';
import Image from 'next/image';
import heroImg from '../../public/homePage/hero/hero.png';
import SectionTitle from '../../components/SectionTitle';
import AppButton from '../../components/AppButton';

const Hero = () => (
  <Box display="flex" alignItems="center" mt={16} mb={12}>
    <Box width="50%">
      <Box width="70%" textAlign="start">
        <SectionTitle text="Welcome to" mb={8} />
        <Text fontSize="36px" fontWeight="700" lineHeight="48px" mb={6}>
          Virtual marketplace of pre-owned traditional fashion wears — no
          startup costs
        </Text>
        <Text fontWeight="500" color="brand.grey" lineHeight="28px" mb={16}>
          Giving buyers the chance to find high-quality pre-owned clothes while
          providing sellers with a platform to reach a broad audience of
          customers
        </Text>
        <Box display="flex" gap={4}>
          <Input
            placeholder="Enter your email"
            fontSize="sm"
            style={{ padding: '0.5rem', height: '3rem' }}
          />
          <AppButton
            theme="brand.primary1"
            title="Join Waitlist"
            color="white"
            border="1px solid transparent"
            _hover={{ bg: 'transparent', color: 'brand.primary1', border: '1px solid #102816' }}
          />
        </Box>
      </Box>
    </Box>
    <Box width="50%" zIndex={1}>
      <Image src={heroImg} alt="hero section image" />
    </Box>
  </Box>
);

export default Hero;
