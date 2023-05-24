import { Box } from '@chakra-ui/react';
import React from 'react';

const Wrapper = ({
  children, showLeftPadding, showRightPadding, ...rest
}) => (
  <Box
    paddingLeft={showLeftPadding ?? 32}
    paddingRight={showRightPadding ?? 32}
    {...rest}
  >
    {children}
  </Box>
);

export default Wrapper;
