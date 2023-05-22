import { Text } from '@chakra-ui/react';

const SectionTitle = ({ text, ...rest }) => (
  <Text
    bg="brand.secondary"
    py={2}
    px={4}
    borderRadius="20px"
    fontSize="sm"
    fontWeight="500"
    color="white"
    width="fit-content"
    {...rest}
  >
    {text}
  </Text>
);

export default SectionTitle;
