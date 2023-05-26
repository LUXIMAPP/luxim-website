/* eslint-disable react/no-unescaped-entities */
import {
  Box, ListItem, Text, UnorderedList,
} from '@chakra-ui/react';
import Image from 'next/image';
import footerLogo from '../public/footer/footer-logo.svg';
import facebook from '../public/footer/Facebook logo.svg';
import twitter from '../public/footer/Twitter logo.svg';
import instagram from '../public/footer/Instagram logo.svg';
import linkedin from '../public/footer/LinkedIn logo.svg';
import youtube from '../public/footer/YouTube logo.svg';
import Wrapper from './Wrapper';

const Footer = () => {
  const date = new Date();
  const currentYear = (date.getFullYear());
  return (
    <Box bg="brand.primary1" pt={20} pb={16} id="contact">
      <Wrapper>
        <Box
          display="grid"
          gridTemplateColumns={{ base: 'repeat(2, .5fr)', md: 'repeat(3, 0.5fr)' }}
          gap={{ base: 5, md: 0 }}
          textAlign="start"
          pb={8}
          borderBottom="1px solid white"
          color="white"
        >
          <Box gridColumn={{ base: '1 / 3', md: '1' }}>
            <Image src={footerLogo} alt="Luxim footer logo" />
            <Text fontWeight="400" fontSize="14px" mt={8} display={{ base: 'none', md: 'block' }}>
              320, Agege Motorways, Papa-Ajao , Muhsin,
              <br />
              Lagos, Nigeria.
            </Text>
          </Box>
          <Box fontSize={{ base: '14px', md: '16px' }}>
            <Text fontWeight="600" mb={4}>
              Legal
            </Text>
            <UnorderedList listStyleType="none" m={0} spacing={4}>
              {['Terms and Conditions', 'Privacy Policy', 'Return Policies'].map(
                (item) => (
                  <ListItem _hover={{ color: 'brand.primary2' }} key={item}>
                    <a href="#">{item}</a>
                  </ListItem>
                ),
              )}
            </UnorderedList>
          </Box>
          <Box fontSize={{ base: '14px', md: '16px' }}>
            <Text fontWeight="600" mb={4}>
              Others
            </Text>
            <UnorderedList listStyleType="none" m={0} spacing={4}>
              {['About Us', 'FAQs', 'Contact'].map((item) => (
                <ListItem _hover={{ color: 'brand.primary2' }} key={item}>
                  <a href="#">{item}</a>
                </ListItem>
              ))}
            </UnorderedList>
          </Box>
        </Box>
        <Box pt={8}>
          <Box display="flex" flexDirection={{ base: 'column', md: 'row' }} gap={{ base: 6, md: 0 }} justifyContent="space-between" pb={4}>
            <Text color="brand.lemon" fontSize={{ base: '14px', md: '16px' }}>{`©${currentYear} Luxim Inc. All rights reserved`}</Text>
            <Box display="flex" gap={4}>
              {[
                { logo: facebook, link: '#', alt: 'Facebook icon logo' },
                { logo: twitter, link: '#', alt: 'Twitter icon logo' },
                { logo: instagram, link: '#', alt: 'Instagram icon logo' },
                { logo: linkedin, link: '#', alt: 'LinkedIn icon logo' },
                { logo: youtube, link: '#', alt: 'YouTube icon logo' },
              ].map((item) => (
                <a key={item.a} href={item.link}>
                  <Image src={item.logo} alt={item.alt} />
                </a>
              ))}
            </Box>
          </Box>
          <Text color="white" textAlign="start" fontSize="12px" lineHeight="18px">
            At Luxim, we're not just about fashion; we're about inspiring style
            and improving the lives of people across our society. For more
            information about our mission, partnership opportunities, or customer
            service inquiries, please email
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
