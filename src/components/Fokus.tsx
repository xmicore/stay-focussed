import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlay,
  faReply,
  faEyeSlash,
  faBug,
  faPause,
} from "@fortawesome/free-solid-svg-icons";
import "./Fokus.css";
import { useState, useEffect } from "react";
import Timer from "./Timer";

type FokusProps = {
  duration: number;
};

export default function Fokus({ duration }: FokusProps) {
  const [hideDuration, setHideDuration] = useState(false);

  const toggleHideDuration = () => {
    setHideDuration((prev) => !prev);
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
            <Timer durationInMinutes={timerDuration} />
          </span>
        </div>
        <div className="fokus__controls">
          <button className="fokus__button">
            <FontAwesomeIcon icon={faPlay} />
          </button>
          <button className="fokus__button">
            <FontAwesomeIcon icon={faReply} />
          </button>
          <button className="fokus__button" onClick={toggleHideDuration}>
            <FontAwesomeIcon icon={faEyeSlash} />
          </button>
        </div>
      </div>
    </>
  );
}
