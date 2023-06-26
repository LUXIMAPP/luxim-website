import { Box, Text } from '@chakra-ui/react';
import AppShell from '../components/AppShell';
import AboutHero from '../sections/aboutPage/AboutHero';
import AboutStat from '../sections/aboutPage/AboutStat';
import letter from '../sections/aboutPage/aboutLuximLetter';
import FooterClosure from '../components/FooterClosure';
import AppButton from '../components/AppButton';
import OgHead from '../components/OgHead';

export const CustomerGrowth = () => (
  <FooterClosure textAlign="center">
    <Text fontSize="30px" lineHeight="38px" fontWeight="600" mb={4} as="h4">
      Still have questions?
    </Text>
    <Text mb={8}>Join over 4,000+ customers already growing with Luxim.</Text>
    <Box
      display="flex"
      gap={3}
      justifyContent="center"
      flexDirection={{ base: 'column', md: 'row' }}
    >
      <a href="mailto:hello@luximapp.com">
        <AppButton
          color="black"
          theme="white"
          width="100%"
          boxShadow="0px 1px 2px rgba(16, 24, 40, 0.05)"
          title="Email us"
        />
      </a>
      <AppButton
        title="Chat to our team"
        color="white"
        theme="brand.primary1"
      />
    </Box>
  </FooterClosure>
);

const About = () => (
  <>
    <OgHead description="A community-driven app, celebrating Nigeria's traditional fashion, promoting sustainability and economic opportunities." title="About Luxim" />
    <AppShell>
      <AboutHero />
      <AboutStat />
      <Box
        width={{ base: '100%', lg: '50vw' }}
        px={{ base: 6, md: 36, lg: 0 }}
        marginY={{ base: 16, md: 24 }}
        marginX="auto"
        fontSize={{ base: '16px', md: '18px' }}
        lineHeight="28px"
        mb={20}
      >
        {letter.map((paragraph) => (
          <Text mb={8} textAlign="justify" key={paragraph}>
            {paragraph}
          </Text>
        ))}
        <Text>Fumnanya and Mary,</Text>
        <Text> Co-Founders of Luxim.</Text>
      </Box>
      <CustomerGrowth />
    </AppShell>
  </>
);

export default About;
