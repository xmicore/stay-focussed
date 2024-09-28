import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";
import "./Timer.css";

type TimerProps = {
  minutes: number;
  paused: boolean;
};

export default function Timer({ minutes, paused }: TimerProps) {
  const [finished, setFinished] = useState(false);
  const [timerMinutes, setTimerMinutes] = useState(0);
  const [timerSeconds, setTimerSeconds] = useState(0);

  const [target, setTarget] = useState(new Date());

  const tick = () => {
    if (paused) {
      return;
    }

    const now = new Date();

    const difference = target.getTime() - now.getTime();

    const nextMinutes = Math.floor(
      (difference % (1000 * 60 * 60)) / (1000 * 60),
    );
    setTimerMinutes(nextMinutes);

    const nextSeconds = Math.floor((difference % (1000 * 60)) / 1000);
    setTimerSeconds(nextSeconds);

    setFinished(nextMinutes <= 0 && nextSeconds <= 0);
  };

  useEffect(() => {
    setTarget((prev) => new Date(new Date().getTime() + minutes * 60000));
  }, [minutes]);

  useEffect(() => {
    const now = new Date();
    const newTarget =
      now.getTime() + timerMinutes * 60 * 1000 + timerSeconds * 1000;
    setTarget((pev) => new Date(newTarget));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [paused]);

  useEffect(() => {
    tick();
    const interval = setInterval(() => {
      tick();
    }, 1_000);

    return () => clearInterval(interval);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [target, paused]);

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
          {timerSeconds.toString().padStart(2, "0")}
        </div>
      )}
    </>
  );
}
