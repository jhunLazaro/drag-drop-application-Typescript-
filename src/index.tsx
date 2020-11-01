import React from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend as Backend } from "react-dnd-html5-backend";
import ReactDOM from "react-dom";
import App from "./App";
import { AppStateProvider } from "./AppStateContext";
import "./index.css";

ReactDOM.render(
  <DndProvider backend={Backend}>
    <AppStateProvider>
      <App />
    </AppStateProvider>
  </DndProvider>,
  document.getElementById("root")
);
