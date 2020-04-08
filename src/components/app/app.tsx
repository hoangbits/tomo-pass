import React from "react";
import { Topbar } from "components";
import styled from "styled-components";
import tomatoImg from "images/tomato.jpeg";
// import tw from "tailwind.macro";

/**
 * act as container fluid
 */
const AppStyles = styled.div.attrs({
  className: "w-full"
})<{ url: string }>`
  // background-image: ${props => `url(${props.url})`}
  background-color: #C55E5E;
`;

const App: React.FC = () => {
  return (
    <AppStyles url={tomatoImg}>
      <div className="container mx-auto">
        <Topbar />
      </div>
    </AppStyles>
  );
};

export default App;
