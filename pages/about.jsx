import { Box, Text } from '@chakra-ui/react';
import Head from 'next/head';
import AppShell from '../components/AppShell';
import AboutStat from '../sections/aboutPage/AboutStat';
import letter from '../sections/aboutPage/aboutLuximLetter';
import AppButton from '../components/AppButton';
import PageHeader from '../components/PageHeader';
import Wrapper from '../components/Wrapper';
import Footer from '../components/Footer';
import FooterCard from '../components/FooterCard';

export const CustomerGrowth = () => (
  <FooterCard textAlign="center">
    <Text fontSize="30px" lineHeight="38px" fontWeight="600" mb={4} as="h4">
      Join over 4,000+ customers already growing with Luxim.
    </Text>
    <Text mb={8} fontSize="18px">Still have questions?</Text>
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
        title="Chat with us"
        color="white"
        theme="brand.primary1"
      />
    </Box>
  </FooterCard>
);

const About = () => (
  <>
    <Head>
      <meta name="description" content="A community-driven app, celebrating Nigeria's traditional fashion, promoting sustainability and economic opportunities." />
      <meta name="title" property="og:title" content="About Luxim" />
      <meta name="type" property="og:type" content="website" />
      <meta
        name="image"
        property="og:image"
        content="https://luxim-images.s3.us-east-2.amazonaws.com/mainLoginImg.webp"
      />
      <meta property="og:description" content="A community-driven app, celebrating Nigeria's traditional fashion, promoting sustainability and economic opportunities." />
      <meta name="author" content="Luxim" />
      <meta property="og:site_name" content="Luxim" />

      {/* Twitter tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="About Luxim" />
      <meta name="twitter:description" content="A community-driven app, celebrating Nigeria's traditional fashion, promoting sustainability and economic opportunities." />
      <meta name="twitter:site" content="@Luxim" />
      <meta name="twitter:creator" content="@Luxim" />
      <meta name="twitter:image:alt" content="Luxim" />
      <meta
        name="twitter:image:src"
        content="https://luxim-images.s3.us-east-2.amazonaws.com/mainLoginImg.webp"
      />
    </Head>
    <AppShell>
      <PageHeader subTitle="What you need to know about Luxim" />
      <AboutStat />
      <Wrapper
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
      </Wrapper>
      <CustomerGrowth />
    </AppShell>
    <Footer isFloatingCardExist />
  </>
);

export default About;
