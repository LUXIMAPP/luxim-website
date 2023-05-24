import Navbar from './Navbar';
import Footer from './Footer';

const AppShell = ({ children }) => (
  <>
    <Navbar />
    {children}
    <Footer />
  </>
);

export default AppShell;
