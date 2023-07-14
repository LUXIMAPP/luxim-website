import { Box, Text, useToast } from '@chakra-ui/react';
import Image from 'next/image';
import AppButton from '../../components/AppButton';
import appleStore from '../../public/images&svgs/appStore.svg';
import googlePlay from '../../public/images&svgs/googlePlay.svg';
// import mobile from '../../public/homePage/CTA/mockup-min.png';
// import footerImgMobile from '../../public/homePage/CTA/footerImgMobile.png';
import closetImage from '../../public/images&svgs/homePage/CTA/CTaclosetImage.png';
// import mobileImageSmall from '../../public/homePage/CTA/mobileImageSmall.png';
import Wrapper from '../../components/Wrapper';

const CTA = () => {
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
  return (
    <Box py={{ base: 20, lg: 14 }} mt={{ base: 4, lg: 35 }} bg="brand.lemon">
      <Wrapper display="flex" flexDirection={{ base: 'column', lg: 'row' }} alignItems="center" width="100%">
        <Box width={{ base: 'full', lg: '100%' }} margin="0 auto" textAlign={{ base: 'start', md: 'center', lg: 'start' }}>
          <Box mb={9}>
            <Text
              fontWeight="600"
              fontSize={{ base: '26px', lg: '36px' }}
              letterSpacing="-2%"
              lineHeight="44px"
              mb={{ base: 6, lg: 6 }}
              as="h2"
            >
              Turn your closet into cash
            </Text>
            <Text fontWeight="400" fontSize={{ base: '16px', lg: '18px' }} textAlign={{ base: 'center', lg: 'left' }} lineHeight="28px">
              List an item in less than 60 seconds. Download the app now.
            </Text>
          </Box>
          <Box display={{ base: 'block', md: 'flex' }} gap={4} justifyContent="center" width={{ base: '100%', lg: '70%' }}>
            <Box
              display="flex"
              width={{ base: '100%', lg: '30vw' }}
              mt={12}
              gap={4}
              justifyContent={{ base: 'center', lg: 'start' }}
            >
              {[
                {
                  link: '#',
                  image: appleStore,
                  id: 'apple-store',
                  alt: 'download for apple store button',
                },
                {
                  link: '#',
                  image: googlePlay,
                  id: 'google-play',
                  alt: 'download for google play store button',
                },
              ].map((button) => (
                <Box id={button.id}>
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
                    onClick={toastBody}
                  >
                    <Image src={button.image} alt={button.alt} />
                  </AppButton>
                </Box>
              ))}
            </Box>
          </Box>
        </Box>
        <Box mt={{ base: 10, lg: 0 }} justifyContent="center" width="100%">
          <Image src={closetImage} alt="mobile mockup call to action section image" />
        </Box>
      </Wrapper>
    </Box>
  );
};

export default CTA;
