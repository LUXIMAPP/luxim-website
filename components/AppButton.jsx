import { Button, Text } from '@chakra-ui/react';

const AppButton = ({
  children, title, color, theme, isLoading, ...rest
}) => (
  <Button
    bg={theme}
    color={color}
    p={6}
    borderRadius="md"
    cursor="pointer"
    border="1px solid transparent"
    _hover={{
      bg: theme === 'white' ? 'white' : 'transparent',
      color: theme === 'white' ? 'black' : theme,
      border: '1px solid #102816',
    }}
    isLoading={isLoading}
    {...rest}
  >
    {children || <Text>{title}</Text>}
  </Button>
);

export default AppButton;
