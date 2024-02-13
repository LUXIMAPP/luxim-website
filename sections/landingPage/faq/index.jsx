import {
  Accordion, AccordionButton, AccordionItem, AccordionPanel, Box, Text,
} from '@chakra-ui/react';
import Image from 'next/image';
import plusIcon from '../../../public/images&svgs/faq/plus-circle.svg';
import minusIcon from '../../../public/images&svgs/faq/minus-circle.svg';
import question from './questions';

const FAQ = () => (
  <Box
    maxW={{ base: '90vw', md: '100%', lg: '53vw' }}
    px={{ base: 0, md: 32, lg: 0 }}
    margin="0 auto"
    py={24}
    // mb={{ base: 0, lg: 24 }}
  >
    <Box textAlign="center">
      <Text
        fontWeight="800"
        fontSize={{ base: '24px', lg: '48px' }}
        letterSpacing="-2%"
        mb={{ base: 2, lg: 6 }}
        as="h3"
      >
        Frequently asked questions
      </Text>
      <Text
        fontWeight="400"
        fontSize={{ base: '14px', lg: '20px' }}
        color="brand.grey"
        as="h3"
      >
        Everything you need to know about the product.
      </Text>
    </Box>
    <Box maxWidth="1500px" margin="40px auto 0">
      <Accordion allowMultiple>
        {question.map((item) => (
          <AccordionItem border="none" key={item.question} my={4}>
            {({ isExpanded }) => (
              <Box
                bg={isExpanded ? 'brand.lightLemon' : 'transparent'}
                borderRadius="lg"
              >
                <Text>
                  <AccordionButton
                    _hover={{ bg: 'brand.lightLemon' }}
                    borderRadius="lg"
                    display="grid"
                    gridTemplateColumns={{ base: '15% 85%', lg: '10% 90%' }}
                    py={4}
                  >
                    <Image
                      src={!isExpanded ? plusIcon : minusIcon}
                      alt={`${!isExpanded ? 'plus' : 'minus'} icon`}
                    />
                    <Box textAlign="left">{item.question}</Box>
                  </AccordionButton>
                </Text>
                <AccordionPanel
                  pb={4}
                  display="grid"
                  gridTemplateColumns={{ base: '15% 85%', lg: '10% 90%' }}
                >
                  <Box />
                  <Text dangerouslySetInnerHTML={{ __html: item.answer }} />
                </AccordionPanel>
              </Box>
            )}
          </AccordionItem>
        ))}
      </Accordion>
    </Box>
  </Box>
);

export default FAQ;
