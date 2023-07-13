import { Box } from '@chakra-ui/react';
import React from 'react';

const Wrapper = ({
  children, showLeftPadding, showRightPadding, ...rest
}) => (
  <Box
    paddingLeft={showLeftPadding ?? { base: 6, md: 36 }}
    paddingRight={showRightPadding ?? { base: 6, md: 32 }}
    {...rest}
    maxWidth="1800px"
    marginX="auto"
  >
    {children}
  </Box>
);

export default Wrapper;
