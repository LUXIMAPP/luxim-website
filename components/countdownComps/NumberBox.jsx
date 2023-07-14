import { Text } from '@chakra-ui/react';
import React from 'react';

const NumberBox = ({ num, ...rest }) => (
  <Text m={3} fontWeight="700" fontSize="32px" lineHeight="40.32px" {...rest}>
    {num < 10 ? `0${num}` : num}
  </Text>
);
export default NumberBox;
