import { Box, ListItem, UnorderedList } from '@chakra-ui/react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
// import { useState } from 'react';
import logo from '../public/images&svgs/navbar/logo.svg';
// import AppButton from './AppButton';
import Wrapper from './Wrapper';
import HamburgerMenu from './HamburgerMenu';
// import Play from '../public/navbar/Play';

const Navbar = () => {
  const router = useRouter();
  // const [isHover, setIsHover] = useState(false);

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
                // { title: 'Blog', link: '/#blog' },
              ].map((list) => (
                <ListItem key={list.title} textTransform="uppercase">
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
          <Box display="flex" py={3}>
            {' '}
            {/*  remove padding when watch demo is added */}
            <Box display="flex" gap={10} alignItems="center">
              {[{ title: 'FAQs', link: '/faqs' }, { title: 'Contact', link: '/#contact' }, { title: 'Watch Demo', link: '/#demo' }].map((list, index) => (index !== 2 ? (
                <ListItem key={list} display={{ base: 'none', lg: 'flex' }} textTransform="uppercase">
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
              ) : (null
              // <AppButton
              //   theme="brand.lemon"
              //   display="flex"
              //   alignItems="center"
              //   fontWeight="400"
              //   gap={3}
              //   key={list}
              //   p={{ base: 2, lg: 6 }}
              //   onMouseEnter={() => setIsHover(true)}
              //   onMouseLeave={() => setIsHover(false)}
              //   isHover={isHover}
              // >
              //   <Play color={isHover ? 'white' : '#102816'} />
              //   <Link href={`${list.link}`}>
              //     <a className={`text-${isHover ? 'white' : 'black'}
              // min-[360px]:text-xs lg:text-lg`} key={list.title}>{list.title}</a>
              //   </Link>
              // </AppButton>
              )))}
            </Box>
            <Box display={{ base: 'block', lg: 'none' }} width="35px"><HamburgerMenu /></Box>
          </Box>
        </UnorderedList>
      </Wrapper>
    </Box>
  );
};

export default Navbar;
