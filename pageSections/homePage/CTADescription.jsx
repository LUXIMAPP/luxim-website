import { Box, Text } from '@chakra-ui/react';
import Image from 'next/image';
import buyCard from '../../public/homePage/CTADetails/buyCard.jpg';
import shopCard from '../../public/homePage/CTADetails/shopCard.jpg';
import sellCard from '../../public/homePage/CTADetails/sellCard.jpg';
import Wrapper from '../../components/Wrapper';

const CTADescription = () => (
  <Wrapper mt={-20}>
    <Box display="flex" gap={5}>
      {[
        {
          label: 'Buy',
          image: buyCard,
          text: 'Buy for traditional and modern high-quality pre-owned clothes.',
        },
        {
          label: 'Shop',
          image: shopCard,
          text: 'Perfect destination for  shopping  traditional  and trendy fashion, curating your style and 70% off prices.',
        },
        {
          label: 'Sell',
          image: sellCard,
          text: 'List your item , share it to your network, and sell from your phone in less than 60 seconds.',
        },
      ].map((card) => (
        <Box key={card.label}>
          <Box mt={card.label === 'Shop' ? 0 : 4}>
            <Image
              src={card.image}
              alt={`${card.label} card call to action section image`}
            />
          </Box>
          <Box>
            <Text fontWeight="700" fontSize="28px" mt={8} mb={2}>
              {card.label}
            </Text>
            <Text color="brand.grey" fontWeight="500" lineHeight="24px">
              {card.text}
            </Text>
          </Box>
        </Box>
      ))}
    </Box>
  </Wrapper>
);

export default CTADescription;
