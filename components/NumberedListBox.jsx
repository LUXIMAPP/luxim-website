import { Box, Text } from '@chakra-ui/react';
import Image from 'next/image';

const NumberedListBox = ({ item, icon, altText }) => (
  <Box
    display="flex"
    // justifyContent="space-between"
    fontWeight="500"
    alignItems="start"
    mt={4}
    gap={4}
    key={item.title}
  >
    {icon
      ? (
        <Box mt={1}>
          <Image src={icon} alt={altText} />
        </Box>
      )
      : (
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
      )}
    <Box width="fit-content">
      <Text fontSize={{ base: '18px', lg: '20px' }} mb={2} as="h3">{item.title}</Text>
      <Text color="brand.grey" lineHeight="24px" mb={11} fontSize={{ base: '14px', md: '16px' }}>{item.text}</Text>
    </Box>
  </Box>
);

export default NumberedListBox;
