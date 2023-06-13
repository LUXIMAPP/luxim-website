import AppShell from '../components/AppShell';
import FAQ from '../pageSections/faqPage/FAQ';
import FaqHero from '../pageSections/faqPage/Hero';
import { CustomerGrowth } from './about';

const Faqs = () => (
  <AppShell>
    <FaqHero />
    <FAQ />
    <CustomerGrowth />
  </AppShell>
);

export default Faqs;
