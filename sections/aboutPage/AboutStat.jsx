import { Box, Text } from '@chakra-ui/react';
import Image from 'next/image';
import React from 'react';
import womanImage from '../../public/images&svgs/about/aboutStatImage.png';
import useCounter from './useCounter';
import Wrapper from '../../components/Wrapper';

const AnimatedCounter = ({ number, symbol, ...rest }) => {
  const { counterRef } = useCounter({ number, symbol });
  return <Box as="span" ref={counterRef} className="counter" {...rest} />;
};

const AboutStat = () => (
  <Wrapper display="flex" flexDirection={{ base: 'column-reverse', lg: 'row' }} bg="brand.lightLemon" py={{ base: 16, md: 24 }} px={{ base: 6, md: 36 }} gap={{ base: 12, lg: '5%' }}>
    <Box width={{ base: '100%', lg: '45%' }}>
      <Image src={womanImage} alt="an image of a black african woman" />
    </Box>
    <Box width={{ base: '100%', lg: '50%' }}>
      <Text color="brand.grey" lineHeight="24px" fontSize={{ base: '14px', lg: '16px' }}>We’ve helped hundreds of individuals sell their used fashion items.</Text>
      <Text fontWeight="600" fontSize={{ base: '30px', lg: '48px' }} lineHeight={{ base: '38px', lg: '60px' }} mt={3} as="h2">We’re only just getting started on our journey</Text>
      <Box mt={{ base: 12, lg: 16 }} display="grid" gridTemplateColumns={{ base: '100%', lg: 'repeat(2, 0.5fr)' }} rowGap={{ base: 8, lg: 12 }}>
        {[
          { number: '400', title: 'Closet owners', symbol: '+' },
          { number: '600', title: 'Turnover on sales', symbol: '%' },
          { number: '10', title: 'Active Users', symbol: 'k' },
          { number: '200', title: '5-star reviews', symbol: '+' },
        ].map((item) => (
          <Box key={item.title}>
            <AnimatedCounter number={item.number} symbol={item.symbol} fontWeight="600" fontSize={{ base: '48px', lg: '60px' }} color="brand.secondary" />
            <Text fontWeight="500">{item.title}</Text>
          </Box>
        ))}
      </Box>
    </Box>
  </Wrapper>
);

export default AboutStat;
