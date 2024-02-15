/* eslint-disable import/no-extraneous-dependencies */
import { useState } from 'react';
import {
  Box, ListItem, Slide, UnorderedList,
} from '@chakra-ui/react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { Squash as Hamburger } from 'hamburger-react';
import handleScroll from '../utils/handleScroll';

const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  return (
    <Box as="nav" role="navigation">
      <Box id="menuToggle" onClick={() => setIsOpen(!isOpen)}>
        <Box style={{ position: 'relative', zIndex: 2 }}>
          <Hamburger toggled={isOpen} toggle={setIsOpen} size={20} />
        </Box>
        <Slide direction="right" in={isOpen}>
          <UnorderedList id="menu" pt={2} m={0}>
            {[
              { title: 'Home', link: '/' },
              { title: 'About', link: '/about' },
              { title: 'Blog', link: 'https://blog.luximapp.com/' },
              { title: 'FAQs', link: '/faqs' },
            ].map((list) => (
              <ListItem key={list.title} textTransform="uppercase">
                <Link href={`${list.link}`}>
                  <a
                    target={
                      list?.title === 'Contact' || list?.title === 'Blog'
                        ? '_blank'
                        : '_self'
                    }
                    className={`${
                      router.asPath === list.link ? 'text-[#D3DB22]' : ''
                    } hover:text-[#D3DB22] text-[16px]`}
                  >
                    {list.title}
                  </a>
                </Link>
              </ListItem>
            ))}
            <ListItem _hover={{ color: 'brand.primary2' }} className="block lg:hidden">
              <button type="button" onClick={handleScroll} className="text-[16px]">
                CONTACT
              </button>
            </ListItem>
          </UnorderedList>
        </Slide>
      </Box>
    </Box>
  );
};

export default HamburgerMenu;
