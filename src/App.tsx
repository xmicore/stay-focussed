import { useState } from "react";
import "./App.css";
import Setup from "./components/Setup";
import Fokus from "./components/Fokus";

function App() {
  const [fokusMode, setFokusMode] = useState(false);
  const [timerDuration, setTimerDuration] = useState(30);

  const fokus = (duration: number) => {
    setTimerDuration(duration);
    setFokusMode(true);
  };

  const setup = () => {
    setFokusMode(false);
  };

  return (
    <div className="app">
      <h1>Stay Focussed</h1>

      {fokusMode ? (
        <Fokus duration={timerDuration} onSetup={setup} />
      ) : (
        <Setup duration={timerDuration} onFokus={fokus} />
      )}
    </div>
  );
}

export default App;
