import { Box, Text } from '@chakra-ui/react';
import Image from 'next/image';
import { useState } from 'react';
import AppButton from '../../components/AppButton';
import andriodLogo from '../../public/homePage/CTA/andriod-logo.svg';
import AppleLogo from '../../public/homePage/CTA/AppleLogo';
import mobile from '../../public/homePage/CTA/mockup-min.png';
import footerImgMobile from '../../public/homePage/CTA/footerImgMobile.png';
import Wrapper from '../../components/Wrapper';

const CAT = () => {
  const [isHovered, setIsHover] = useState(false);
  return (
    <Box pt={{ base: 20, md: 28 }} mt={{ base: 4, md: 35 }} bg="brand.lemon">
      <Wrapper>
        <Box width={{ base: 'full', md: '55vw' }} margin="0 auto">
          <Box mb={9} textAlign="center">
            <Text
              fontWeight="600"
              fontSize={{ base: '26px', md: '36px' }}
              letterSpacing="-2%"
              lineHeight="44px"
              mb={{ base: 6, md: 12 }}
            >
              Get the Luxim App
            </Text>
            <Text fontWeight="400" fontSize={{ base: '16px', md: '18px' }} lineHeight="28px">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
              minim.
            </Text>
          </Box>
          <Box display={{ base: 'block', md: 'flex' }} gap={4} justifyContent="center">
            <AppButton
              width="full"
              display="flex"
              gap={4}
              bg="transparent"
              border="1px solid"
              _hover={{ color: 'brand.lemon', bg: 'black' }}
              onMouseEnter={() => setIsHover(true)}
              onMouseLeave={() => setIsHover(false)}
              mb={{ base: 3, md: 0 }}
            >
              <AppleLogo color={isHovered ? '#F6F8D3' : '#1C1D1F'} />
              <Text>Get on iPhone</Text>
            </AppButton>
            <AppButton
              width="full"
              display="flex"
              gap={4}
              bg="transparent"
              border="1px solid"
              _hover={{ color: 'brand.lemon', bg: 'black' }}
            >
              <Image src={andriodLogo} alt="playstore logo icon" />
              <Text>Get on Android</Text>
            </AppButton>
          </Box>
        </Box>
        <Box display={{ base: 'none', md: 'flex' }} justifyContent="center">
          <Image src={mobile} alt="mobile mockup call to action section image" />
        </Box>
        <Box display={{ base: 'flex', md: 'none' }} mt={10} justifyContent="center">
          <Image src={footerImgMobile} alt="mobile mockup call to action section image" />
        </Box>
      </Wrapper>
    </Box>
  );
};

export default CAT;
