import React, { useEffect, useState } from 'react';
import NumberBox from './NumberBox';

const TimerContainer = ({
  days, hours, minutes, seconds, setSeconds, setMinutes, setHours, setDays,
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
  }, [seconds, days, minutes, hours, setSeconds, setMinutes, setHours, setDays]);

  return (

    <div className="text-white font-germania rounded-xl">
      <div className="grid grid-cols-2 gap-1 py-0 px-10 md:flex md:items-center md:justify-between rounded-xl md:px-6 md:py-8 ">
        <NumberBox num={days} unit="Days" flip={daysFlip} />
        <span className=" hidden text-5xl -mt-8 md:inline-block md:text-7xl font-normal text-white">:</span>
        <NumberBox num={hours} unit="Hours" flip={hoursFlip} />
        <span className="hidden text-5xl -mt-8 md:inline-block md:text-7xl font-normal text-white">:</span>
        <NumberBox num={minutes} unit="Minutes" flip={minutesFlip} />
        <span className="hidden text-5xl -mt-8 md:inline-block md:text-7xl font-normal text-white">:</span>
        <NumberBox num={seconds} unit="Seconds" flip={secondsFlip} />
      </div>

    </div>
  );
};

export default TimerContainer;
