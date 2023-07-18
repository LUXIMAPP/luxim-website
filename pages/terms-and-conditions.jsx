import Head from 'next/head';
import AppShell from '../components/AppShell';
import TermsAndCondition from '../sections/termsAndCondition/TermsAndCondition';
import Footer from '../components/Footer';

const TermsAndConditionMain = () => (
  <>
    <Head>
      <meta
        name="description"
        content="A community-driven app, celebrating Nigeria's traditional fashion, promoting sustainability and economic opportunities."
      />
      <meta name="title" property="og:title" content="Luxim Terms and Conditions" />
      <meta name="type" property="og:type" content="website" />
      <meta
        name="image"
        property="og:image"
        content="https://luxim-images.s3.us-east-2.amazonaws.com/mainLoginImg.webp"
      />
      <meta
        property="og:description"
        content="A community-driven app, celebrating Nigeria's traditional fashion, promoting sustainability and economic opportunities."
      />
      <meta name="author" content="Luxim" />
      <meta property="og:site_name" content="Luxim" />

      {/* Twitter tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Luxim Terms and Conditions" />
      <meta
        name="twitter:description"
        content="A community-driven app, celebrating Nigeria's traditional fashion, promoting sustainability and economic opportunities."
      />
      <meta name="twitter:site" content="@Luxim" />
      <meta name="twitter:creator" content="@Luxim" />
      <meta name="twitter:image:alt" content="Luxim" />
      <meta
        name="twitter:image:src"
        content="https://luxim-images.s3.us-east-2.amazonaws.com/mainLoginImg.webp"
      />
    </Head>
    <AppShell>
      <TermsAndCondition />
    </AppShell>
    <Footer isFloatingCardExist />
  </>
);

export default TermsAndConditionMain;
