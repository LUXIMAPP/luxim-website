import { Box, Text } from '@chakra-ui/react';
import Image from 'next/image';
import tape from '../../public/homePage/countDown/tape.svg';
import Wrapper from '../../components/Wrapper';
import CountDownProper from '../../components/countdownComps/CountDownProper';

const CountDown = () => (
  <>
    <Box bg="brand.primary1" display="flex" alignItems="center" justifyContent="space-between" py={1} marginBottom={-20}>
      <Wrapper>
        <Box>
          <Text color="white" fontSize="32px" fontWeight="700" lineHeight="40px" textAlign="start">
            Countdown
            {' '}
            <br />
            {' '}
            to Launching...
          </Text>
        </Box>
      </Wrapper>
      <Box textColor="white">
        <CountDownProper />
      </Box>
      <Box borderRadius="4px" bg="white" position="relative" zIndex={5} mr="91px">
        <Text color="brand.primary1" fontSize="28px" padding="16px 24px">JULY 1</Text>
      </Box>
    </Box>
    <Box display="flex" justifyContent="right" position="relative" top="-213" zIndex={0}>
      <Image src={tape} alt="count down tape image" />
    </Box>
  </>
);

export default CountDown;
