import { Box, Text, Image } from '@chakra-ui/react';

const HowToGetStarted = () => {
  const steps = [
    {
      title: 'Create a Free Account',
      description: 'Download Luxim and create a free account within 2 minutes',
      img: '/landingPage/images/create-account.png',
    },
    {
      title: 'Upload Product',
      description:
        'Snap, upload, and sell. We handle the logistics while you watch your earnings grow.',
      img: '/landingPage/images/upload.png',
    },
    {
      title: 'Explore Fashion Finds',
      description:
        'Dive into our vast collection of fashion items. Shop, bargain, add to your wishlist, and more.',
      img: '/landingPage/images/explore.png',
    },
  ];
  return (
    <Box
      my={{ base: 18, lg: 36 }}
      px={{ base: '16px', md: 36, lg: '120px' }}
      textAlign="center"
    >
      <Box>
        <Text
          as="h3"
          fontWeight="800"
          fontSize={{ base: '24px', lg: '48px' }}
          color="#403F41"
          mb={{ base: 2, lg: 6 }}
        >
          How to get started
        </Text>
        <Text color="brand.grey" fontSize={{ base: '14px', lg: '18px' }}>
          Join Luxim to buy, sell, and earn from the comfort of your home
        </Text>
      </Box>
      <Box
        borderColor="#EAECF0 !important"
        border={{ base: 'none', lg: '1px' }}
        rounded="8px"
        display="flex"
        mx="auto"
        flexDirection={{ base: 'column', lg: 'row' }}
        gap={{ base: 4, lg: 0 }}
        w="fit-content"
        mt={10}
      >
        {steps.map((step, index) => (
          <Box
            key={step.title}
            p={6}
            border={{ base: '1px', lg: '0' }}
            rounded={{ base: '8px', lg: 0 }}
            borderRight={{
              base: '1px',
              lg: index !== steps.length - 1 ? '1px' : '0',
            }}
            borderColor="#EAECF0 !important"
          >
            <Box
              // maxw="344px"
              // maxH="208px"
              border="1px"
              borderColor="#EAECF0"
              rounded="8px"
              className="flex justify-center"
              mb={6}
            >
              <Image
                src={step.img}
                maxw="344px"
                maxH="208px"
              />
            </Box>
            <Box maxW="344px">
              <Text
                fontWeight="800"
                fontSize={{ base: '16px', lg: '24px' }}
                mb={2}
              >
                {step.title}
              </Text>
              <Text fontSize={{ base: '14px', lg: '16px' }}>
                {step.description}
              </Text>
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default HowToGetStarted;
