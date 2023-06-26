import { useEffect, useRef } from 'react';

const useCounter = ({ number, symbol }) => {
  const counterRef = useRef(null);

  useEffect(() => {
    const counterElement = counterRef.current;
    const startNumber = 0;
    const endNumber = parseInt(number, 10);
    const duration = 1000; // 1 second
    const range = endNumber - startNumber;
    const increment = endNumber > startNumber ? 1 : -1;
    const stepTime = Math.abs(Math.floor(duration / range));
    let currentNumber = startNumber;

    const timer = setInterval(() => {
      currentNumber += increment;
      counterElement.textContent = symbol ? currentNumber + symbol : currentNumber;

      if (currentNumber === endNumber) {
        clearInterval(timer);
      }
    }, stepTime);

    return () => {
      clearInterval(timer);
    };
  }, [number, symbol]);

  return { counterRef };
};

export default useCounter;
