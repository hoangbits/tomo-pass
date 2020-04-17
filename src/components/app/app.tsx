import React, { useCallback, useState } from "react";
import { Topbar, MainControl, BottomControl } from "components";
import styled from "styled-components";
import tomatoImg from "images/tomato.jpeg";
// import tw from "tailwind.macro";

/**
 * act as container fluid
 */
const AppStyles = styled.div.attrs({
  className: "w-screen h-screen bg-tomo"
})<{ url: string }>`
  // background-image: ${props => `url(${props.url})`}  
`;

const App: React.FC = () => {
  const [minutes, setMinutes] = useState(25);
  const handleChangeMinutes = useCallback((minutes: number) => {
    setMinutes(minutes);
  }, []);
  return (
    <AppStyles url={tomatoImg}>
      <div className="container h-full mx-auto">
        <div className="grid grid-cols-12 gap-4">
          <Topbar/>
          <MainControl onChangeMinutes={handleChangeMinutes} />
          <BottomControl minutes={minutes} />
        </div>
      </div>
    </AppStyles>
  );
};

export default App;
