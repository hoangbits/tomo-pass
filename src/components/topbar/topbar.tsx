import React from "react";
import styled from "styled-components";

const SelectTomo = styled.select.attrs({
  className: "w-1/2 ml-3 mr-4 h-8 rounded-full text-red-600 bg-white my-4",
  id: "settings"
})`
  text-align-last: center;
`;

const Topbar: React.FC = () => {
  return (
    <>
      <div className="text-center col-span-12  md:col-span-6">
        <h1
          className="mx-4 text-white font-lacquer
         text-6xl md:text-7xl md:w-1/2 lg:text-8xl"
        >
          TOMOPASS
        </h1>
      </div>

      <div
        className="col-span-12 text-center flex flex-col-reverse items-center
      md:col-span-6 lg:flex-row"
      >
        <SelectTomo>
          <option>Default Tomo</option>
          <option>others</option>
        </SelectTomo>
        <button className="w-1/2 h-8 rounded-full text-red-600 bg-white">
          Create Tomo
        </button>
      </div>
    </>
  );
};

export default Topbar;
