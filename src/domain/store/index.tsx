import thunk from "redux-thunk";
import layoutReducer from "./layout/slice";
import { configureStore, MiddlewareArray } from "@reduxjs/toolkit";

export const store = configureStore({
  reducer: { layout: layoutReducer },
  middleware: new MiddlewareArray().concat(thunk),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
