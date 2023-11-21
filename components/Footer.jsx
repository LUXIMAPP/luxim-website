/* eslint-disable react/no-unescaped-entities */
import {
  Box, ListItem, Text, UnorderedList,
} from '@chakra-ui/react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import footerLogo from '../public/images&svgs/footer/footer-logo.svg';
import facebook from '../public/images&svgs/footer/Facebook logo.svg';
import twitter from '../public/images&svgs/footer/Twitter logo.svg';
import instagram from '../public/images&svgs/footer/Instagram logo.svg';
import linkedin from '../public/images&svgs/footer/LinkedIn logo.svg';
import youtube from '../public/images&svgs/footer/YouTube logo.svg';
import tiktok from '../public/images&svgs/footer/tiktok-logo.svg';
import Wrapper from './Wrapper';

const Footer = ({ isFloatingCardExist }) => {
  const date = new Date();
  const currentYear = date.getFullYear();
  const router = useRouter();
  return (
    <Box bg="brand.primary1" pb={{ base: 10, lg: 16 }} pt={isFloatingCardExist ? { base: 16, lg: 40 } : { base: 10, lg: 16 }} id="contact">
      <Wrapper>
        <Box
          display="grid"
          gridTemplateColumns={{
            base: 'repeat(2, .5fr)',
            lg: 'repeat(3, 0.5fr)',
          }}
          gap={{ base: 5, lg: 0 }}
          textAlign="start"
          pb={8}
          borderBottom="1px solid white"
          color="white"
        >
          <Box gridColumn={{ base: '1 / 3', lg: '1' }}>
            <Image src={footerLogo} alt="Luxim footer logo" />
            <Text
              fontWeight="400"
              fontSize="14px"
              mt={8}
              display={{ base: 'none', lg: 'block' }}
            >
              32-34 Opebi Road, Ikeja,
              <br />
              Lagos, Nigeria.
            </Text>
          </Box>
          <Box fontSize={{ base: '14px', lg: '16px' }}>
            <UnorderedList listStyleType="none" m={0} spacing={4}>
              {[
                { title: 'Terms and Conditions', link: '/terms-and-conditions' },
                { title: 'Privacy Policy', link: '/privacy-policy' },
              ].map((item) => (
                <ListItem key={item.title}>
                  <Link href={`${item.link}`}>
                    <a
                      className={
                        `${router.asPath === item.link
                          ? 'text-[#D3DB22]'
                          : ''} hover:text-[#D3DB22]`
          }
                    >
                      {item.title}
                    </a>
                  </Link>
                </ListItem>
              ))}
            </UnorderedList>
          </Box>
          <Box fontSize={{ base: '14px', lg: '16px' }}>
            <UnorderedList listStyleType="none" m={0} spacing={4}>
              {[
                { link: '/about', title: 'About' },
                { link: '/faqs', title: 'FAQs' },
                { link: 'https://support.luximapp.com/support/tickets/new', title: 'Contact' },
              ].map((item) => (
                <ListItem _hover={{ color: 'brand.primary2' }} key={item.title}>
                  <Link href={`${item.link}`}>
                    <a
                      target={item?.title === 'Contact' ? '_blank' : '_self'}
                      className={
                        `${router.asPath === item.link
                          ? 'text-[#D3DB22]'
                          : ''} hover:text-[#D3DB22]`
          }
                    >
                      {item.title}
                    </a>
                  </Link>
                </ListItem>
              ))}
            </UnorderedList>
          </Box>
        </Box>
        <Box pt={8}>
          <Box
            display="flex"
            flexDirection={{ base: 'column', lg: 'row' }}
            gap={{ base: 6, lg: 0 }}
            justifyContent="space-between"
            pb={4}
          >
            <Text
              color="brand.lemon"
              fontSize={{ base: '14px', lg: '16px' }}
            >
              {`©${currentYear} Luxim App Limited. All rights reserved`}

            </Text>
            <Box display="flex" gap={4}>
              {[
                { logo: facebook, link: 'https://www.facebook.com/luximapp', alt: 'Facebook icon logo' },
                { logo: twitter, link: 'https://twitter.com/LuximApp', alt: 'Twitter icon logo' },
                { logo: instagram, link: 'https://www.instagram.com/luximapp/', alt: 'Instagram icon logo' },
                { logo: linkedin, link: 'https://www.linkedin.com/company/luxim/', alt: 'LinkedIn icon logo' },
                { logo: tiktok, link: 'https://www.tiktok.com/@luximapp?_t=8fF5PLbbi50&_r=1', alt: 'Tiktok icon logo' },
                { logo: youtube, link: 'https://youtube.com/@LuximApp?si=lAE7Kt8dcGZrQHPP', alt: 'YouTube icon logo' },
              ].map((item) => (
                <a key={item.alt} href={item.link} target="_blank" rel="noreferrer">
                  <Image src={item.logo} alt={item.alt} />
                </a>
              ))}
            </Box>
          </Box>
          <Text
            color="white"
            textAlign="start"
            fontSize="12px"
            lineHeight="18px"
          >
            At Luxim, we're not just about fashion; we're about inspiring style
            and improving the lives of people across our society. For more
            information about our mission, partnership opportunities, or
            customer service inquiries, please email
            {' '}
            <a href="mailto:hello@luximapp.com" style={{ color: '#D3DB22' }}>
              hello@luximapp.com
            </a>
            .
          </Text>
        </Box>
      </Wrapper>
    </Box>
  );
};

export default Footer;
