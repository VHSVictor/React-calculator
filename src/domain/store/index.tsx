import thunk from "redux-thunk";
import layoutReducer from "./layout/slice";
import { configureStore, MiddlewareArray } from "@reduxjs/toolkit";
import simpleCalculatorReducer from "./simpleCalculator/slice";

export const store = configureStore({
  reducer: { layout: layoutReducer, simpleCalculator: simpleCalculatorReducer },
  middleware: new MiddlewareArray().concat(thunk),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
