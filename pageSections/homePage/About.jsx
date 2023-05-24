import { Box, Text } from '@chakra-ui/react';
import Image from 'next/image';
import SectionTitle from '../../components/SectionTitle';
import about from '../../public/homePage/about/about.png';
import line from '../../public/homePage/about/shorterLine.svg';
import Wrapper from '../../components/Wrapper';

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
  <Box mt={50} py={10} id="about">
    <Wrapper>
      <Box width="65%" textAlign="start">
        <SectionTitle text="About Us" mb={2} mt={20} />
        <Text
          fontWeight="700"
          fontSize="40px"
          lineHeight="60px"
          letterSpacing="-2.2%"
          mb={2}
        >
          <Text as="span" color="brand.secondary">
            Luxim
          </Text>
          {' '}
          - social and secure experience
          {' '}
          <br />
          {' '}
          to shop for traditional fashion
        </Text>
        <Text
          fontWeight="400"
          fontSize="20px"
          color="brand.grey"
          lineHeight="32px"
        >
          Community of traditional fashion enthusiasts can connect, inspire, and
          create opportunities to earn income while reducing clothing waste.
        </Text>
      </Box>
      <Box display="flex" justifyContent="space-between" alignItems="center" mt={10}>
        <Box width="40%">
          <Box margin="0 auto">
            <Image src={about} alt="about section, a man discussing image" />
          </Box>
        </Box>
        <Box width="50%">
          {[
            { number: '1', title: 'More than just fashion...' },
            {
              image: line,
              text: 'Sustainability is a core value at Luxim, and we are committed to promoting eco-friendly practices through our platform. We aim to reduce clothing waste and minimize the environmental impact of the fashion industry.',
            },
            { number: '2', title: 'Creating economic opportunities' },
            {
              image: line,
              text: 'Through Luxim, we can preserve our cultural heritage, create economic opportunities, and protect the planet.',
            },
            { number: '3', title: 'Begin....' },
            {
              image: '',
              text: 'Start shopping your favorite custom styles at prices up to 70% off or curate your style by following the closets of your favorite influencers or people in your circle.',
            },
          ].map((item) => (
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
                <Text fontWeight="700" fontSize="20px" color="brand.secondary" textAlign="start">
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
      </Box>
    </Wrapper>
  </Box>
);

export default About;
