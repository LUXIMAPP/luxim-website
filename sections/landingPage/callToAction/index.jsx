import { Box, Image, Text } from '@chakra-ui/react';
import AppButton from '../../../components/AppButton';

const CallToAction = () => {
  const sections = [
    {
      action: 'JOIN THE FASHION REVOLUTION',
      title: 'A Sustainable Earth',
      description:
        'Get the Luxim app. Reduce fashion waste, and save the earth one wardrobe sale at a time from your mobile phone.',
      bg: '#F2FFF9',
      img: '/landingPage/images/green-world.png',
      imgBg: '#D6FFEB',
    },
    {
      action: 'FAST',
      title: 'Swift Pickups and Deliveries',
      description:
        'Experience lightning-fast deliveries, even in Lagos traffic. Our dedicated riders ensure your order is picked up and delivered promptly.',
      bg: '#D5DB20',
      img: '/landingPage/images/bus.png',
      imgBg: '#F7F8CE',
    },
    {
      action: 'BID',
      title: 'Bargain for items',
      description:
        'On Luxim, sellers can enable auctions, while buyers enjoy the thrill of bargaining, just like in Alaba market',
      bg: '#FCFDF2',
      img: '/landingPage/images/bargain.png',
      imgBg: '#F7F8D3',
    },
    {
      action: 'SECURE',
      title: 'Safe Payment Tracking',
      description:
        'Luxim offers various payment options, ensuring secure transactions. Enjoy low fees and keep the most of your earnings with our straightforward fee structure.',
      bg: '#FAF9FD',
      img: '/landingPage/images/safe-payment.png',
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
            className={`${index % 2 === 0 ? 'constant-tilt-shake' : 'constant-tilt-shake-opposite'} flex justify-center`}
            maxH={{ base: '284px', lg: '414px' }}
          >
            <Image src={section.img} w={`${section.title === 'Bargain for items' ? '100%' : '60%'}`} />
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
