import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const END_TIME = "10 24 2022";

const calcTime = () => {
  let endTime = new Date(END_TIME);
  endTime = Date.parse(endTime) / 1000;

  let now = new Date();
  now = Date.parse(now) / 1000;

  const timeLeft = endTime - now;

  let days = Math.floor(timeLeft / 86400);
  let hours = Math.floor((timeLeft - days * 86400) / 3600);
  let minutes = Math.floor((timeLeft - days * 86400 - hours * 3600) / 60);
  let seconds = Math.floor(
    timeLeft - days * 86400 - hours * 3600 - minutes * 60
  );
  if (days < 0) {
    hours = 0;
    minutes = 0;
    seconds = 0;
    days = 0;
  }
  return {
    days,
    hours,
    minutes,
    seconds,
  };
};

const makeTimer = (updateTime) => () => {
  const { days, hours, minutes, seconds } = calcTime();

  // case when days are negative
  if (days < 0) {
    return;
  }
  updateTime(() => ({ hours, minutes, seconds, days }));
};

function MyTimer() {
  const [time, setTime] = useState();

  useEffect(() => {
    const interval = setInterval(makeTimer(setTime), 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  const dayTime = time?.days < 10 ? `0${time?.days}` : `${time?.days}`;
  const hourTime = time?.hours < 10 ? `0${time?.hours}` : `${time?.hours}`;
  const minuteTime =
    time?.minutes < 10 ? `0${time?.minutes}` : `${time?.minutes}`;
  const secondTime =
    time?.seconds < 10 ? `0${time?.seconds}` : `${time?.seconds}`;

  return (
    <div className="container max-w-3xl mx-auto">
      <div className="flex flex-wrap flex-row items-center justify-evenly">
        {!time ? null : (
          <>
            <motion.div
              initial={{ y: 160, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              <div className="flex items-center flex-col flex-nowrap transform transition duration-300 ease-in-out hover:-translate-y-2">
                <span
                  className="bg-white font-semibold time-elem relative w-16 h-16 2xl:w-32 lg:w-30 md:w-24 sm:w-20 2xl:h-32 lg:h-30 md:h-24 sm:h-20 shadow-xl flex items-center justify-center mb-2 xl:mb-3 rounded-lg 2xl:text-6xl xl:text:5xl lg:text-4xl md:text-3xl text-3xl"
                  id="days"
                >
                  {dayTime}
                </span>
                <span className="title">Dana</span>
              </div>
            </motion.div>
            <motion.div
              initial={{ y: 120, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              <div className="flex items-center flex-col flex-nowrap transform transition duration-300 ease-in-out hover:-translate-y-2">
                <span
                  className="bg-white  font-semibold time-elem relative w-16 h-16 2xl:w-32 lg:w-30 md:w-24 sm:w-20 2xl:h-32 lg:h-30 md:h-24 sm:h-20 shadow-xl flex items-center justify-center mb-2 xl:mb-3 rounded-lg 2xl:text-6xl xl:text:5xl lg:text-4xl md:text-3xl text-3xl"
                  id="hours"
                >
                  {hourTime}
                </span>
                <span className="title">Sati</span>
              </div>
            </motion.div>
            <motion.div
              initial={{ y: 80, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              <div className="flex items-center flex-col flex-nowrap transform transition duration-300 ease-in-out hover:-translate-y-2">
                <span
                  className="bg-white  font-semibold time-elem relative w-16 h-16 2xl:w-32 lg:w-30 md:w-24 sm:w-20 2xl:h-32 lg:h-30 md:h-24 sm:h-20 shadow-xl flex items-center justify-center mb-2 xl:mb-3 rounded-lg 2xl:text-6xl xl:text:5xl lg:text-4xl md:text-3xl text-3xl"
                  id="minutes"
                >
                  {minuteTime}
                </span>
                <span className="title">Minuta</span>
              </div>
            </motion.div>
            <motion.div
              initial={{ y: 40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              <div className="flex items-center flex-col flex-nowrap transform transition duration-300 ease-in-out hover:-translate-y-2">
                <span
                  className="bg-white font-semibold time-elem relative w-16 h-16 2xl:w-32 lg:w-30 md:w-24 sm:w-20 2xl:h-32 lg:h-30 md:h-24 sm:h-20 shadow-xl flex items-center justify-center mb-2 xl:mb-3 rounded-lg 2xl:text-6xl xl:text:5xl lg:text-4xl md:text-3xl text-3xl"
                  id="seconds"
                >
                  {secondTime}
                </span>
                <span className="title">Sekundi</span>
              </div>
            </motion.div>
          </>
        )}
      </div>
    </div>
  );
}

export default MyTimer;
