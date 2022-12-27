import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { TaskAdd } from "./taskAdd";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <>
    <div className="Container">
      <div className="task__content">
        <TaskAdd />
      </div>
      <div className="task__content">
        <App />
      </div>
    </div>
  </>
);
