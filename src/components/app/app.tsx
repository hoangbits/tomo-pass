import React from "react";
import { Topbar } from "components";
import styled from "styled-components";
import zoltanImg from "images/zoltan.jpg";
// import tw from "tailwind.macro";

const AppStyles = styled.div.attrs({
  className: "mx-auto"
})<{ url: string }>`
  // background-image: ${props => `url(${props.url})`}
  background-color: #C55E5E;
`;

const App: React.FC = () => {
  return (
    <AppStyles url={zoltanImg}>
      <Topbar />
    </AppStyles>
  );
};

export default App;
