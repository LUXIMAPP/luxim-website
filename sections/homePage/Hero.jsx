/* eslint-disable import/no-extraneous-dependencies */
import {
  Box, Input, Text, useToast,
} from '@chakra-ui/react';
import Image from 'next/image';
import { useState } from 'react';
import heroImg from '../../public/homePage/hero/hero.png';
import heroImgMobile from '../../public/homePage/hero/heroImgMobile.jpg';
import AppButton from '../../components/AppButton';
import Wrapper from '../../components/Wrapper';
import AppleLogo from '../../public/homePage/CTA/AppleLogo';
import AndriodLogo from '../../public/homePage/hero/AndriodLogo';
import useJoinWaitList from './useJoinWaitList';

const Hero = () => {
  const [userEmail, setUserEmail] = useState('');
  const [isAppleLogoHovered, setAppleLogoHover] = useState(false);
  const [isAndriodLogoHovered, setAndriodLogoHover] = useState(false);
  const { onClick: joinWaitlist, loader } = useJoinWaitList(setUserEmail);
  const toast = useToast();
  const toastBody = () => {
    toast({
      title: 'Note!',
      description: 'This will be available on the launch date.',
      status: 'info',
      position: 'top-right',
      variant: 'left-accent',
      isClosable: true,
    });
  };
  // bukola Egberongbe

  return (
    <Wrapper showRightPadding={{ base: 6, md: 32, lg: 0 }}>
      <Box
        display="flex"
        flexDirection={{ base: 'column', lg: 'row' }}
        alignItems="center"
        gap={{ base: 0, lg: 32 }}
        mt={{ base: 10, lg: 16 }}
        mb={{ base: 8, md: 12 }}
        pb={{ base: 10, lg: 32 }}
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
              Buy . Sell . Discover
              {' '}
              <br />
              {' '}
              Your
              {' '}
              <Box as="span" color="brand.secondary">Style</Box>
            </Text>
            <Text
              fontWeight={{ base: '500', lg: '400' }}
              color="brand.grey"
              lineHeight="28px"
              fontSize={{ base: '15px', lg: '18px' }}
              mb={8}
            >
              Sell designer, vintage, preloved, latest trends, event attire and
              more. Whatever your style, sell and shop on Luxim– the social
              marketplace app connecting the fashion community.
            </Text>
            <form onSubmit={(e) => joinWaitlist((e, userEmail))}>
              <Box
                display="flex"
                flexDirection={{ base: 'column', lg: 'row' }}
                gap={4}
              >
                <Input
                  zIndex="20"
                  placeholder="Enter your email"
                  fontSize="12px"
                  style={{ padding: '0.5rem', height: '3.15rem' }}
                  onChange={(e) => setUserEmail(e.target.value)}
                  value={userEmail}
                />
                <AppButton
                  zIndex="20"
                  theme="brand.primary1"
                  title="Join Waitlist"
                  color="white"
                  onClick={(e) => joinWaitlist(e, userEmail)}
                  type="submit"
                  isLoading={loader}
                />
              </Box>
            </form>
            <Box display="flex" width={{ base: '100%', lg: '25vw' }} mt={12} gap={4} justifyContent="center">
              <AppButton
                width="full"
                display="flex"
                gap={2}
                bg="transparent"
                border="1px solid"
                _hover={{ color: 'white', bg: 'black' }}
                onMouseEnter={() => setAppleLogoHover(true)}
                onMouseLeave={() => setAppleLogoHover(false)}
                mb={{ base: 3, lg: 0 }}
                onClick={toastBody}
              >
                <Box>
                  <AppleLogo color={isAppleLogoHovered ? 'white' : 'black'} />
                </Box>
                <Text>Get the App</Text>
              </AppButton>
              <AppButton
                width="full"
                display="flex"
                gap={2}
                bg="transparent"
                border="1px solid"
                onMouseEnter={() => setAndriodLogoHover(true)}
                onMouseLeave={() => setAndriodLogoHover(false)}
                _hover={{ color: 'white', bg: 'black' }}
                onClick={toastBody}
              >
                <Box>
                  <AndriodLogo color={isAndriodLogoHovered ? 'white' : 'black'} />
                </Box>
                <Text>Get the App</Text>
              </AppButton>
            </Box>
          </Box>
        </Box>
        <Box width="50%" zIndex={1} display={{ base: 'none', lg: 'block' }}>
          <Image src={heroImg} alt="hero section image" />
        </Box>
        <Box mt={10} display={{ base: 'block', lg: 'none' }}>
          <Image src={heroImgMobile} alt="hero section image" />
        </Box>
      </Box>
      <Box />
    </Wrapper>
  );
};

export default Hero;
