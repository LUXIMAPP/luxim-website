import { Box, Text } from '@chakra-ui/react';
import Image from 'next/image';
import { useState } from 'react';
import AppButton from '../../components/AppButton';
import andriodLogo from '../../public/homePage/CTA/andriod-logo.svg';
import AppleLogo from '../../public/homePage/CTA/AppleLogo';
// import mobile from '../../public/homePage/CTA/mockup-min.png';
// import footerImgMobile from '../../public/homePage/CTA/footerImgMobile.png';
import mobileImage from '../../public/homePage/CTA/CTAmobileImage.png';
import mobileImageSmall from '../../public/homePage/CTA/mobileImageSmall.png';
import Wrapper from '../../components/Wrapper';

const CTA = () => {
  const [isHovered, setIsHover] = useState(false);
  return (
    <Box pt={{ base: 20, lg: 14 }} mt={{ base: 4, lg: 35 }} bg="brand.lemon">
      <Wrapper display="flex" flexDirection={{ base: 'column', lg: 'row' }} alignItems="center" width="100%">
        <Box width={{ base: 'full', lg: '100%' }} margin="0 auto" textAlign={{ base: 'start', md: 'center', lg: 'start' }}>
          <Box mb={9}>
            <Text
              fontWeight="600"
              fontSize={{ base: '26px', lg: '36px' }}
              letterSpacing="-2%"
              lineHeight="44px"
              mb={{ base: 6, lg: 6 }}
            >
              Turn your closet into cash
            </Text>
            <Text fontWeight="400" fontSize={{ base: '16px', lg: '18px' }} textAlign={{ base: 'center', lg: 'left' }} lineHeight="28px">
              List an item in less than 60 seconds. Download the app now
            </Text>
          </Box>
          <Box display={{ base: 'block', md: 'flex' }} gap={4} justifyContent="center" width={{ base: '100%', lg: '70%' }}>
            <AppButton
              width="full"
              display="flex"
              gap={2}
              bg="transparent"
              border="1px solid"
              _hover={{ color: 'brand.lemon', bg: 'black' }}
              onMouseEnter={() => setIsHover(true)}
              onMouseLeave={() => setIsHover(false)}
              mb={{ base: 3, lg: 0 }}
            >
              <Box>
                <AppleLogo color={isHovered ? '#F6F8D3' : '#1C1D1F'} />
              </Box>
              <Text>Get on iPhone</Text>
            </AppButton>
            <AppButton
              width="full"
              display="flex"
              gap={2}
              bg="transparent"
              border="1px solid"
              _hover={{ color: 'brand.lemon', bg: 'black' }}
            >
              <Box>
                <Image src={andriodLogo} alt="playstore logo icon" />
              </Box>
              <Text>Get on Android</Text>
            </AppButton>
          </Box>
        </Box>
        <Box display={{ base: 'none', lg: 'flex' }} justifyContent="center" width="100%">
          <Image src={mobileImage} alt="mobile mockup call to action section image" />
        </Box>
        <Box display={{ base: 'flex', lg: 'none' }} mt={10} justifyContent="center">
          <Image src={mobileImageSmall} alt="mobile mockup call to action section image" />
        </Box>
      </Wrapper>
    </Box>
  );
};

export default CTA;