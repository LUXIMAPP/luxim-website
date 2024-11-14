import { Box, Text, Image } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import Navbar from '../../components/landingPage/Navbar';
import AppButton from '../../components/AppButton';
import SnapchatPixel from '../../components/SnapchatPixel';

const ThankYouPage = () => {
  const router = useRouter();

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    setTimeout(() => {
      router.push('https://luximapp.onelink.me/tfyu/u02sgy3c');
    }, 5000);
  }, []);
  return (
    <>
      <SnapchatPixel />
      <Navbar />
      <Box display="flex" flexDirection="column" justifyContent="center" textAlign="center" mt={{ base: 8, lg: 32 }} px={4}>
        <Box>
          <Text as="h3" fontWeight="800" fontSize={{ base: '32px', lg: '56px' }} lineHeight={{ base: '38.4px', lg: 'auto' }} mb={{ base: 4, lg: 6 }}>Thank you for downloading Luxim</Text>
          <Text fontSize={{ base: '16px', lg: '18px' }} mb={{ base: 6, lg: 12 }}>
            Your download will begin automatically and if it does not, kindly
            {' '}
            <Text fontWeight="600" as="span" cursor="pointer" textDecoration="underline" onClick={() => window.open('https://luximapp.onelink.me/tfyu/u02sgy3c', '_blank')}>
              click
              here
            </Text>
            {' '}
            to start manually
          </Text>
          <AppButton
            title="Back to Home"
            onClick={() => router.push('/')}
            theme="brand.primary1"
            color="white"
            fontSize="14px"
            padding="8px 16px"
          />
        </Box>
        <Box
          marginTop="72px"
          marginBottom={{ base: '68px', lg: '143px' }}
          maxW="886.79px"
          opacity="30%"
          mx="auto"
        >
          <Image src="/landingPage/images/money-for-cloth.png" alt="money for cloth hero section img" className="soft-bounce" />
        </Box>
      </Box>
    </>
  );
};

export default ThankYouPage;
