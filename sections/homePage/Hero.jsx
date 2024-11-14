/* eslint-disable import/no-extraneous-dependencies */
import { Box, Text } from '@chakra-ui/react';
import Image from 'next/image';
import { useState } from 'react';
import heroImg from '../../public/others/hero_group.png';
import AppButton from '../../components/AppButton';
import Wrapper from '../../components/Wrapper';
import appleStore from '../../public/images&svgs/appStore.svg';
import googlePlay from '../../public/images&svgs/googlePlay.svg';
import { useEffect } from 'react';

const Hero = () => {
  const [isApple, setIsApple] = useState(false);

  useEffect(() => {
    if (/(Mac|iPhone|iPod|iPad)/i.test(navigator.platform)) {
      setIsApple(true);
    }
  }, []);

  return (
    <Box backgroundImage="url('/others/hero_bg.png')" backgroundPosition="top" backgroundRepeat="no-repeat" backgroundSize="cover">
      <Wrapper showRightPadding={{ base: 6, md: 32, lg: 0 }} overflowX="hidden">
        <Box
          display="flex"
          flexDirection={{ base: 'column', lg: 'column' }}
          alignItems="center"
          // gap={{ base: 0, lg: 28 }}
          mt={{ base: 10, lg: 16 }}
          mb={{ base: 8, md: 12 }}
          pb={{ base: 10, lg: 32 }}
          mr={3}
          data-aos="fade-left"
        >
          <Box width={{ base: '100%', lg: '50%' }}>
            <Box width={{ base: 'full', lg: '100%' }} textAlign="center">
              <Text
                as="h1"
                fontSize={{ base: '30px', lg: '60px' }}
                fontWeight="700"
                lineHeight={{ base: '40px', lg: '80px' }}
                mb={{ base: 4, lg: 6 }}
              >
                Buy . Sell . Reimagine
                {' '}
                <br />
                {' '}
                Your
                {' '}
                <Box as="span" color="brand.secondary">
                  Style
                </Box>
              </Text>
              <Text
                fontWeight={{ base: '500', lg: '400' }}
                // color="brand.grey"
                lineHeight="28px"
                fontSize={{ base: '15px', lg: '18px' }}
                mb={8}
              >
                The marketplace for preloved traditional fashion, vintage finds, and the latest trends. Buy and sell unique pieces on Luxim and connect with trendsetters, local designers, and fashion icons.
              </Text>
              <Box
                display="flex"
                width={{ base: '100%', lg: '100%' }}
                mt={12}
                gap={4}
                justifyContent={{ base: 'center', lg: 'center' }}
              >
                {[
                  {
                    link: 'https://apps.apple.com/us/app/luxim/id6474195689',
                    image: appleStore,
                    id: 'apple-store',
                    alt: 'download for apple store button',
                  },
                  {
                    link: 'https://play.google.com/store/apps/details?id=com.luxim',
                    image: googlePlay,
                    id: 'google-play',
                    alt: 'download for google play store button',
                  },
                ].map((button) => (
                  <Box key={button.id}>
                    <AppButton
                      width="full"
                      bg="transparent"
                      border="none"
                      _hover={{
                        bg: 'none',
                        filter: 'drop-shadow(0px 0px 2px rgba(0,0,0,0.75))',
                      }}
                      padding="0"
                      mb={{ base: 3, lg: 0 }}
                      onClick={() => window.open(button.link, '_blank')}
                    >
                      <Image src={button.image} alt={button.alt} />
                    </AppButton>
                  </Box>
                ))}
              </Box>
            </Box>
          </Box>
          <Box width="50%" zIndex={1} display={{ base: 'none', lg: 'block' }} position="relative" marginTop={200}>
            <Image src={heroImg} alt="hero section image" />
            <img src="/others/hero_mobile.png" alt="Hero" width="45%" style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              animation: "MoveUpDown2 4s linear infinite"
            }} />
          </Box>
        </Box>
        <Box />
      </Wrapper>
    </Box>
    
  );
};

export default Hero;
