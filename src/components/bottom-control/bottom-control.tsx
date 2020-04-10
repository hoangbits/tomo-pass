import React, { useEffect, useState } from "react";
import Countdown from "react-countdown";

const BottomControl: React.FC = () => {
  // Renderer callback with condition

  const renderer = ({ minutes, seconds, completed }: any) => {
    if (completed) {
      // Render a complete state
      return (
        <>
          <span className="text-white font-lacquer md:text-5xl">Please take a break!</span>
        </>
      );
    } else {
      // Render a countdown
      return (
        <span className="font-lacquer text-white text-7xl md:text-11xl">
          {minutes}:{seconds}
        </span>
      );
    }
  };

  return (
    <>
      <div className="col-span-12 flex flex-col items-center">
        <Countdown date={Date.now() + 1500000} renderer={renderer} />
        <div className="rounded text-tomo bg-white md:mt-12">
          <h1 className="md:text-3xl font-lacquer">HOT KEY</h1>
          <ul className="list-disc list-inside  md:text-2xl font-lacquer">
            <li> SPACE: pause/resume</li>
            <li> s: start selected Pomodoro</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default BottomControl;
