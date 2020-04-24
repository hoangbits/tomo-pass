import React, { useCallback } from "react";
import { usePomoStore } from "../../hooks";
import { observer } from "mobx-react-lite";

interface MainControlProps {
  onChangeMinutes: Function;
}

interface MainControlButtonProps {
  title: string;
  minutes: number;
  onChangeMinutes: Function;
}

const MainControlButton: React.FC<MainControlButtonProps> = ({
  title,
  minutes,
  onChangeMinutes
}) => {
  const handleChangeMinutes = () => {
    onChangeMinutes(minutes);
  };
  return (
    <button
      className="text-red-600 bg-white rounded-full w-40 h-12 mb-2 md:h-12 md:mx-4 md:rounded-50 md:h-20
          md:text-2xl lg:mx-16 font-lacquer"
      onClick={handleChangeMinutes}
    >
      {title}
    </button>
  );
};

const MainControl: React.FC<MainControlProps> = observer(
  ({ onChangeMinutes }) => {
    const pomoStore = usePomoStore();
    return (
      <>
        <div className="col-span-12 flex flex-col items-center md:flex-row md:justify-center ">
          <MainControlButton
            title="Pomodoro"
            minutes={pomoStore.currentPomo.pomoMins}
            onChangeMinutes={onChangeMinutes}
          />
          <MainControlButton
            title="Short break"
            minutes={pomoStore.currentPomo.shortBreakMins}
            onChangeMinutes={onChangeMinutes}
          />
          <MainControlButton
            title="Long break"
            minutes={pomoStore.currentPomo.longBreakMins}
            onChangeMinutes={onChangeMinutes}
          />
        </div>
      </>
    );
  }
);

export default MainControl;
