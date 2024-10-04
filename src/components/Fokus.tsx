import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlay,
  faReply,
  faEyeSlash,
  faBug,
  faPause,
  faEye,
} from "@fortawesome/free-solid-svg-icons";
import "./Fokus.css";
import { useState, useEffect } from "react";
import Timer from "./Timer";

type FokusProps = {
  duration: number;
  onSetup: () => void;
};

export default function Fokus({ duration, onSetup }: FokusProps) {
  const [hideDuration, setHideDuration] = useState(false);
  const [paused, setPaused] = useState(false);

  const toggleHideDuration = () => {
    setHideDuration((prev) => !prev);
  };

  const togglePause = () => {
    setPaused((prev) => !prev);
  };

  const [timerDuration, setTimerDuration] = useState(0);

  useEffect(() => {
    setTimerDuration(duration);
  }, [duration]);

  return (
    <>
      <div className="fokus">
        <div className="fokus_duration">
          <span hidden={!hideDuration}>
            <FontAwesomeIcon icon={faBug} />
          </span>
          <span hidden={hideDuration}>
            <Timer minutes={timerDuration} paused={paused} />
          </span>
        </div>
        <div className="fokus__controls">
          <button
            className="fokus__button"
            onClick={togglePause}
            title={paused ? "Sitzung fortsetzen" : "Sitzung pausieren"}
          >
            <FontAwesomeIcon icon={paused ? faPlay : faPause} />
          </button>
          <button
            className="fokus__button"
            disabled={!paused}
            title="Sitzung zurücksetzen"
          >
            <FontAwesomeIcon icon={faReply} onClick={onSetup} />
          </button>
          <button
            className="fokus__button"
            onClick={toggleHideDuration}
            title={hideDuration ? "Zeit anzeigen" : "Zeit ausblenden"}
          >
            <FontAwesomeIcon icon={hideDuration ? faEye : faEyeSlash} />
          </button>
        </div>
      </div>
    </>
  );
}
