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
      <Box width={{ sm: 'full', lg: '50%' }} textAlign="start">
        <Text
          fontWeight="700"
          fontSize={{ base: '24px', lg: '40px' }}
          lineHeight={{ base: '36px', lg: '60px' }}
          letterSpacing="-2.2%"
          display={{ base: 'none', md: 'block' }}
          mb={2}
          as="h2"
        >
          Explore
          <Text as="span" mx={2} color="brand.secondary">
            Luxim
          </Text>
          Society
        </Text>
        <Text
          fontWeight="700"
          fontSize={{ base: '24px', lg: '40px' }}
          lineHeight={{ base: '36px', lg: '60px' }}
          letterSpacing="-2.2%"
          display={{ base: 'block', md: 'none' }}
          mb={2}
        >
          <Text as="span" mr={2} color="brand.secondary">
            Luxim
          </Text>
          -  social and secure experience to shop for traditional fashion
        </Text>
        <Text
          fontWeight="400"
          fontSize={{ base: '17px', lg: '18px' }}
          color="brand.grey"
          lineHeight={{ base: '24px', lg: '32px' }}
          display={{ base: 'none', md: 'block' }}
        >
          Luxim is more than just a marketplace, luxim is a community creating
          opportunities to earn income, inspire others through thier unique
          style and reduce clothing waste along the way
        </Text>
        <Text
          fontWeight="400"
          fontSize={{ base: '17px', lg: '18px' }}
          color="brand.grey"
          lineHeight={{ base: '24px', lg: '32px' }}
          display={{ base: 'block', md: 'none' }}

        >
          Community of traditional fashion enthusiasts can connect, inspire, and
          create opportunities to earn income while reducing clothing waste.
        </Text>
      </Box>
      <Box
        display={{ sm: 'block', lg: 'flex' }}
        flexDirection="row-reverse"
        justifyContent="space-between"
        mt={10}
      >
        <Box width={{ sm: 'full', lg: '50%' }}>
          {features.map((item) => (
            <Box
              key={item.number || item.text}
              display="grid"
              gridTemplateColumns="10% 85%"
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
                    as="h3"
                  >
                    {item.title}
                  </Text>
                </>
              )}
              {item.image && (
                <>
                  <Image src={item.image} alt="line" />
                  <Text textAlign="start" mb={8} mt={2}>
                    {item.text}
                  </Text>
                </>
              )}
              {item.image === '' && (
                <>
                  <Box />
                  <Text textAlign="start" mb={8} mt={2}>
                    {item.text}
                  </Text>
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
