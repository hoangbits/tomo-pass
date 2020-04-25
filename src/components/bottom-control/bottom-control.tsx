import React, {
  MutableRefObject,
  useEffect,
  useMemo,
  useRef,
  useState
} from "react";
import Countdown from "react-countdown";
import { ReactComponent as Pause } from "images/zondicons/pause.svg";
import { ReactComponent as PauseSolid } from "images/zondicons/pause-solid.svg";
import { ReactComponent as Play } from "images/zondicons/play.svg";
import { ReactComponent as PlayOutline } from "images/zondicons/play-outline.svg";
import { useAudio } from "../../hooks/useAudio";
interface BottomControlProps {
  minutes: number;
}

const BottomControl: React.FC<BottomControlProps> = React.memo(
  ({ minutes }) => {
    const countDownRef = useRef<Countdown>(null);
    const [audio] = useState(
      new Audio("https://s3.amazonaws.com/freecodecamp/simonSound2.mp3")
    );
    const pause = () => {
      // @ts-ignore
      countDownRef.current.api.pause();
    };
    const start = () => {
      // @ts-ignore
      countDownRef.current.api.start();
    };

    const isPaused = () => {
      // @ts-ignore
      if (countDownRef.current) {
        // @ts-ignore
        const isPaused = countDownRef.current.api.isPaused();
        return isPaused;
      }
      return false;
    };

    const isStarted = (newMin: number) => {
      if (newMin < minutes) {
        return true;
      }
      return false;
    };

    const renderer = ({ minutes, seconds, completed }: any) => {
      if (completed) {
        // Render a complete state
        return (
          <>
            <span className="text-white font-lacquer md:text-5xl">
              Please take a break!
            </span>
          </>
        );
      } else {
        // Render a countdown

        return (
          <>
            <span className="font-lacquer text-white text-7xl md:text-11xl">
              {minutes}:{seconds}
            </span>
            <div className="flex justify-center">
              {isPaused() || !isStarted(minutes) ? (
                <PlayOutline
                  className="w-20 fill-current text-white inline-block"
                  onClick={start}
                />
              ) : (
                <PauseSolid
                  className="w-20 fill-current text-white inline-block"
                  onClick={pause}
                />
              )}
            </div>
          </>
        );
      }
    };

    return (
      <>
        <div className="col-span-12 flex flex-col items-center">
          <Countdown
            ref={countDownRef}
            date={Date.now() + 5000}
            renderer={renderer}
            onComplete={() => {
              // @ts-ignore
              audio.play();
            }}
          />
          <div className="rounded text-tomo bg-white md:mt-12">
            <h1 className="md:text-3xl font-lacquer">HOT KEY</h1>
            <ul className="list-disc list-inside  md:text-2xl font-lacquer">
              <li> SPACE: pause/resume</li>
              {/*<li> s: start selected Pomodoro</li>*/}
            </ul>
          </div>
        </div>
      </>
    );
  }
);

export default BottomControl;
