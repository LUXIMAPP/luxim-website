import { Box } from '@chakra-ui/react';
import dynamic from 'next/dynamic';
import Wrapper from '../../components/Wrapper';

const CountDownProper = dynamic(
  () => import('../../components/countdownComps/CountDownProper'),
  { ssr: false },
);

const CountDown = () => (
  <Wrapper>
    <Box mb={12}>
      <Box
        borderBottom="1px solid black"
      />
      <Box mt={{ base: '-14.5vw', md: '-7.5vw', lg: '-4vw' }}>
        <CountDownProper />
      </Box>
    </Box>
  </Wrapper>

);

export default CountDown;
