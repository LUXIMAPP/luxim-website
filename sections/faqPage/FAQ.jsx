import {
  Box,
  Text,
  Accordion,
  AccordionItem,
  AccordionButton,
  useToast,
  AccordionPanel,
} from '@chakra-ui/react';

import Image from 'next/image';
import plusIcon from '../../public/images&svgs/faq/plus-circle.svg';
import minusIcon from '../../public/images&svgs/faq/minus-circle.svg';
import question from './question';

export const useDisplayInfoToast = () => {
  const toast = useToast();
  const displayToastBody = () => {
    toast({
      title: 'Note',
      description: 'This will be available on the launch date.',
      status: 'info',
      position: 'top-right',
      variant: 'left-accent',
      isClosable: true,
    });
  };
  return displayToastBody;
};

const FAQ = () => {
  const displayToastBody = useDisplayInfoToast();
  return (
    <Box maxW={{ base: '90vw', md: '100%', lg: '53vw' }} px={{ base: 0, md: 32, lg: 0 }} margin="0 auto" py={24} mb={{ base: 0, lg: 24 }}>
      <Box textAlign="center">
        <Text fontWeight="600" fontSize={{ base: '24px', lg: '36px' }} letterSpacing="-2%" mb={5} as="h2">
          Frequently asked questions
        </Text>
        <Text fontWeight="400" fontSize={{ base: '18px', lg: '20px' }} color="brand.grey" as="h3">
          Everything you need to know about the product and billing.
        </Text>
      </Box>
      <Box maxWidth="1500px" margin="64px auto 0">
        <Accordion allowMultiple>
          <AccordionItem border="none" my={4}>
            {({ isExpanded }) => (
              <Box bg={isExpanded ? 'brand.lightLemon' : 'transparent'} borderRadius="lg">
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
                    <Box textAlign="left">
                      How do I create an account?
                    </Box>
                  </AccordionButton>
                </Text>
                <AccordionPanel
                  pb={4}
                  display="grid"
                  gridTemplateColumns={{ base: '15% 85%', lg: '10% 90%' }}
                >
                  <Box />
                  <Text>
                    Please click
                    {' '}
                    <Text
                      as="span"
                      onClick={displayToastBody}
                      cursor="pointer"
                      fontWeight="800"
                    >
                      here
                    </Text>
                    {' '}
                    and you will be directed to the app store.

                  </Text>
                </AccordionPanel>
              </Box>
            )}
          </AccordionItem>
          {question.map((item) => (
            <AccordionItem border="none" key={item.question} my={4}>
              {({ isExpanded }) => (
                <Box bg={isExpanded ? 'brand.lightLemon' : 'transparent'} borderRadius="lg">
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
                      <Box textAlign="left">
                        {item.question}
                      </Box>
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
          <AccordionItem border="none" my={4}>
            {({ isExpanded }) => (
              <Box bg={isExpanded ? 'brand.lightLemon' : 'transparent'} borderRadius="lg">
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
                    <Box textAlign="left">
                      How do I buy on Luxim?
                    </Box>
                  </AccordionButton>
                </Text>
                <AccordionPanel
                  pb={4}
                  display="grid"
                  gridTemplateColumns={{ base: '15% 85%', lg: '10% 90%' }}
                >
                  <Text>
                    Click the
                    {' '}
                    <Text
                      as="span"
                      onClick={displayToastBody}
                      cursor="pointer"
                      fontWeight="800"
                    >
                      here
                    </Text>
                    {' '}
                    and create an account in 60 seconds or less  and begin shopping on Luxim
                  </Text>
                </AccordionPanel>
              </Box>
            )}
          </AccordionItem>
        </Accordion>
      </Box>
    </Box>

  );
};

export default FAQ;
