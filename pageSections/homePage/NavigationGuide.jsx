import { Box, Text } from '@chakra-ui/react';
import Wrapper from '../../components/Wrapper';
import AppButton from '../../components/AppButton';

const NavigationGuide = () => (
  <Box bg="#F8F8F8" py={20} mt={{ base: 0, lg: -150 }}>
    <Wrapper>
      <Box display="flex" flexDirection={{ base: 'column', lg: 'row' }} justifyContent="space-between">
        <Box width={{ base: '100%', lg: '30vw' }}>
          <Text fontSize="32px" fontWeight="700">
            How
            <Box as="span" mx={2} color="brand.secondary">
              Luxim
            </Box>
            works
          </Text>
          <Text color="brand.grey" fontSize="18px" mt={2} mb={10} lineHeight="32px">
            How to navigate buying, selling and shopping on Luxim Community of
            traditional fashion enthusiasts can connect, inspire, and create
            opportunities to earn income while reducing clothing waste.
          </Text>
          <AppButton title="Watch more" theme="brand.primary1" color="white" />
        </Box>
        <Box />
      </Box>
    </Wrapper>
  </Box>
);

export default NavigationGuide;
