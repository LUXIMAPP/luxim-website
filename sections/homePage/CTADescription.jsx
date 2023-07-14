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
    text: 'Listing your items on Luxim is a breeze! With just a few simple steps, take a photo of your items and simply upload it to your virtual closet in under 60 seconds- all conveniently done from your phone!',
  },
  {
    number: '2',
    title: 'Share It',
    text: 'Spread the word and share your listing with your network, allowing shoppers to discover your incredible item! By actively sharing your lisings, you increase your chances of generating more sales and hearing the sweet sound of sale-Ching Ching!',
  },
  {
    number: '3',
    title: 'Earn Cash',
    text: 'We provide you a hassle-free shipping process, from pick up to delivery. Once the item is delivered and verified, you can enjoy the joy of money in your pocket!',
  },
];

const CTADescription = () => (
  <Box
    bgSize="cover"
    bgPosition="center"
    pb={{ base: 16, md: 20 }}
    py={{ base: 16, md: 20 }}
  >
    <Wrapper display="flex">
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

export default CTADescription;
