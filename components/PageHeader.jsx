import { Box, Text } from '@chakra-ui/react';

const PageHeader = ({ title, subTitle, text }) => (
  <Box bg="brand.primary1" color="white" textAlign="center" py={24} px={{ base: 4, md: 36, lg: 0 }}>
    <Box
      data-aos="fade-up"
      data-aos-anchor-placement="center-bottom"
    >
      <Text fontWeight="600" mb={3}>{title}</Text>
      <Text fontSize={{ base: '36px', lg: '48px' }} lineHeight="60px" mb={6} as="h1">{subTitle}</Text>
      <Text fontSize={{ base: '18px', lg: '20px' }} fontWeight="400" lineHeight="30px" as="h3">{text}</Text>
    </Box>
  </Box>
);

export default PageHeader;
