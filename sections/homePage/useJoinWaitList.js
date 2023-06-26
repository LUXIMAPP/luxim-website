import axios from 'axios';
import { useToast } from '@chakra-ui/react';
import { useState } from 'react';

const useJoinWaitList = (setUserEmail) => {
  const toast = useToast();
  const [loader, setLoader] = useState(false);

  const onClick = (e, email) => {
    e.preventDefault();
    setLoader(true);
    axios
      .post('https://luxim-api.enyata.com/api/v1/user/waitlist', {
        email,
      })
      .then((response) => {
        setLoader(false);
        toast({
          title: response?.data?.message,
          position: 'top-right',
          status: 'success',
          isClosable: true,
        });
        setUserEmail('');
      })
      .catch((error) => {
        setLoader(false);
        toast({
          title: error?.response?.data?.message,
          position: 'top-right',
          status: 'error',
          isClosable: true,
        });
      });
  };
  return { onClick, loader };
};

export default useJoinWaitList;
