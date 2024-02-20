'use client';

import { useEffect } from 'react';
import { query } from 'next/router';

const FacebookPixelEvents = () => {
  const searchParams = query;

  useEffect(() => {
    import('react-facebook-pixel')
      .then((x) => x.default)
      .then((ReactPixel) => {
        ReactPixel.init('619737427023961');
        ReactPixel.pageView();
      });
  }, [searchParams]);

  return null;
};

export default FacebookPixelEvents;
