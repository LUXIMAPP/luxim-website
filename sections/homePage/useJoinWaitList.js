import axios from 'axios';
import { useToast } from '@chakra-ui/react';
import { useState } from 'react';

const useJoinWaitList = (setUserEmail) => {
  const toast = useToast();
  const [loader, setLoader] = useState(false);
  const BASE_URL = process.env.NEXT_PUBLIC_LUXIM_PRODUCTION_BASEURL;

  const onClick = (e, email) => {
    e.preventDefault();
    setLoader(true);
    axios
      .post(`${BASE_URL}/user/waitlist`, {
        email,
      })
      .then((response) => {
        setLoader(false);
        toast({
          title: 'Congratulations',
          description: response?.data?.message,
          position: 'top-right',
          variant: 'left-accent',
          status: 'success',
          isClosable: true,
        });
        setUserEmail('');
      })
      .catch((error) => {
        setLoader(false);
        toast({
          title: 'Error',
          description: error?.response?.data?.message ?? error?.message,
          position: 'top-right',
          variant: 'left-accent',
          status: 'error',
          isClosable: true,
        });
      });
  };
  return { onClick, loader };
};

export default useJoinWaitList;
