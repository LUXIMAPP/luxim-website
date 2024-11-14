import React from 'react';
import Image from 'next/image';
import { Box, Text } from '@chakra-ui/react';
import Wrapper from '../../components/Wrapper';
import AppButton from '../../components/AppButton';
import CTAbackground from '../../public/others/cta_bg.png';
import MobilePhoto from '../../public/others/cta_mobile.png';
import appleStore from '../../public/images&svgs/appStore.svg';
import googlePlay from '../../public/images&svgs/googlePlay.svg';
import NumberedListBox from '../../components/NumberedListBox';

const sellYourWaySection = [
  {
    icon: '/others/download.png',
    title: 'Get Started',
    text: 'Download Luxim from the App Store or Play Store and sign up to begin your selling journey!',
  },
  {
    icon: '/others/sell.png',
    title: 'Sell it',
    text: 'Listing your items on Luxim is a breeze! Take 60 seconds to snap a few photos of your item and simply upload it to your virtual closet.',
  },
  {
    icon: '/others/share.png',
    title: 'Share It',
    text: 'Share listings with your network for shoppers to discover your incredible fashion! Actively sharing your listings increases your chances of generating more sales so you’re closer to hearing the sweet sound of Cha-Ching!',
  },
  {
    icon: '/others/earn.png',
    title: 'Earn Cash',
    text: 'Enjoy a hassle-free shipping process, from pick up to delivery. Once your sold item is delivered and verified, you can enjoy the cash in your wallet!',
  },
];

const CallToActionDescription = () => (
  <Box
    bgSize="cover"
    bgPosition="center"
    pb={{ base: 16, md: 20 }}
    py={{ base: 16, md: 20 }}
    overflowX="hidden"
  >
    <Wrapper display="flex" data-aos="fade-left" overflow="hidden">
      <Box
        bg="#E5F5E9"
        bgImage={`url(${CTAbackground.src})`}
        bgRepeat="no-repeat"
        bgSize="cover"
        bgPos="center"
        // py={{ base: 16, lg: 20 }}
        paddingTop={{ base: 16, lg: 20 }}
        px={{ base: 6, lg: 20 }}
        borderRadius="20px"
        display="flex"
        alignItems="center"
        flexDirection={{ base: 'column', lg: 'column' }}
        gap={{ base: 5, lg: 24 }}
        justifyContent="space-between"
        width="100%"
      >
        <Box width={{ base: '100%', lg: '50%' }}>
          <Box width={{ base: 'full', lg: '100%' }} textAlign="center">
            <Text
              fontWeight="700"
              fontSize={{ base: '32px', lg: '40px' }}
              mb={8}
              as="h2"
            >
              Sell Your Way
            </Text>
            <Text
              fontWeight={{ base: '500', lg: '400' }}
              // color="brand.grey"
              lineHeight="28px"
              fontSize={{ base: '15px', lg: '18px' }}
              mb={8}
            >
              List an item in less than 60 seconds. Download the app now.
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
        <Box
          display="flex"
          alignItems="center"
          flexDirection={{ base: 'column', lg: 'row' }}
          gap={{ base: 5, lg: 24 }}
          justifyContent="space-between"
          width="100%"
        >
          <Box width={{ base: '100%', lg: '50vw' }}>
            {sellYourWaySection.slice(0,2).map((item) => (
              <React.Fragment key={item.number}>
                <NumberedListBox item={item} />
              </React.Fragment>
            ))}
          </Box>
          <Box width={{ base: '100%', lg: '50vw' }} style={{
              transform: "translateY(15%)",
              animation: "MoveUpDown 3s linear infinite"
            }}>
            <Image src={MobilePhoto} />
          </Box>
          <Box width={{ base: '100%', lg: '50vw' }} mt={{ base: 20, lg: 0 }}>
            {sellYourWaySection.slice(2,4).map((item) => (
              <React.Fragment key={item.number}>
                <NumberedListBox item={item} />
              </React.Fragment>
            ))}
          </Box>
        </Box>
      </Box>
    </Wrapper>
  </Box>
);

export default CallToActionDescription;
