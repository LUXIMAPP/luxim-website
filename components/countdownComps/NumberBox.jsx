import { Box, Text } from '@chakra-ui/react';
import React from 'react';

const NumberBox = ({ num, ...rest }) => (
  <Box fontWeight="700" fontSize="32px" lineHeight="40.32px" {...rest}>
    <Text m={3}>
      {num < 10 ? `0${num}` : num}
    </Text>
  </Box>

);
export default NumberBox;
