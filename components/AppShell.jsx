/* eslint-disable import/no-extraneous-dependencies */
import { ChevronUpIcon, ChevronDownIcon } from '@chakra-ui/icons';
import { Box } from '@chakra-ui/react';
import { useState, useEffect } from 'react';
import Navbar from './Navbar';
// import Footer from './Footer';

const AppShell = ({ children }) => {
  const [reachedFooter, setReachedFooter] = useState(false);

  const handleScroll = () => {
    const { scrollHeight, clientHeight } = document.documentElement;
    const scrollTop = window.scrollY;

    const footerHeight = window.innerHeight * 0.59;

    if (scrollTop + clientHeight >= scrollHeight - footerHeight) {
      setReachedFooter(true);
    } else {
      setReachedFooter(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  };

  const scrollToBottom = () => {
    const { scrollHeight } = document.documentElement;
    const viewportHeight = window.innerHeight;
    const maxScrollTop = scrollHeight - viewportHeight;
    window.scrollTo({ top: maxScrollTop, left: 0, behavior: 'smooth' });
  };

  return (
    <>
      <Navbar />
      <Box paddingTop={100}>
        {children}
      </Box>
      <Box
        position="fixed"
        bottom="0"
        right="0"
        display="flex"
        flexDirection="column"
        paddingY={3}
      >
        <ChevronUpIcon
          boxSize="2em"
          cursor="pointer"
          onClick={scrollToTop}
          color={reachedFooter ? 'white' : 'black'}
        />
        <ChevronDownIcon
          boxSize="2em"
          cursor="pointer"
          onClick={scrollToBottom}
          color={reachedFooter ? 'white' : 'black'}
        />
      </Box>
    </>
  );
};

export default AppShell;
