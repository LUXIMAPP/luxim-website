/* eslint-disable import/no-extraneous-dependencies */
import { Box, Input, Text } from '@chakra-ui/react';
import Image from 'next/image';
import { useState } from 'react';
import heroImg from '../../public/images&svgs/homePage/hero/hero.png';
import heroImgMobile from '../../public/images&svgs/homePage/hero/heroImgMobile.jpg';
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

  const navigateToStore = () => {
    if (isApple) {
      window.open("https://apps.apple.com/us/app/luxim/id6474195689");
    } else {
      window.open("https://play.google.com/store/apps/details?id=com.luxim");
    }
  }

  return (
    <Wrapper showRightPadding={{ base: 6, md: 32, lg: 0 }} overflowX="hidden">
      <Box
        display="flex"
        flexDirection={{ base: 'column', lg: 'row' }}
        alignItems="center"
        justifyContent="space-between"
        // gap={{ base: 0, lg: 28 }}
        mt={{ base: 10, lg: 16 }}
        mb={{ base: 8, md: 12 }}
        pb={{ base: 10, lg: 32 }}
        mr={3}
        data-aos="fade-left"
      >
        <Box width={{ base: '100%', lg: '50%' }}>
          <Box width={{ base: 'full', lg: '100%' }} textAlign="start">
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
              The virtual marketplace for preloved traditional fashion, vintage
              pieces, latest trends, and much more. Whatever your style, buy and
              sell unique pieces on Luxim, and stay connected with a community
              of trendsetters, local designers and fashion icons.
            </Text>
            <form onSubmit={(e) => joinWaitlist((e, userEmail))}>
              <Box
                display="flex"
                flexDirection={{ base: 'column', lg: 'row' }}
                gap={4}
              >
                <AppButton
                  zIndex="20"
                  theme="brand.primary1"
                  title="Join the community"
                  color="white"
                  onClick={navigateToStore}
                  type="button"
                />
              </Box>
            </form>
            <Box
              display="flex"
              width={{ base: '100%', lg: '30vw' }}
              mt={12}
              gap={4}
              justifyContent={{ base: 'center', lg: 'start' }}
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
        <Box width="45%" zIndex={1} display={{ base: 'none', lg: 'block' }}>
          <Image src={heroImg} alt="hero section image" />
        </Box>
        <Box mt={10} display={{ base: 'block', lg: 'none' }} data-aos="fade-left">
          <Image src={heroImgMobile} alt="hero section image" />
        </Box>
      </Box>
      <Box />
    </Wrapper>
  );
};

export default Hero;
