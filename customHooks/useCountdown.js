import { useEffect, useState } from 'react';

const calculateTimeLeft = () => {
  const targetDate = new Date('2023-07-01');
  const currentDate = new Date();
  const difference = targetDate.getTime() - currentDate.getTime();
  let timeLeft = {};

  if (difference > 0) {
    timeLeft = {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / (1000 * 60)) % 60),
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
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => {
      clearTimeout(timer);
    };
  }, [timeLeft]);

  return {
    days, hours, minutes, seconds,
  };
};

export default useCountdown;
