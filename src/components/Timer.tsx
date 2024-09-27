import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";
import "./Timer.css";

type TimerProps = {
  durationInMinutes: number;
};

export default function Timer({ durationInMinutes }: TimerProps) {
  const [finished, setFinished] = useState(false);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const target = new Date(new Date().getTime() + durationInMinutes * 60000);
    const interval = setInterval(() => {
      const now = new Date();

      const difference = target.getTime() - now.getTime();

      const nextMinutes = Math.floor(
        (difference % (1000 * 60 * 60)) / (1000 * 60),
      );
      setMinutes(nextMinutes);

      const nextSeconds = Math.floor((difference % (1000 * 60)) / 1000);
      setSeconds(nextSeconds);

      setFinished(nextMinutes <= 0 && nextSeconds <= 0);
    }, 1_000);

    return () => clearInterval(interval);
  }, [durationInMinutes]);

  return (
    <>
      {finished ? (
        <div className="timer timer--finished">
          <span>Time for coffee</span>
          <FontAwesomeIcon icon={faCoffee} />
        </div>
      ) : (
        <div className="timer">
          {minutes.toString().padStart(2, "0")}:
          {seconds.toString().padStart(2, "0")}
        </div>
      )}
    </>
  );
}
