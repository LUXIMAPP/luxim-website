import { Box, ListItem, UnorderedList } from '@chakra-ui/react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import logo from '../public/navbar/logo.svg';
import play from '../public/navbar/Play.svg';
import AppButton from './AppButton';

const Navbar = () => {
  const router = useRouter();

  return (
    <Box bg="brand.primary1" color="white" py={3}>
      <UnorderedList
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        listStyleType="none"
        margin="0"
      >
        <Box display="flex" gap={8}>
          <Box>
            <Image src={logo} alt="luxim app logo" />
          </Box>
          <Box display="flex" gap={10}>
            {['Home', 'About Us', 'Blog'].map((list) => (
              <ListItem key={list}>
                <Link
                  href={`/${
                    list === 'Home' ? '' : list.toLowerCase().replace(' ', '-')
                  }`}
                >
                  <a
                    className={
                      router.pathname
                      === `/${
                        list === 'Home'
                          ? ''
                          : list.toLowerCase().replace(' ', '-')
                      }`
                        ? 'text-[#D3DB22]'
                        : ''
                    }
                  >
                    {list}
                  </a>
                </Link>
              </ListItem>
            ))}
          </Box>
        </Box>
        <Box display="flex" gap={10} alignItems="center">
          {['FAQs', 'Contact', 'Watch Demo'].map((list, index) => (index === 2 ? (
            <AppButton
              theme="brand.lemon"
              display="flex"
              alignItems="center"
              fontWeight="400"
              gap={3}
            >
              <Image src={play} alt="play icon" />
              <ListItem key={list} color="black">
                {list}
              </ListItem>
            </AppButton>
          ) : (
            <ListItem key={list}>
              <Link href={`/${list.toLowerCase().replace(' ', '-')}`}>
                <a
                  className={
                      router.pathname
                      === `/${list.toLowerCase().replace(' ', '-')}`
                        ? 'active'
                        : ''
                    }
                >
                  {list}
                </a>
              </Link>
            </ListItem>
          )))}
        </Box>
      </UnorderedList>
    </Box>
  );
};

export default Navbar;
