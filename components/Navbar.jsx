import { Box, ListItem, UnorderedList } from '@chakra-ui/react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import logo from '../public/navbar/logo.svg';
import play from '../public/navbar/Play.svg';
import AppButton from './AppButton';
import Wrapper from './Wrapper';
import HamburgerMenu from './HamburgerMenu';

const Navbar = () => {
  const router = useRouter();

  return (
    <Box
      bg="brand.primary1"
      color="white"
      py={3}
      position="sticky"
      top={0}
      zIndex="100"
    >
      <Wrapper>
        <UnorderedList
          display="flex"
          alignItems="center"
          justifyContent="space-between"
          listStyleType="none"
          margin="0"
        >
          <Box display="flex" gap={8}>
            <Box width="87.25px" height="auto">
              <Image src={logo} alt="luxim app logo" layout="responsive" />
            </Box>
            <Box display={{ base: 'none', md: 'flex' }} gap={10}>
              {[
                { title: 'Home', link: '/' },
                { title: 'About Us', link: '/#about' },
                { title: 'Blog', link: '/#blog' },
              ].map((list) => (
                <ListItem key={list.title}>
                  <Link href={`${list.link}`}>
                    <a
                      className={
                        `${router.asPath === list.link
                          ? 'text-[#D3DB22]'
                          : ''} hover:text-[#D3DB22]`
          }
                    >
                      {list.title}
                    </a>
                  </Link>
                </ListItem>
              ))}
            </Box>
          </Box>
          <Box display="flex">
            <Box display="flex" gap={10} alignItems="center">
              {[{ title: 'FAQs', link: '/faqs' }, { title: 'Contact', link: '/#contact' }, { title: 'Watch Demo', link: '/#demo' }].map((list, index) => (index === 2 ? (
                <AppButton
                  theme="brand.lemon"
                  display="flex"
                  alignItems="center"
                  fontWeight="400"
                  gap={3}
                  key={list}
                >
                  <Image src={play} alt="play icon" />
                  <Link href={`${list.link}`}>
                    <a className="text-black min-[360px]:text-xs md:text-lg" key={list.title}>{list.title}</a>
                  </Link>
                </AppButton>
              ) : (
                <ListItem key={list} display={{ base: 'none', md: 'flex' }}>
                  <Link href={`${list.link}`}>
                    <a
                      className={
                        `${router.asPath === list.link
                          ? 'text-[#D3DB22]'
                          : ''} hover:text-[#D3DB22]`
          }
                    >
                      {list.title}
                    </a>
                  </Link>
                </ListItem>
              )))}
            </Box>
            <Box display={{ base: 'block', md: 'none' }}><HamburgerMenu /></Box>
          </Box>
        </UnorderedList>
      </Wrapper>
    </Box>
  );
};

export default Navbar;
