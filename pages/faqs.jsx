import AppShell from '../components/AppShell';
import FAQ from '../sections/faqPage/FAQ';
import FaqHero from '../sections/faqPage/Hero';
import { CustomerGrowth } from './about';
import OgHead from '../components/OgHead';

const Faqs = () => (
  <>
    <OgHead description="A community-driven app, celebrating Nigeria's traditional fashion, promoting sustainability and economic opportunities." title="Luxim FAQs" />
    <AppShell>
      <FaqHero />
      <FAQ />
      <CustomerGrowth />
    </AppShell>
  </>
);

export default Faqs;
