import { Box, Text } from '@chakra-ui/react';
import Image from 'next/image';
import Wrapper from '../../components/Wrapper';
import CTAbackground from '../../public/homePage/CTADetails/CTAbackground.svg';
import MobilePhoto from '../../public/homePage/CTADetails/CTAMobilePhoto.png';

const sellYourWaySection = [
  {
    number: '1',
    title: 'List It',
    text: 'It’s that easy! Take a photo and upload to your closet in less than 60 seconds–right from your phone!',
  },
  {
    number: '2',
    title: 'Share It',
    text: 'Share listings to your network for shoppers to discover! The more you share, the more sales you generate. Ching ching!!',
  },
  {
    number: '3',
    title: 'Earn Cash',
    text: 'Shipping made easy with our pre-paid label, cash in your pocket when the item is delivered!',
  },
];

const CTADescription = () => (
  <Box
    bgSize="cover"
    bgPosition="center"
    py={20}
  >
    <Wrapper display="flex">
      <Box
        bg="#E5F5E9"
        bgImage={`url(${CTAbackground.src})`}
        py={{ base: 10, lg: 14 }}
        px={{ base: 6, lg: 10 }}
        borderRadius="30px"
        display="flex"
        flexDirection={{ base: 'column', lg: 'row' }}
        gap={{ base: 5, lg: 0 }}
        justifyContent="space-between"
        width="100%"
      >
        <Box width={{ base: '100%', lg: '30vw' }}>
          <Image src={MobilePhoto} />
        </Box>
        <Box bg="#E5F5E9" width={{ base: '100%', lg: '40vw' }} p={{ base: 2, lg: 10 }}>
          <Text fontWeight="700" fontSize={{ base: '32px', lg: '40px' }}>Sell Your Way</Text>
          {sellYourWaySection.map((item) => (
            <Box
              display="grid"
              gridTemplateColumns="12% 88%"
              fontWeight="500"
              alignItems="start"
              mt={4}
              key={item.title}
            >
              <Box
                w={{ base: 6, lg: 10 }}
                h={{ base: 6, lg: 10 }}
                color="white"
                bg="brand.secondary"
                borderRadius="full"
                display="flex"
                alignItems="center"
                justifyContent="center"
              >
                <Text fontSize={{ base: '14px', lg: '24px' }} lineHeight="32px">{item.number}</Text>
              </Box>
              <Box>
                <Text fontSize={{ base: '20px', lg: '24px' }} lineHeight="normal" mb={{ base: 1, lg: 0 }}>{item.title}</Text>
                <Text color="brand.grey" lineHeight="24px">{item.text}</Text>
              </Box>
            </Box>
          ))}
        </Box>
      </Box>
    </Wrapper>
  </Box>
);

export default CTADescription;
