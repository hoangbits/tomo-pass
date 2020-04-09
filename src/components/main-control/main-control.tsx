import React from "react";

const MainControl: React.FC = () => {
  return (
    <>
      <div className="col-span-12 flex flex-col items-center md:flex-row md:justify-center ">
        <button
          className="text-red-600 bg-white rounded-full w-40 h-12 mb-2 md:h-12 md:mx-4 md:rounded-50 md:h-20
        lg:mx-16 font-lacquer"
        >
          Pomodoro
        </button>
        <button
          className="text-red-600 bg-white rounded-full w-40 h-12 mb-2 md:h-12 md:mx-4 md:rounded-50 md:h-20
        lg:mx-16 font-lacquer"
        >
          Short break
        </button>
        <button
          className="text-red-600 bg-white rounded-full w-40 h-12 mb-2 md:h-12 md:mx-4 md:rounded-50 md:h-20
        lg:mx-16 font-lacquer"
        >
          Long break
        </button>
      </div>
    </>
  );
};

export default MainControl;
