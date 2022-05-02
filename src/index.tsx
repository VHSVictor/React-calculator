import React from "react";
import { Provider } from "react-redux";
import { store } from "./domain/store";
import ReactDOM from "react-dom/client";
import SimpleCalculator from "./presentation/views/SimpleCalculator";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

//Flexibilizar container para escalabilidade

root.render(
  <Provider store={store}>
    <SimpleCalculator />
  </Provider>
);
