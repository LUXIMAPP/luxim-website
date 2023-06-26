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
    py={{ base: 16, md: 20 }}
  >
    <Wrapper display="flex">
      <Box
        bg="#E5F5E9"
        bgImage={`url(${CTAbackground.src})`}
        py={{ base: 10, lg: 20 }}
        px={{ base: 10, lg: 20 }}
        borderRadius="30px"
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
        <Box width={{ base: '100%', lg: '50vw' }}>
          <Text fontWeight="700" fontSize={{ base: '32px', lg: '40px' }} mb={8} as="h2">Sell Your Way</Text>
          {sellYourWaySection.map((item) => (
            <Box
              display="flex"
              fontWeight="500"
              alignItems="start"
              mt={4}
              gap={4}
              key={item.title}
            >
              <Box width="fit-content" height="32px" display="flex" alignItems="center">
                <Box
                  w={6}
                  h={6}
                  color="white"
                  bg="brand.primary1"
                  borderRadius="full"
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                >
                  <Text fontSize="14px" lineHeight="32px">{item.number}</Text>
                </Box>
              </Box>
              <Box>
                <Text fontSize={{ base: '18px', lg: '20px' }} mb={2} as="h3">{item.title}</Text>
                <Text color="brand.grey" lineHeight="24px" mb={11}>{item.text}</Text>
              </Box>
            </Box>
          ))}
        </Box>
      </Box>
    </Wrapper>
  </Box>
);

export default CTADescription;
