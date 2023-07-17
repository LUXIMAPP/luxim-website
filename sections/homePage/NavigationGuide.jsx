import { Box, Text } from '@chakra-ui/react';
import Image from 'next/image';
import Wrapper from '../../components/Wrapper';
import AppButton from '../../components/AppButton';
import correctIcon from '../../public/images&svgs/homePage/navigationGuide/correctIcon.svg';
import NumberedListBox from '../../components/NumberedListBox';
import videoPlaceholder from '../../public/images&svgs/navigationGuide/videoPlaceholder.jpg';

const NavigationGuide = () => {
  const items = [
    {
      title: 'Zero Capital Required',
      text: 'Join our Luxim community today! Simply go to your closet, snap a picture of an item, list and start making money! It’s that simple!',
    },
    {
      title: 'Be your own boss',
      text: 'Set your own hours, work from home or anywhere! The choice is yours!',
    },
    {
      title: 'Seamless Logistics',
      text: 'We take the worry out of your logistic needs. As a valued Luxim member, we come to your doorstep, pick up and deliver items to your clients.',
    },
  ];
  return (
    <Box bg="#F8F8F8" py={20}>
      <Wrapper>
        <Box
          display="flex"
          flexDirection={{ base: 'column', lg: 'row' }}
          justifyContent="space-between"
          alignItems="center"
        >
          <Box width={{ base: '100%', lg: '30vw' }}>
            <>
              <Text as="h2" fontSize="32px" fontWeight="700" lineHeight="48px">
                How
                <Box as="span" mx={2} color="brand.secondary">
                  Luxim
                </Box>
                works
              </Text>
              <Text
              // color="brand.grey"
                fontSize={{ base: '14px', md: '16px' }}
                mt={2}
                mb={10}
                lineHeight={{ base: '24px', md: '28px' }}
                fontWeight="400"
              >
                How to navigate buying, selling and shopping on Luxim Community of
                traditional fashion enthusiasts can connect, inspire, and create
                opportunities to earn income while reducing clothing waste.
              </Text>
              <Box>
                {items.map((item) => (
                  <NumberedListBox item={item} icon={correctIcon} altText="correct icon bullet poin" />
                ))}
              </Box>
            </>
            <Box display={{ base: 'none', lg: 'flex' }} justifyContent={{ base: 'center', lg: 'start' }}>
              <AppButton title="Watch more" theme="brand.primary1" color="white" mt={10} />
            </Box>
          </Box>
          <Box width={{ base: '100%', lg: '55%' }} mt={{ base: 10, lg: 0 }}>
            <Image src={videoPlaceholder} alt="video demo place holder" />
          </Box>
        </Box>
        <Box display={{ base: 'flex', lg: 'none' }} justifyContent={{ base: 'center', lg: 'start' }}>
          <AppButton title="Watch more" theme="brand.primary1" color="white" mt={10} />
        </Box>
      </Wrapper>
    </Box>
  );
};

export default NavigationGuide;
