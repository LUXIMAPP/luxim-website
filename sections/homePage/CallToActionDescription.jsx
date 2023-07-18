import { Box, Text } from '@chakra-ui/react';
import Image from 'next/image';
import Wrapper from '../../components/Wrapper';
import CTAbackground from '../../public/images&svgs/homePage/CTADetails/CTAbackground.svg';
import MobilePhoto from '../../public/images&svgs/homePage/CTADetails/CTAMobilePhoto.png';
import NumberedListBox from '../../components/NumberedListBox';

const sellYourWaySection = [
  {
    number: '1',
    title: 'Sell it',
    text: 'Listing your items on Luxim is a breeze! Take 60 seconds to snap a few photos of your item and simply upload it to your virtual closet.',
  },
  {
    number: '2',
    title: 'Share It',
    text: 'Share listings with your network for shoppers to discover your incredible fashion! Actively sharing your listings increases your chances of generating more sales so you’re closer to hearing the sweet sound of Cha-Ching!',
  },
  {
    number: '3',
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
  >
    <Wrapper display="flex" data-aos="fade-left">
      <Box
        bg="#E5F5E9"
        bgImage={`url(${CTAbackground.src})`}
        py={{ base: 16, lg: 20 }}
        px={{ base: 6, lg: 20 }}
        borderRadius="4px"
        display="flex"
        alignItems="center"
        flexDirection={{ base: 'column', lg: 'row' }}
        gap={{ base: 5, lg: 24 }}
        justifyContent="space-between"
        width="100%"
      >
        <Box width={{ base: '100%', lg: '50vw' }}>
          <Image src={MobilePhoto} />
        </Box>
        <Box width={{ base: '100%', lg: '50vw' }} mt={{ base: 20, lg: 0 }}>
          <Text
            fontWeight="700"
            fontSize={{ base: '32px', lg: '40px' }}
            mb={8}
            as="h2"
          >
            Sell Your Way
          </Text>
          {sellYourWaySection.map((item) => (
            <NumberedListBox item={item} />
          ))}
        </Box>
      </Box>
    </Wrapper>
  </Box>
);

export default CallToActionDescription;
