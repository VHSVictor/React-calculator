import type { RootState } from "../index";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export enum SimpleCalculatorActionTypes {
  DO_SUM = "SUM",
  WAITING = "WAITING",
  DO_DIVISION = "DIVISION",
  DO_SUBTRACTION = "SUBTRACTION",
  DO_MULTIPLICATION = "MULTIPLICATION",
}

export interface SimpleCalculatorState {
  last: string;
  current: string;
  action: SimpleCalculatorActionTypes;
}

export const initialState: SimpleCalculatorState = {
  last: "",
  current: "",
  action: SimpleCalculatorActionTypes.WAITING,
};

export const simpleCalculatorSlice = createSlice({
  name: "simpleCalculator",
  initialState,
  reducers: {
    cleanAll: (state) => {
      state.last = "";
      state.current = "";
      state.action = SimpleCalculatorActionTypes.WAITING;
    },
    setResult: (state, action: PayloadAction<string>) => {
      state.last = state.current;
      state.current = action?.payload;
      state.action = SimpleCalculatorActionTypes.WAITING;
    },
    setAction: (state, action: PayloadAction<SimpleCalculatorActionTypes>) => {
      state.action = action?.payload;
    },
    setLastEquation: (state, action: PayloadAction<string>) => {
      state.last = action?.payload;
    },
    setCurrentEquation: (state, action: PayloadAction<string>) => {
      state.current = action?.payload;
    },
  },
});

export const { setCurrentEquation, setResult, setAction, cleanAll } =
  simpleCalculatorSlice.actions;

export const selectLastEquation = (state: RootState) =>
  state.simpleCalculator.last;
export const selectCurrentEquation = (state: RootState) =>
  state.simpleCalculator.current;

export default simpleCalculatorSlice.reducer;
