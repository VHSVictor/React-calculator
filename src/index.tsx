import React from "react";
import ReactDOM from "react-dom/client";
import SimpleCalculator from "./presentation/views/SimpleCalculator";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <SimpleCalculator />
  </React.StrictMode>
);
