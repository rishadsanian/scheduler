import { useState } from "react";

const useVisualMode = (initialMode) => {
  // const [mode, setMode] = useState(initialMode);
  const [history, setHistory] = useState([initialMode]);
  console.log(history);

  const transition = (newMode, replace = false) => {
    // setMode(newMode);
    !replace
      ? //happy path add new mode to history
        setHistory((prev) => [...prev, newMode])
      : //takes out the last history mode and replaces with newmode
        setHistory((prev) => [...prev.slice(0, prev.length - 1), newMode]);
  };

  const back = () => {
    if (history.length > 1) {
      setHistory((prev) => [...prev.slice(0, prev.length - 1)]);
    }
  };
  return { mode: history[history.length - 1], transition, back };
};

export default useVisualMode;
