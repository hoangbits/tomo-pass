import React, { useEffect, useState } from "react";
import { AgGridReact } from "@ag-grid-community/react";
import {
  AgGridEvent,
  CellEditingStoppedEvent
} from "@ag-grid-community/core/dist/cjs/events";
import { GridApi } from "@ag-grid-community/core/dist/cjs/gridApi";
import { ColumnApi } from "@ag-grid-community/core/dist/cjs/columnController/columnApi";
import { AllCommunityModules } from "@ag-grid-community/all-modules";
import "@ag-grid-community/all-modules/dist/styles/ag-grid.css";
import "@ag-grid-community/all-modules/dist/styles/ag-theme-alpine.css";
import styled from "styled-components";
import tw from "tailwind.macro";
import { NewValueParams } from "@ag-grid-community/core/dist/es6/entities/colDef";
import { RowNode } from "@ag-grid-community/core/dist/cjs/entities/rowNode";
import { usePomoStore } from "../../hooks";
import { POMOS } from "../../utils/constant";

interface ManagePomoProps {}

export interface Pomo {
  name: string;
  pomoMins: number;
  longBreakMins: number;
  shortBreakMins: number;
}

const StyledGrid = styled(AgGridReact)`
  ${tw`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded`}
`;

const ManagePomo: React.FC<ManagePomoProps> = () => {
  const pomoStore = usePomoStore(); // memoized by default
  const [gridApi, setGridApi] = useState<GridApi>();
  const [gridColumnApi, setGridColumnApi] = useState<ColumnApi>();
  const [rowData, setRowData] = useState(pomoStore.pomos);
  const [columnDefs, setColumnDefs] = useState([
    {
      field: "name",
      onCellValueChanged: function(params: NewValueParams) {
        console.log("onCellValueChanged params", params);
        console.log("onCellValueChanged columnDefs", rowData);
        if (!params.data.c) {
          params.data.c = {};
        }
        params.data.c.x = params.newValue;
        return true;
      }
    },
    { field: "pomoMins" },
    { field: "longBreakMins" },
    { field: "shortBreakMins" }
  ]);
  const [defaultColDef, setDefaultColDef] = useState({
    flex: 1,
    minWidth: 110,
    editable: true,
    resizable: true
  });

  function getPinnedTopData() {
    return [
      {
        name: "##",
        pomoMins: "##",
        longBreakMins: "##",
        shortBreakMins: "##"
      }
    ];
  }
  function getPinnedBottomData() {
    return [
      {
        name: "##",
        pomoMins: "##",
        longBreakMins: "##",
        shortBreakMins: "##"
      }
    ];
  }

  const onGridReady = (params: AgGridEvent) => {
    setGridApi(params.api);
    setGridColumnApi(params.columnApi);
  };

  const [gridOptions, setGridOptions] = useState({
    columnDefs: columnDefs,
    rowData: rowData,
    defaultColDef: defaultColDef,
    // pinnedTopRowData: getPinnedTopData(),
    // pinnedBottomRowData: getPinnedBottomData(),
    onGridReady: onGridReady,
    onCellEditingStopped: function(event: CellEditingStoppedEvent) {
      console.log("cellEditingStopped", event);
      /**
       * 1.save all rows data to localStorage
       */
      let pomos: Array<Pomo> = [];
      event.api.forEachNodeAfterFilterAndSort(
        (rowNode: RowNode, index: number) => {
          pomos.push(rowNode.data);
        }
      );
      localStorage.setItem(POMOS, JSON.stringify(pomos));
      pomoStore.updateAllPomos(pomos);
    }
  });

  return (
    <div style={{ width: "100%", height: "320px" }}>
      <div style={{ height: "calc(100% - 25px)" }}>
        <div
          id="myGrid"
          style={{
            height: "100%",
            width: "100%"
          }}
          className="ag-theme-alpine"
        >
          <StyledGrid modules={AllCommunityModules} gridOptions={gridOptions} />
        </div>
      </div>
    </div>
  );
};

export default ManagePomo;
