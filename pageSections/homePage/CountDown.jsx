import { Box, Text } from '@chakra-ui/react';

const CountDown = () => (
  <>
    <Box bg="brand.primary1" display="flex" alignItems="center">
      <Box>
        <Text color="white" fontSize="32px" fontWeight="700" lineHeight="40px">
          Countdown to Launching...
        </Text>
      </Box>
      <Box>Timer</Box>
      <Box borderRadius="4px" bg="white">
        <Text color="brand.primary1" fontSize="28px" padding="16px 24px">JULY 1</Text>
      </Box>
    </Box>
    <Box />
  </>
);

export default CountDown;
