import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlay,
  faReply,
  faEyeSlash,
  faBug,
} from "@fortawesome/free-solid-svg-icons";
import "./Fokus.css";
import { useState } from "react";

type FokusProps = {
  duration: number;
};

export default function Fokus({ duration }: FokusProps) {
  const [hideDuration, seHideDuration] = useState(true);

  const toggleHideDuration = () => {
    seHideDuration((prev) => !prev);
  };

  return (
    <>
      <div className="fokus">
        <div className="fokus_duration">
          <span hidden={!hideDuration}>
            <FontAwesomeIcon icon={faBug} />
          </span>
          <span hidden={hideDuration}>{duration} Minuten</span>
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
