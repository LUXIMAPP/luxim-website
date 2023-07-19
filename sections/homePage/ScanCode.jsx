/* eslint-disable import/no-extraneous-dependencies */
import { Box, Text } from '@chakra-ui/react';
import QRCode from 'react-qr-code';
import AppButton from '../../components/AppButton';
import FooterCard from '../../components/FooterCard';

const ScanCode = () => (
  <FooterCard
    display={{ base: 'block', lg: 'flex' }}
    justifyContent="space-between"
    alignItems="center"
    paddingTop={{ base: 20, lg: 8 }}
    mt={{ base: 10, lg: 0 }}
  >
    <Box textAlign="center" display="flex" alignItems="center" flexDirection="column" gap={5}>
      <Box>
        <Text fontWeight="600" fontSize={{ base: '24px', lg: '30px' }} mb={4} as="h4">
          Scan the QR Code to download
        </Text>
        <Text>Join the Luxim community that’s changing lives- Inspiration lives here!</Text>
      </Box>
      <Box
        display="flex"
        gap={3}
        justifyContent="center"
        flexDirection={{ base: 'column', md: 'row' }}
        width="100%"
      >
        <a href="mailto:hello@luximapp.com">
          <AppButton
            color="black"
            theme="white"
            width="100%"
            boxShadow="0px 1px 2px rgba(16, 24, 40, 0.05)"
            title="Email us"
          />
        </a>
        <AppButton
          title="Chat with us"
          color="white"
          theme="brand.primary1"
        />
      </Box>
    </Box>
    <Box mt={{ base: 6, lg: 0 }}>
      <Box
        borderRadius="20.5529px"
        boxShadow="0px 6.85097px 92.4881px rgba(196, 196, 196, 0.31)"
        bg="white"
        p={{ base: 6, md: 10 }}
        margin="0 auto"
        width="fit-content"
      >
        <QRCode value="https://google.com" size="110" />
      </Box>
      <Box display="flex" justifyContent="center" mt={{ base: -2, md: -4 }}>
        <Text
          color="white"
          bg="brand.primary1"
          fontSize="xs"
          p={2}
          boxShadow=" 0px 3.42548px 27.4039px rgba(117, 117, 117, 0.24)"
          borderRadius="lg"
        >
          Scan to Download
        </Text>
      </Box>
    </Box>
  </FooterCard>
);

export default ScanCode;
