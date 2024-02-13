import { Box, Text } from '@chakra-ui/react';
import Image from 'next/image';
import AppButton from '../../../components/AppButton';
import greenWorld from '../../../public/landingPage/greenWorld.svg';
import bus from '../../../public/landingPage/bus.svg';
import bargain from '../../../public/landingPage/bargain.svg';
import safePayment from '../../../public/landingPage/safePayment.svg';

const CallToAction = () => {
  const sections = [
    {
      action: 'JOIN THE FASHION REVOLUTION',
      title: 'A Sustainable Earth',
      description:
        'Get the Luxim app. Reduce fashion waste, and save the earth one wardrobe sale at a time from your mobile phone.',
      bg: '#F2FFF9',
      img: greenWorld,
      imgBg: '#D6FFEB',
    },
    {
      action: 'FAST',
      title: 'Swift Pickups and Deliveries',
      description:
        'Experience lightning-fast deliveries, even in Lagos traffic. Our dedicated riders ensure your order is picked up and delivered promptly.',
      bg: '#D5DB20',
      img: bus,
      imgBg: '#F7F8CE',
    },
    {
      action: 'BID',
      title: 'Bargain for items',
      description:
        'On Luxim, sellers can enable auctions, while buyers enjoy the thrill of bargaining, just like in Alaba market',
      bg: '#FCFDF2',
      img: bargain,
      imgBg: '#F7F8D3',
    },
    {
      action: 'SECURE',
      title: 'Safe Payment Tracking',
      description:
        'Luxim offers various payment options, ensuring secure transactions. Enjoy low fees and keep the most of your earnings with our straightforward fee structure.',
      bg: '#FAF9FD',
      img: safePayment,
      imgBg: '#EDEBFA',
    },
  ];

  return (
    <Box>
      {sections.map((section, index) => (
        <Box
          key={section.action}
          bgColor={section.bg}
          py={{ base: '72px', lg: '140px' }}
          px={{ base: '16px', md: 36, lg: '120px' }}
          display="flex"
          alignItems="center"
          gap="24px"
          flexDirection={{ base: 'column', lg: index % 2 === 0 ? 'row-reverse' : 'row' }}
        >
          <Box
            width={{ base: '100%', lg: '50%' }}
            bgColor={section.imgBg}
            className={`${index % 2 === 0 ? 'constant-tilt-shake' : 'constant-tilt-shake-opposite'}`}
          >
            <Box maxW={{ base: '358px', lg: '622.5px' }} maxH={{ base: '284px', lg: '414px' }} display="flex" justifyContent="center" mx="auto">
              <Image src={section.img} />
            </Box>
          </Box>
          <Box width={{ base: '100%', lg: '50%' }}>
            <Text fontSize="14px" fontWeight="500" mb={2}>
              {section.action}
            </Text>
            <Text as="h4" fontSize={{ base: '24px', lg: '48px' }} fontWeight="800" lineHeight={{ base: '28.8px', lg: '57.6px' }}>
              {section.title}
            </Text>
            <Text my={{ base: 4, lg: 6 }}>{section.description}</Text>
            <AppButton
              title={index % 2 === 0 ? 'Get Luxim Now' : 'Donwload Luxim Now'}
              onClick={() => window.open('/press/thank-you', '_blank')}
              theme="brand.primary1"
              color="white"
              fontSize="14px"
              padding="8px 16px"
            />
          </Box>
        </Box>
      ))}
    </Box>
  );
};

export default CallToAction;
