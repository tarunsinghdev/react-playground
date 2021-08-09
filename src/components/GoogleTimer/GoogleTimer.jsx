import React, { useEffect, useState } from 'react';

import './GoogleTimer.css';

const GoogleTimer = () => {
  const [minutes, setMinutes] = useState(5);
  const [seconds, setSeconds] = useState(0);
  const [clicked, setClicked] = useState(false);

  useEffect(() => {
    if (!clicked) return;
    let myInterval = setInterval(() => {
      if (seconds > 0) {
        setSeconds((prevSec) => prevSec - 1);
      }
      if (seconds === 0) {
        if (minutes === 0) {
          clearInterval(myInterval);
        } else {
          setMinutes((prevMin) => prevMin - 1);
          setSeconds(59);
        }
      }
    }, 1000);
    return () => clearInterval(myInterval);
  }, [seconds, minutes, clicked]);

  const startStopTimerHandler = () => {
    if (clicked) {
      setClicked(false);
      return;
    }
    setClicked(true);
  };

  const resetTimerHandler = () => {
    setClicked(false);
    setMinutes(5);
    setSeconds(0);
  };

  return (
    <div className="googletimer">
      <h1 className="googletimer__header">Timer </h1>
      <h1>
        {`${minutes}m`}:{seconds < 10 ? `0${seconds}s` : `${seconds}s`}
      </h1>
      <button onClick={startStopTimerHandler}>
        {clicked ? 'Stop' : 'Start'}
      </button>
      <button onClick={resetTimerHandler}>Reset</button>
    </div>
  );
};

export default GoogleTimer;
