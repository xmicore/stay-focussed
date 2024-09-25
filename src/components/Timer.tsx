import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus, faPlay } from "@fortawesome/free-solid-svg-icons";
import "./Timer.css";
import { useState } from "react";

export default function Timer() {
  // Start with 30 minutes
  const [counter, setCounter] = useState(30);

  const startSession = () => {
    alert(`Session started with ${counter} minutes`);
  };

  const decreaseCounter = () => {
    // Min is 1 minute
    if (counter > 1) {
      setCounter((prev) => prev - 1);
    }
  };

  const increaseCounter = () => {
    // Max is 60 minutes
    if (counter < 60) {
      setCounter((prev) => prev + 1);
    }
  };

  return (
    <>
      <div className="timer outline">
        <div className="timer__controls">
          <button className="timer-control" onClick={decreaseCounter}>
            <FontAwesomeIcon icon={faMinus} />
          </button>
          <span>
            <b>{counter}</b> Minuten
          </span>
          <button className="timer-control" onClick={increaseCounter}>
            <FontAwesomeIcon icon={faPlus} />
          </button>
        </div>
        <button className="timer-play" onClick={startSession}>
          <FontAwesomeIcon icon={faPlay} />
          <span>Fokus</span>
        </button>
      </div>
    </>
  );
}
