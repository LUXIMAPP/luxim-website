/* eslint-disable react/no-array-index-key */
import React from 'react';
import {
  Box, ListItem, Stack, Text, UnorderedList,
} from '@chakra-ui/react';
import PageHeader from '../../components/PageHeader';
import Wrapper from '../../components/Wrapper';
import policy from './policy';
import { CustomerGrowth } from '../../pages/about';

const PrivacyPolicy = () => (
  <Box>
    <PageHeader
      title="Last updated: April 16, 2023"
      subTitle="Privacy Policy"
    />
    <Wrapper my={24}>
      <Stack spacing={8}>
        {[
          `This Privacy Policy describes Our policies and procedures on the
          collection, use and disclosure of Your information when You use the
          Service and tells You about Your privacy rights and how the law protects
          You.`,
          `We use Your Personal data to provide and improve the Service. By
          using the Service, You agree to the collection and use of information in
          accordance with this Privacy Policy.`,
        ].map((text, index) => (
          <Text key={index} fontSize="18px" fontWeight="400" lineHeight="30px">
            {text}
          </Text>
        ))}
      </Stack>
      <Box mt={8}>
        {policy.map((item, index) => (
          <Box key={index} mb={10} textAlign={{ base: 'start', md: 'justify' }}>
            <Text
              fontSize={{ base: '30px', lg: '36px' }}
              fontWeight="700"
              lineHeight={{ base: '38px', lg: '44px' }}
              letterSpacing="-0.72px"
              mt={4}
              as="h2"
            >
              {item.title}
            </Text>
            {item.text ? (
              <Text
                my={4}
              // fontSize="18px"
                dangerouslySetInnerHTML={{ __html: item.text }}
              />
            ) : null}
            {item.sections.map((subSection, subIndex) => (
              <Box key={subIndex}>
                {subSection.subTitle ? (
                  <Text
                    fontSize="24px"
                    fontWeight="600"
                    lineHeight="32px"
                    mt={4}
                    as="h3"
                  >
                    {subSection.subTitle}
                  </Text>
                ) : null}

                <Text fontSize="18px" fontWeight="600" lineHeight="28px" as="h4" my={2}>
                  {subSection.heading}
                </Text>
                <Box my={4}>
                  {subSection.children.map((child, childIndex) => (
                    <Box key={childIndex} mb={4}>
                      <Text
                        // fontSize="18px"
                        my={4}
                        fontWeight={
                          child.text === 'Business Transactions'
                          || child.text === 'Law enforcement'
                          || child.text === 'Other legal requirements'
                            ? '800'
                            : null
                        }
                      >
                        {child.text}
                      </Text>
                      <UnorderedList>
                        {child.bulletPoints.map((point, pointIndex) => (
                          <ListItem
                            key={pointIndex}
                            my={4}
                            dangerouslySetInnerHTML={{ __html: point }}
                          />
                        ))}
                      </UnorderedList>
                    </Box>
                  ))}
                </Box>
              </Box>
            ))}
          </Box>
        ))}
      </Box>
    </Wrapper>
    <CustomerGrowth />
  </Box>
);

export default PrivacyPolicy;
