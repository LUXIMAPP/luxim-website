import {
  Box,
  Text,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
} from '@chakra-ui/react';

import Image from 'next/image';
import plusIcon from '../../public/faq/plus-circle.svg';
import minusIcon from '../../public/faq/minus-circle.svg';
import question from './question';

const FAQ = () => (
  <Box maxW="53vw" margin="0 auto" py={24}>
    <Box textAlign="center">
      <Text fontWeight="600" fontSize="36px" letterSpacing="-2%" mb={5}>
        Frequently asked questions
      </Text>
      <Text fontWeight="400" fontSize="20px" color="brand.grey">
        Everything you need to know about the product and billing.
      </Text>
    </Box>
    <Box mt={16}>
      <Accordion allowMultiple>
        {question.map((item) => (
          <AccordionItem border="none" key={item.question} my={4}>
            {({ isExpanded }) => (
              <Box bg={isExpanded ? 'brand.lightLemon' : 'transparent'} borderRadius="md">
                <Text>
                  <AccordionButton
                    _hover={{ bg: 'brand.lightLemon' }}
                    borderRadius="md"
                    display="grid"
                    gridTemplateColumns="10% 90%"
                    py={4}
                  >
                    <Image
                      src={!isExpanded ? plusIcon : minusIcon}
                      alt={`${!isExpanded ? 'plus' : 'minus'} icon`}
                    />
                    <Box textAlign="left">
                      {item.question}
                    </Box>
                  </AccordionButton>
                </Text>
                <AccordionPanel
                  pb={4}
                  display="grid"
                  gridTemplateColumns="10% 90%"
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
