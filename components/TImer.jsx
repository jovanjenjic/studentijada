import React from 'react';
import { useTimer } from 'react-timer-hook';
import { motion } from 'framer-motion';

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
      <div className="flex flex-wrap flex-row items-center justify-between">
        <motion.div initial={{ y: 160, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.5 }}>
          <div className="flex items-center mr-7 flex-col flex-nowrap transform transition duration-300 ease-in-out hover:-translate-y-2">
            <span
              className="bg-white font-semibold time-elem relative w-20 h-20 xl:w-32 lg:w-30 md:w-24 sm:w-20 xl:h-32 lg:h-30 md:h-24 sm:h-20 shadow-xl flex items-center justify-center mb-5 rounded-lg xl:text-6xl lg:text-5xl md:text-4xl text-3xl"
              id="days"
            >
              {dayTime}
            </span>
            <span className="title">Dana</span>
          </div>
        </motion.div>
        <motion.div initial={{ y: 120, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.4 }}>
          <div className="flex items-center mr-7 flex-col flex-nowrap transform transition duration-300 ease-in-out hover:-translate-y-2">
            <span
              className="bg-white  font-semibold time-elem relative w-20 h-20 xl:w-32 lg:w-30 md:w-24 sm:w-20 xl:h-32 lg:h-30 md:h-24 sm:h-20 shadow-xl flex items-center justify-center mb-5 rounded-lg xl:text-6xl lg:text-5xl md:text-4xl text-3xl"
              id="hours"
            >
              {hourTime}
            </span>
            <span className="title">Sati</span>
          </div>
        </motion.div>
        <motion.div initial={{ y: 80, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.3 }}>
          <div className="flex items-center mr-7 flex-col flex-nowrap transform transition duration-300 ease-in-out hover:-translate-y-2">
            <span
              className="bg-white  font-semibold time-elem relative w-20 h-20 xl:w-32 lg:w-30 md:w-24 sm:w-20 xl:h-32 lg:h-30 md:h-24 sm:h-20 shadow-xl flex items-center justify-center mb-5 rounded-lg xl:text-6xl lg:text-5xl md:text-4xl text-3xl"
              id="minutes"
            >
              {minuteTime}
            </span>
            <span className="title">Minuta</span>
          </div>
        </motion.div>
        <motion.div initial={{ y: 40, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.2 }}>
          <div className="flex items-center mr-7 flex-col flex-nowrap transform transition duration-300 ease-in-out hover:-translate-y-2">
            <span
              className="bg-white font-semibold time-elem relative w-20 h-20 xl:w-32 lg:w-30 md:w-24 sm:w-20 xl:h-32 lg:h-30 md:h-24 sm:h-20 shadow-xl flex items-center justify-center mb-5 rounded-lg xl:text-6xl lg:text-5xl md:text-4xl text-3xl"
              id="seconds"
            >
              {secondTime}
            </span>
            <span className="title">Sekundi</span>
          </div>
        </motion.div>
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