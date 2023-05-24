import TimerContainer from './TimerContainer';
import useCountdown from '../../customHooks/useCountdown';

const CountDownProper = () => {
  const {
    days, hours, minutes, seconds,
  } = useCountdown();

  return (
    <div>
      {
        (days + hours + minutes + seconds <= 0)
          ? <h1 className="font-germania text-4xl text-[#D3DB22] py-12"> We are live! </h1>
          : (
            <TimerContainer
              days={days}
              hours={hours}
              minutes={minutes}
              seconds={seconds}
            />
          )
      }
    </div>
  );
};

export default CountDownProper;
