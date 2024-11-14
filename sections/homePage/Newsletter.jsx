import React, { useState, useEffect } from 'react';
import { Box, Text } from '@chakra-ui/react';
import Wrapper from '../../components/Wrapper';

const Newsletter = () => {
    // const [showNesletter, setNewsletterState] = useState(false);

    // useEffect(() => {
    //     setNewsletterState(true);
    // }, []);

    return (
        <Box
            py={100}
            width="100%"
            borderRadius="0"
            overflowX="hidden"
            bgRepeat="no-repeat"
            bgSize="cover"
            bgImage="others/cta_bg.png"
        >
            <Wrapper
                data-aos="fade-right"
                width={{ base: '100%', lg: '50vw' }}
                px={{ base: 6, md: 36, lg: 20 }}
                py={{ base: 6, md: 36, lg: 20 }}
                marginY="auto"
                marginX="auto"
                style={{
                    textAlign: "center",
                    border: "20px solid #F6F8D3",
                    borderRadius: "15px",
                    background: "#fff"
                }}
            >
                <Text
                    fontWeight="600"
                    fontSize={{ base: '28px', lg: '32px' }}
                    mb={8}
                    as="h2"
                >
                    Stay in the Loop!
                </Text>
                <Text
                    fontWeight={{ base: '500', lg: '400' }}
                    // color="brand.grey"
                    lineHeight="28px"
                    fontSize={{ base: '15px', lg: '18px' }}
                    mb={8}
                >
                    Subscribe to get the latest app updates, fashion tips, and exclusive blog posts delivered right to your inbox.
                </Text>
                <div className="ml-embedded" data-form="TEv6Sb" />
            </Wrapper>
        </Box>
    );
};

export default Newsletter;
