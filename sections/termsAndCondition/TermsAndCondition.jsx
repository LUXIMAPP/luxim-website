import {
  Box, ListItem, OrderedList, Text,
} from '@chakra-ui/react';
import PageHeader from '../../components/PageHeader';
import Wrapper from '../../components/Wrapper';
import textFile from './textFile';
import { CustomerGrowth } from '../../pages/about';

const TermsAndCondition = () => (
  <Box>
    <PageHeader title="Last updated 16 April 2023" subTitle="LUXIM APP LIMITED TERMS AND CONDITIONS" />
    <Wrapper my={24}>
      <Box textAlign={{ base: 'start', md: 'justify' }}>
        {textFile.map((text) => (
          <>
            <Text fontSize={{ base: '30px', lg: '36px' }} fontWeight="700" lineHeight="44px" mb={5} mt={10} textAlign="start" as="h2">{text.title}</Text>
            <Box>
              {text.text.map((paragraph) => (
                <Text mb={3} dangerouslySetInnerHTML={{ __html: paragraph }} />
              ))}
            </Box>
            {text.sections.map((section) => (
              <>
                <Text fontSize="24px" fontWeight="600" lineHeight="32px" my={5} as="h3">{section.subTitle}</Text>
                {section.text.map((item) => (
                  <Text dangerouslySetInnerHTML={{ __html: item }} />
                ))}
                <Text fontWeight="600" lineHeight="28px" as="h4" mt={4}>{section.bulletHeading}</Text>
                <Box>
                  <OrderedList>
                    {section.bulletPoints.map((point) => (
                      <ListItem lineHeight="28px" mb={2}>{point}</ListItem>
                    ))}
                  </OrderedList>
                </Box>
              </>
            ))}
          </>
        ))}
      </Box>
    </Wrapper>
    <CustomerGrowth />
  </Box>
);

export default TermsAndCondition;
