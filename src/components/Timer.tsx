import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";
import "./Timer.css";

type TimerProps = {
  minutes: number;
};

export default function Timer({ minutes }: TimerProps) {
  const [finished, setFinished] = useState(false);
  const [timerMinutes, setTimerMinutes] = useState(0);
  const [timerrSeconds, setTimerSeconds] = useState(0);

  useEffect(() => {
    const target = new Date(new Date().getTime() + minutes * 60000);
    const interval = setInterval(() => {
      const now = new Date();

      const difference = target.getTime() - now.getTime();

      const nextMinutes = Math.floor(
        (difference % (1000 * 60 * 60)) / (1000 * 60),
      );
      setTimerMinutes(nextMinutes);

      const nextSeconds = Math.floor((difference % (1000 * 60)) / 1000);
      setTimerSeconds(nextSeconds);

      setFinished(nextMinutes <= 0 && nextSeconds <= 0);
    }, 1_000);

    return () => clearInterval(interval);
  }, [minutes]);

  return (
    <>
      {finished ? (
        <div className="timer timer--finished">
          <span>Time for coffee</span>
          <FontAwesomeIcon icon={faCoffee} />
        </div>
      ) : (
        <div className="timer">
          {timerMinutes.toString().padStart(2, "0")}:
          {timerrSeconds.toString().padStart(2, "0")}
        </div>
      )}
    </>
  );
}
