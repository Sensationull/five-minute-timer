import { useEffect, useRef, useState } from "react";

const useCountdown = () => {
  const initialTime = 300;

  const [timer, setTimer] = useState(initialTime);
  const [start, setStart] = useState(false);
  const firstStart = useRef(true);
  const tick = useRef(0);

  useEffect(() => {
    if (firstStart.current) {
      firstStart.current = !firstStart.current;
      return;
    }

    if (start) {
      tick.current = setInterval(() => {
        setTimer((prevTime) => prevTime - 1);
      }, 1000);
    } else {
      clearInterval(tick.current);
    }

    return () => clearInterval(tick.current);
  });

  const startTimer = () => {
    setStart(true);
  };
  const stopTimer = () => {
    setStart(false);
  };
  const resetTimer = () => {
    setStart(false);
    setTimer(initialTime);
  };

  const minutes = Math.floor((timer % 3600) / 60);
  const seconds = timer % 60;

  return { minutes, seconds, startTimer, stopTimer, resetTimer };
};

export { useCountdown };
