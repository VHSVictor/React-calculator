import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { LayoutModeTypes } from "../../models/SimpleScreen";
import type { RootState } from "../index";
import { LayoutState } from "./types";

export const initialState: LayoutState = {
  layoutMode: LayoutModeTypes.DAY,
};

export const layoutSlice = createSlice({
  name: "layout",
  initialState,
  reducers: {
    changeLayoutMode: (state, action: PayloadAction<LayoutModeTypes>) => {
      const newMode: LayoutModeTypes = action?.payload;

      state.layoutMode = newMode;
    },
  },
});

export const { changeLayoutMode } = layoutSlice.actions;

export const selectLayoutMode = (state: RootState) => state.layout.layoutMode;

export default layoutSlice.reducer;
