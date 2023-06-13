import { Box, Text } from '@chakra-ui/react';
import Image from 'next/image';
import about from '../../public/homePage/about/about.png';
import Wrapper from '../../components/Wrapper';
import features from './luximFeatures';

export const NumberComp = ({ number }) => (
  <Box
    w="4"
    h="4"
    p={4}
    fontSize="md"
    bg="brand.lemon"
    borderRadius="full"
    display="flex"
    alignItems="center"
    justifyContent="center"
  >
    {number}
  </Box>
);

const About = () => (
  <Box mt={{ sm: 0, lg: 50 }} pt={10} pb={{ sm: 0, lg: 32 }}>
    <Wrapper>
      <Box width={{ sm: 'full', lg: '65%' }} textAlign="start">
        {/* <SectionTitle text="About Us" mb={2} mt={20} /> */}
        <Text
          fontWeight="700"
          fontSize={{ base: '24px', lg: '40px' }}
          lineHeight={{ base: '36px', lg: '60px' }}
          letterSpacing="-2.2%"
          mb={2}
        >
          Explore
          <Text as="span" mx={2} color="brand.secondary">
            Luxim
          </Text>
          Society
        </Text>
        <Text
          fontWeight="400"
          fontSize={{ base: '17px', lg: '20px' }}
          color="brand.grey"
          lineHeight={{ base: '24px', lg: '32px' }}
        >
          Community of traditional fashion enthusiasts can connect, inspire, and
          create opportunities to earn income while reducing clothing waste.
        </Text>
      </Box>
      <Box
        display={{ sm: 'block', lg: 'flex' }}
        flexDirection="row-reverse"
        justifyContent="space-between"
        alignItems="center"
        mt={10}
      >
        <Box width={{ sm: 'full', lg: '50%' }}>
          {features.map((item) => (
            <Box
              key={item.number || item.text}
              display="grid"
              gridTemplateColumns="10% 85%"
              alignItems="center"
              gap={4}
            >
              {item.number && (
                <>
                  <Box width="fit-content" margin="0 auto">
                    <NumberComp number={item.number} />
                  </Box>
                  <Text
                    fontWeight="700"
                    fontSize={{ base: '18px', lg: '20px' }}
                    color="brand.secondary"
                    textAlign="start"
                  >
                    {item.title}
                  </Text>
                </>
              )}
              {item.image && (
                <>
                  <Image src={item.image} alt="line" />
                  <Text textAlign="start">{item.text}</Text>
                </>
              )}
              {item.image === '' && (
                <>
                  <Box />
                  <Text textAlign="start">{item.text}</Text>
                </>
              )}
            </Box>
          ))}
        </Box>
        <Box width={{ sm: 'full', lg: '40%' }} mt={{ base: 6, lg: 0 }}>
          <Box margin="0 auto">
            <Image src={about} alt="about section, a man discussing image" />
          </Box>
        </Box>
      </Box>
    </Wrapper>
  </Box>
);

export default About;
