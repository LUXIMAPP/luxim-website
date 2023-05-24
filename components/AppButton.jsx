import { Button, Text } from '@chakra-ui/react';

const AppButton = ({
  children, title, theme, ...rest
}) => (
  <Button
    bg={theme}
    p={6}
    borderRadius="md"
    cursor="pointer"
    {...rest}
  >
    {children || <Text>{title}</Text>}
  </Button>
);

export default AppButton;
