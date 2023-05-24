import { useEffect, useState } from 'react';

const calculateTimeLeft = () => {
  const difference = +new Date('2023-7-1') - +new Date();
  let timeLeft = {};

  if (difference > 0) {
    timeLeft = {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  }

  return timeLeft;
};

const useCountdown = () => {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
  const {
    days, hours, minutes, seconds,
  } = timeLeft;

  useEffect(() => {
    setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
  });

  return {
    days, hours, minutes, seconds,
  };
};

export default useCountdown;
