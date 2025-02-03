import { useState } from "react";

import "./App.css";
import CountdownTimer from "./Countdown";

function App() {
  return (
    <>
      <CountdownTimer />
    </>
  );
}

export default App;

/*
    When the page is first loaded, the counter displays 5 minutes (i.e. 5:00)
    When the user clicks "Start", the counter starts counting down.
    When the user clicks "Stop", the timer should stop elapsing time.
    When the user clicks "Reset", the timer should be reset to 5 minutes again
  */
