import React from 'react';
import { useTimer } from 'react-timer-hook';

function MyTimer({ expiryTimestamp }) {
  const {
    seconds,
    minutes,
    hours,
    days,
  } = useTimer({ expiryTimestamp, onExpire: () => console.warn('onExpire called') });

  const dayTime = days < 10 ? `0${days}` : `${days}`;
  const hourTime = hours < 10 ? `0${hours}` : `${hours}`;
  const minuteTime = minutes < 10 ? `0${minutes}` : `${minutes}`;
  const secondTime = seconds < 10 ? `0${seconds}` : `${seconds}`;

  return (
    <div className="container max-w-3xl mx-auto">
      <div className="flex flex flex-wrap flex-row items-center justify-between">
        <div className="flex items-center mr-7 flex-col flex-nowrap transform transition duration-300 ease-in-out hover:-translate-y-2">
          <span
            className="font-semibold time-elem relative w-20 h-20 xl:w-36 lg:w-32 md:w-24 sm:w-20 xl:h-36 lg:h-32 md:h-24 sm:h-20 shadow-xl flex items-center justify-center mb-5 rounded-lg xl:text-6xl lg:text-5xl md:text-4xl text-3xl"
            id="days"
          >
            {dayTime}
          </span>
          <span className="title">Dana</span>
        </div>

        <div className="flex items-center mr-7 flex-col flex-nowrap transform transition duration-300 ease-in-out hover:-translate-y-2">
          <span
            className="font-semibold time-elem relative w-20 h-20 xl:w-36 lg:w-32 md:w-24 sm:w-20 xl:h-36 lg:h-32 md:h-24 sm:h-20 shadow-xl flex items-center justify-center mb-5 rounded-lg xl:text-6xl lg:text-5xl md:text-4xl text-3xl"
            id="hours"
          >
            {hourTime}
          </span>
          <span className="title">Sati</span>
        </div>

        <div className="flex items-center mr-7 flex-col flex-nowrap transform transition duration-300 ease-in-out hover:-translate-y-2">
          <span
            className="font-semibold time-elem relative w-20 h-20 xl:w-36 lg:w-32 md:w-24 sm:w-20 xl:h-36 lg:h-32 md:h-24 sm:h-20 shadow-xl flex items-center justify-center mb-5 rounded-lg xl:text-6xl lg:text-5xl md:text-4xl text-3xl"
            id="minutes"
          >
            {minuteTime}
          </span>
          <span className="title">Minuta</span>
        </div>

        <div className="flex items-center mr-7 flex-col flex-nowrap transform transition duration-300 ease-in-out hover:-translate-y-2">
          <span
            className="font-semibold time-elem relative w-20 h-20 xl:w-36 lg:w-32 md:w-24 sm:w-20 xl:h-36 lg:h-32 md:h-24 sm:h-20 shadow-xl flex items-center justify-center mb-5 rounded-lg xl:text-6xl lg:text-5xl md:text-4xl text-3xl"
            id="seconds"
          >
            {secondTime}
          </span>
          <span className="title">Sekundi</span>
        </div>

      </div>
    </div>
  );
}

export default function Timer() {
  const time = new Date();
  time.setSeconds(time.getSeconds() + 600); // 10 minutes timer
  return (
    <MyTimer expiryTimestamp={time} />
  );
}