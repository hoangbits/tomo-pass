import React, { useState } from "react";
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

interface ManagePomoProps {}

const StyledGrid = styled(AgGridReact)`
  ${tw`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded`}
`;

const ManagePomo: React.FC<ManagePomoProps> = () => {
  const [gridApi, setGridApi] = useState<GridApi>();
  const [gridColumnApi, setGridColumnApi] = useState<ColumnApi>();

  const [rowData, setRowData] = useState([
    {
      firstName: "Sadiq",
      lastName: "Khan",
      gender: "Male",
      age: 12,
      address:
        "3235 High Forest, Glen Campbell, MS, 39035-6845, US, (601) 638-8186",
      mood: "Happy",
      country: "Ireland"
    },
    {
      firstName: "Jerry",
      lastName: "Mane",
      gender: "Male",
      age: 12,
      address:
        "2234 Sleepy Pony Mall , Drain, DC, 20078-4243, US, (202) 948-3634",
      mood: "Happy",
      country: "Ireland"
    },
    {},
    {},
    {}
  ]);
  const [columnDefs, setColumnDefs] = useState([
    {
      field: "firstName",
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
    { field: "lastName" },
    { field: "gender" },
    { field: "age" },
    { field: "mood" },
    { field: "country" },
    {
      field: "address",
      minWidth: 550
    }
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
        firstName: "##",
        lastName: "##",
        gender: "##",
        address: "##",
        mood: "##",
        country: "##"
      }
    ];
  }
  function getPinnedBottomData() {
    return [
      {
        firstName: "##",
        lastName: "##",
        gender: "##",
        address: "##",
        mood: "##",
        country: "##"
      }
    ];
  }

  const onGridReady = (params: AgGridEvent) => {
    setGridApi(params.api);
    setGridColumnApi(params.columnApi);
    console.log("params", params);
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
       * save all rows data to localStorage
       */
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
