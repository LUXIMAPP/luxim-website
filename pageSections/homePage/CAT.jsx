import { Box, Text } from '@chakra-ui/react';
import Image from 'next/image';
import { useState } from 'react';
import AppButton from '../../components/AppButton';
import andriodLogo from '../../public/homePage/CTA/andriod-logo.svg';
import AppleLogo from '../../public/homePage/CTA/AppleLogo';
import mobile from '../../public/homePage/CTA/mockup-min.png';
import Wrapper from '../../components/Wrapper';

const CAT = () => {
  const [isHovered, setIsHover] = useState(false);
  return (
    <Box pt={28} mt={35} bg="brand.lemon">
      <Wrapper>
        <Box width="55vw" margin="0 auto">
          <Box mb={9}>
            <Text
              fontWeight="600"
              fontSize="36px"
              letterSpacing="-2%"
              lineHeight="44px"
              mb={12}
            >
              Get the Luxim App
            </Text>
            <Text fontWeight="400" fontSize="18px" lineHeight="28px">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
              minim.
            </Text>
          </Box>
          <Box display="flex" gap={4} justifyContent="center">
            <AppButton
              display="flex"
              gap={4}
              bg="transparent"
              border="1px solid"
              _hover={{ color: 'brand.lemon', bg: 'black' }}
              onMouseEnter={() => setIsHover(true)}
              onMouseLeave={() => setIsHover(false)}
            >
              <AppleLogo color={isHovered ? '#F6F8D3' : '#1C1D1F'} />
              <Text>Get on iPhone</Text>
            </AppButton>
            <AppButton
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
        <Box display="flex" justifyContent="center">
          <Image src={mobile} alt="mobile mockup call to action section image" />
        </Box>
      </Wrapper>
    </Box>
  );
};

export default CAT;
