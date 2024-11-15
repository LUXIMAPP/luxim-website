import { Box, ListItem, UnorderedList } from '@chakra-ui/react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import logo from '../public/images&svgs/navbar/logo.svg';
import Wrapper from './Wrapper';
import HamburgerMenu from './HamburgerMenu';
import handleScroll from '../utils/handleScroll';

const Navbar = () => {
  const router = useRouter();

  return (
    <Box
      bg="brand.primary1"
      color="white"
      py={{ base: 0, lg: 3 }}
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
              <Link href="/">
                <a>
                  <Image src={logo} alt="luxim app logo" layout="responsive" />
                </a>
              </Link>
            </Box>
            <Box display={{ base: 'none', lg: 'flex' }} gap={10}>
              {[
                { title: 'Home', link: '/' },
                { title: 'About', link: '/about' },
                { title: 'Blog', link: 'https://blog.luximapp.com/' },
              ].map((list) => (
                <ListItem key={list.title} textTransform="uppercase">
                  <Link href={`${list.link}`}>
                    <a
                      className={`${
                        router.asPath === list.link ? 'text-[#D3DB22]' : ''
                      } hover:text-[#D3DB22]`}
                      target={list?.title === 'Blog' ? '_blank' : '_self'}
                    >
                      {list.title}
                    </a>
                  </Link>
                </ListItem>
              ))}
            </Box>
          </Box>
          <Box display="flex" py={3}>
            {' '}
            {/*  remove padding when watch demo is added */}
            <Box display="flex" gap={10} alignItems="center">
              {[
                { title: 'FAQs', link: '/faqs' },
                // { title: 'Watch Demo', link: '/#demo' },
              ].map((list, index) => (index !== 2 ? (
                <ListItem
                  key={list.title}
                  display={{ base: 'none', lg: 'flex' }}
                  textTransform="uppercase"
                >
                  <Link href={`${list.link}`}>
                    <a
                      target={list?.title === 'Contact' ? '_blank' : '_self'}
                      className={`${
                        router.asPath === list.link ? 'text-[#D3DB22]' : ''
                      } hover:text-[#D3DB22]`}
                    >
                      {list.title}
                    </a>
                  </Link>
                </ListItem>
              ) : null))}
              <ListItem _hover={{ color: 'brand.primary2' }} className="hidden lg:block">
                <button type="button" onClick={handleScroll}>
                  CONTACT
                </button>
              </ListItem>
            </Box>
            <Box display={{ base: 'block', lg: 'none' }} width="35px">
              <HamburgerMenu />
            </Box>
          </Box>
        </UnorderedList>
      </Wrapper>
    </Box>
  );
};

export default Navbar;
