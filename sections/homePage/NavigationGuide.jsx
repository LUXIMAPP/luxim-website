import { Box, Text } from '@chakra-ui/react';
import React from 'react';
import Wrapper from '../../components/Wrapper';
import AppButton from '../../components/AppButton';
import correctIcon from '../../public/images&svgs/homePage/navigationGuide/correctIcon.svg';
import NumberedListBox from '../../components/NumberedListBox';

const NavigationGuide = () => {
  const items = [
    {
      icon: "/others/moneys.png",
      title: 'Zero Capital Required',
      text: "It's free to list on Luxim! Simply go to your closet, snap a picture of an item, list it, and start making money!",
    },
    {
      icon: "others/chart-success.png",
      title: 'Be your own boss',
      text: 'The choice is yours to set your own hours, work from home or from anywhere!',
    },
    {
      icon: "others/truck-time.png",
      title: 'Seamless Logistics',
      text: 'We take the worry out of your logistic needs! As a member of our community, we provide doorstep pick up and deliver sold items to your clients.',
    },
  ];
  return (
    <Box bg="#F8F8F8" py={20} overflowX="hidden">
      <Wrapper data-aos="fade-right">
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
              {/* <Text
                // color="brand.grey"
                fontSize={{ base: '14px', md: '16px' }}
                mt={2}
                mb={10}
                lineHeight={{ base: '24px', md: '28px' }}
                fontWeight="400"
              >
                How to navigate buying, selling and shopping on Luxim Community
                of traditional fashion enthusiasts can connect, inspire, and
                create opportunities to earn income while reducing clothing
                waste.
              </Text> */}
              <Box>
                {items.map((item) => (
                  <React.Fragment key={item.title}>
                    <NumberedListBox
                      item={item}
                      icon={item.icon}
                      altText="correct icon bullet poin"
                    />
                  </React.Fragment>
                ))}
              </Box>
            </>
            <Box
              display={{ base: 'none', lg: 'flex' }}
              justifyContent={{ base: 'center', lg: 'start' }}
            >
              <AppButton
                title="Watch more"
                theme="brand.primary1"
                color="white"
                mt={10}
              />
            </Box>
          </Box>
          <Box width={{ base: '100%', lg: '55%' }} mt={{ base: 10, lg: 0 }}>
            <video controls width="640" height="360" playsInline style={{
              boxShadow: "-1px 1px 81px 18px rgba(233,237,144,1)"
            }}>
              <source
                src="https://luxim-images.s3.us-east-2.amazonaws.com/videos/Luxim+final+video+MP4.mp4"
                type="video/mp4"
              />
              <track kind="captions" label="English" srcLang="en" />
              Your browser does not support the video tag.
            </video>
          </Box>
        </Box>
        <Box
          display={{ base: 'flex', lg: 'none' }}
          justifyContent={{ base: 'center', lg: 'start' }}
        >
          <AppButton
            title="Watch more"
            theme="brand.primary1"
            color="white"
            mt={10}
          />
        </Box>
      </Wrapper>
    </Box>
  );
};

export default NavigationGuide;
