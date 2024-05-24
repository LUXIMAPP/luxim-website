import Wrapper from '../../components/landingPage/Wrapper';
import CallToAction from '../../sections/landingPage/callToAction';
import FAQ from '../../sections/landingPage/faq';
import GetStarted from '../../sections/landingPage/getStarted';
import Hero from '../../sections/landingPage/hero';
import HowToGetStarted from '../../sections/landingPage/howToGetStarted';
import SnapchatPixel from '../../components/SnapchatPixel';

const LandingPage = () => (
  <>
    <SnapchatPixel />
    <Wrapper>
      <Hero />
      <CallToAction />
      <HowToGetStarted />
      <GetStarted />
      <FAQ />
    </Wrapper>
  </>
);

export default LandingPage;
