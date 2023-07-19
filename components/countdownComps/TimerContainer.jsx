import React, { useEffect, useState } from 'react';
import { Box, Text } from '@chakra-ui/react';
import NumberBox from './NumberBox';

const TimerContainer = ({
  days,
  hours,
  minutes,
  seconds,
  setSeconds,
  setMinutes,
  setHours,
  setDays,
}) => {
  const [daysFlip, setDaysFlip] = useState(false);
  const [hoursFlip, setHoursFlip] = useState(false);
  const [minutesFlip, setMinutesFlip] = useState(false);
  const [secondsFlip, setSecondsFlip] = useState(false);

  useEffect(() => {
    if (seconds <= 0 && minutes <= 0 && hours <= 0 && days <= 0) {
      setDaysFlip(false);
      setHoursFlip(false);
      setMinutesFlip(false);
      setSecondsFlip(false);
    }

    if (seconds === 0) {
      setSecondsFlip(false);
      setMinutesFlip(true);
    }

    if (minutes === 0) {
      setMinutesFlip(false);
      setHoursFlip(true);
    }

    if (hours === 0) {
      setHoursFlip(false);
      if (days !== 0) {
        setDaysFlip(true);
      }
    }
  }, [
    seconds,
    days,
    minutes,
    hours,
    setSeconds,
    setMinutes,
    setHours,
    setDays,
  ]);

  return (
    <Box
      width="fit-content"
      m="0 auto"
      bg="white"
      pl={{ base: 3, lg: 32 }}
      pr={{ base: 6, lg: 32 }}
    >
      <Text
        color="black"
        textAlign="center"
        fontSize={{ base: '18px', lg: '20px' }}
      >
        Countdown to Launching
      </Text>
      <Box
        className="text-black rounded-xl"
        fontWeight="700"
        fontSize={{ base: '20px', lg: '32px' }}
        lineHeight="40.32px"
        display="flex"
        justifyContent="center"
      >
        {[
          { num: days, unit: 'Days', flip: daysFlip.toString() },
          { num: hours, unit: 'Hours', flip: hoursFlip.toString() },
          { num: minutes, unit: 'Minutes', flip: minutesFlip.toString() },
          { num: seconds, unit: 'Seconds', flip: secondsFlip.toString() },
        ].map((item, index) => (
          <Box
            key={item.unit}
            display="grid"
            gridTemplateColumns={index !== 3 ? 'repeat(2, .2fr)' : '.1fr'}
            gridTemplateRows="repeat(2, .5fr)"
            alignItems="center"
          >
            <Box display="flex" flexDirection="column" justifyContent="center">
              <Box
                display="flex"
                alignItems="center"
                width={{ base: '15vw', md: '8vw', lg: '4vw' }}
              >
                <NumberBox num={item.num} flip={item.flip} />
              </Box>
            </Box>
            {index !== 3 ? <Text>:</Text> : null}
            <Text
              className="text-black"
              textAlign="center"
              fontSize="12px"
              fontWeight="400"
              lineHeight="15.12px"
            >
              {item.unit}
            </Text>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default TimerContainer;
