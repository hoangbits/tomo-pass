import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Modal } from "../../utils";
import { ManagePomo } from "components";
import { observer } from "mobx-react-lite";
import { usePomoStore } from "../../hooks";

const SelectTomo = styled.select.attrs({
  className:
    "w-1/2 ml-3 mr-4 h-8 rounded-full text-red-600 bg-white my-4 md:text-2xl",
  id: "settings"
})`
  text-align-last: center;
`;

const Topbar: React.FC = observer(() => {
  const pomoStore = usePomoStore();
  const [open, setOpen] = useState(false);
  const hideModal = () => setOpen(false);
  const showModal = () => setOpen(true);

  const handleChange = (event: { target: { value: string } }) => {
    pomoStore.setCurrentPomoByName(event.target.value);
  };
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
      md:col-span-6 lg:flex-row font-lacquer"
      >
        <SelectTomo value={pomoStore.currentPomo.name} onChange={handleChange}>
          {pomoStore.pomos.map(pomo => (
            <option key={pomo.name} value={pomo.name}>
              {pomo.name}
            </option>
          ))}
        </SelectTomo>
        <button
          className="w-1/2 h-8 rounded-full text-red-600 bg-white font-lacquer md:text-2xl"
          onClick={showModal}
        >
          Manage pomo
        </button>
        <Modal handleClose={hideModal} show={open} title="Manage pomo">
          <ManagePomo />
        </Modal>
      </div>
    </>
  );
});

export default Topbar;
