import { Box, Text } from '@chakra-ui/react';
import Image from 'next/image';
import AppButton from '../../../components/AppButton';
import shopping from '../../../public/landingPage/images/money-for-cloth.png';
import useHeroLogic from './useHeroLogic';

const Hero = () => {
  const { getRadiusValue, whyLuximList } = useHeroLogic();
  return (
    <Box
      display="flex"
      flexDirection="column"
      paddingX={{ base: '16px', md: 36, lg: '120px' }}
      alignItems="center"
      mb={12}
    >
      <Box
        display="flex"
        flexDirection="column"
        textAlign="center"
        alignItems="center"
        gap={6}
        maxWidth="804px"
      >
        <Text
          as="h1"
          fontWeight="800"
          fontSize={{ base: '32px', lg: '64px' }}
          letterSpacing="-2%"
          lineHeight={{ base: '38.4px', lg: '86.4px' }}
          marginTop={{ base: 12, lg: 24 }}
          className="wave-animation"
        >
          Discover Trendy Fashion
          <br />
          Items on
          {' '}
          {['L', 'u', 'x', 'i', 'm'].map((letter) => (
            <Text as="span" color="#ED774E" key={letter}>
              {letter}
            </Text>
          ))}
        </Text>
        <Text fontSize={{ base: '16px', lg: '18px' }}>
          Whether you&apos;re an Aso-ebi seller, thrift vendor, fashion
          enthusiast, or a vintage brand, Luxim is your new fashion haven.
        </Text>
        <AppButton
          title="Download Luxim Now"
          theme="brand.primary1"
          color="white"
          fontSize="14px"
          padding="8px 16px"
          width="fit-content"
          onClick={() => window.open('/press/thank-you', '_blank')}
        />
      </Box>
      <Box marginTop="72px" marginBottom={{ base: '68px', lg: '143px' }} maxW="886.79px" className="soft-bounce">
        <Box>
          <Image src={shopping} alt="money for cloth hero section img" />
        </Box>
      </Box>
      <Box maxW="908px" textAlign="center" mb={{ base: 8, lg: 16 }}>
        <Text fontSize="14px" fontWeight="500" color="brand.primary1" mb={2}>
          JOIN THE FASHION REVOLUTION
        </Text>
        <Text as="h3" fontSize={{ base: '24px', lg: '48px' }} fontWeight="800" color="#403F41" mb={6}>
          Why Luxim for Buying or Selling?
        </Text>
        <Text fontSize={{ base: '14px', lg: '18px' }} color="brand.grey">
          Luxim is a secure virtual marketplace for preloved traditional
          fashion, vintage pieces, latest trends, and much more. Whatever your
          style, buy and sell unique pieces on Luxim and stay connected with a
          community of trendsetters, local designers and fashion icons
        </Text>
      </Box>
      <Box display="grid" gridTemplateColumns={{ base: '100%', lg: 'repeat(3, 1fr)' }} rounded="8px">
        {whyLuximList.map((item, index) => (
          <Box
            key={item.heading}
            bg={item.bgColor}
            p={{ base: 6, lg: 8 }}
            rounded={getRadiusValue(whyLuximList, index)}
          >
            <Box
              bg={item.iconBg}
              px={2}
              pt={2}
              pb={1}
              w="fit-content"
              rounded="4px"
              mb={{ base: 2, lg: 6 }}
            >
              <Image src={item.icon} alt={`${item.heading} item icon`} />
            </Box>
            <Box>
              <Text fontWeight="800" fontSize={{ base: '16px', lg: '24px' }} lineHeight={{ base: 'auto', lg: '32px' }} mb={2}>
                {item.heading}
              </Text>
              <Text fontSize={{ base: '14px', lg: '16px' }}>{item.description}</Text>
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
};
export default Hero;
