import React, { useEffect, useState } from "react";
import Clock from "react-clock";

const BottomControl: React.FC = () => {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    console.log("fires")
    const interval = setInterval(() => {
      setDate(new Date());
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <>
      <div className="col-span-12 flex flex-row justify-center bg-white">
        <Clock value={new Date()} />
      </div>
    </>
  );
};

export default BottomControl;
