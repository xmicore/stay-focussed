import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus, faPlay } from "@fortawesome/free-solid-svg-icons";
import "./Setup.css";
import { useState } from "react";

type SetupProps = {
  onFokusStart: (duration: number) => void;
};

export default function Setup({ onFokusStart }: SetupProps) {
  // Start with 30 minutes
  const [counter, setCounter] = useState(30);

  const startSession = () => {
    onFokusStart(counter);
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
      <div className="setup">
        <div className="setup__controls">
          <button
            className="setup__button setup__button--control"
            onClick={decreaseCounter}
          >
            <FontAwesomeIcon icon={faMinus} />
          </button>
          <div className="setup__duration">
            <span className="setup__counter">{counter}</span>
            Minuten
          </div>
          <button
            className="setup__button setup__button--control"
            onClick={increaseCounter}
          >
            <FontAwesomeIcon icon={faPlus} />
          </button>
        </div>
        <button
          className="setup__button setup__button--play"
          onClick={startSession}
        >
          <FontAwesomeIcon icon={faPlay} />
          <span>Fokus</span>
        </button>
      </div>
    </>
  );
}
