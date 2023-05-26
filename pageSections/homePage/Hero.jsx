/* eslint-disable import/no-extraneous-dependencies */
import { Box, Input, Text } from '@chakra-ui/react';
import Image from 'next/image';
import { useState } from 'react';
import axios from 'axios';
import heroImg from '../../public/homePage/hero/hero.png';
import heroImgMobile from '../../public/homePage/hero/heroImgMobile.jpg';
import SectionTitle from '../../components/SectionTitle';
import AppButton from '../../components/AppButton';
import Wrapper from '../../components/Wrapper';

const Hero = () => {
  const [userEmail, setUserEmail] = useState('');
  const joinWaitlist = (e, email) => {
    e.preventDefault();
    axios.post('https://luxim-web.enyata.com//api/v1/user/waitlist', {
      email,
    })
      .then((response) => {
        // Handle successful response
        console.log(response.data);
        setUserEmail('');
      })
      .catch((error) => {
        // Handle error
        console.error(error);
      });
  };
  return (
    <Wrapper showRightPadding={{ base: 6, md: 0 }}>
      <Box display="flex" flexDirection={{ base: 'column', md: 'row' }} alignItems="center" mt={16} mb={12} id="home">
        <Box width={{ base: '100%', md: '50%' }}>
          <Box width={{ base: 'full', md: '70%' }} textAlign="start">
            <SectionTitle text="Welcome to" mb={{ base: 4, md: 8 }} />
            <Text fontSize={{ base: '30px', md: '36px' }} fontWeight="700" lineHeight="48px" mb={{ base: 4, md: 6 }}>
              Virtual marketplace of pre-owned traditional fashion wears — no
              startup costs
            </Text>
            <Text fontWeight="500" color="brand.grey" lineHeight="28px" mb={{ base: 8, md: 16 }}>
              Giving buyers the chance to find high-quality pre-owned clothes while
              providing sellers with a platform to reach a broad audience of
              customers
            </Text>
            <form onSubmit={() => joinWaitlist}>
              <Box display="flex" flexDirection={{ base: 'column', md: 'row' }} gap={4}>
                <Input
                  zIndex="20"
                  placeholder="Enter your email"
                  fontSize="sm"
                  style={{ padding: '0.5rem', height: '3rem' }}
                  onChange={(e) => setUserEmail(e.target.value)}
                />
                <AppButton
                  zIndex="20"
                  theme="brand.primary1"
                  title="Join Waitlist"
                  color="white"
                  border="1px solid transparent"
                  _hover={{ bg: 'transparent', color: 'brand.primary1', border: '1px solid #102816' }}
                  onClick={(e) => joinWaitlist(e, userEmail)}
                  type="submit"
                />
              </Box>
            </form>
          </Box>
        </Box>
        <Box width="50%" zIndex={1} display={{ base: 'none', md: 'block' }}>
          <Image src={heroImg} alt="hero section image" />
        </Box>
        <Box mt={10} display={{ base: 'block', md: 'none' }}>
          <Image src={heroImgMobile} alt="hero section image" />
        </Box>
      </Box>
    </Wrapper>
  );
};

export default Hero;
