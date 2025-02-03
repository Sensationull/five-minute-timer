import { useCountdown } from "./hooks/useCountdown";

const CountdownTimer = () => {
  /*
        Render 5:00 using js
            evaluate the Date Object and what it returns
        Add button for start
        Add button for reset
        Add button for stop
    */

  const { minutes, seconds, startTimer, stopTimer, resetTimer } =
    useCountdown();

  return (
    <>
      <div>{minutes}</div>
      <div>{seconds}</div>
      <button onClick={startTimer}>Start</button>
      <button onClick={stopTimer}>Stop</button>
      <button onClick={resetTimer}>Reset</button>
    </>
  );
};

export default CountdownTimer;
