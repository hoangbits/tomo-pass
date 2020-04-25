import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter } from "react-router-dom";
import { App } from "./components";
import { PomoProvider } from "./providers/pomo-provider";
import { GlobalHotKeys, HotKeys } from "react-hotkeys";

const keyMap = {
  SWITCH: ["space"]
};

const TomoPass: React.FC = () => (
  <BrowserRouter>
    <PomoProvider>
      <GlobalHotKeys keyMap={keyMap}>
        <App></App>
      </GlobalHotKeys>
    </PomoProvider>
  </BrowserRouter>
);

ReactDOM.render(<TomoPass />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
