import { LayoutModeTypes } from "../../../domain/models/SimpleScreen";

export const calculatorSettings = {
  functions: [
    { label: "AC", cssClasses: "itemBlue" },
    { label: "±", cssClasses: "itemBlue" },
    { label: "%", cssClasses: "itemBlue" },
    { label: "÷", cssClasses: "itemRed" },
    { label: "7" },
    { label: "8" },
    { label: "9" },
    { label: "x", cssClasses: "itemRed" },
    { label: "4" },
    { label: "5" },
    { label: "6" },
    { label: "-", cssClasses: "itemRed" },
    { label: "1" },
    { label: "2" },
    { label: "3" },
    { label: "+", cssClasses: "itemRed" },
    { label: "↵" },
    { label: "0" },
    { label: "." },
    { label: "=", cssClasses: "itemRed" },
  ],
};

export const defaultLayoutConfig = {
  container: {
    classNames: "",
  },
};

export interface LayoutConfigModel {
  container: { classNames: string };
}

export const getBodyLayoutConfiguration = (
  layoutMode: LayoutModeTypes
): LayoutConfigModel => {
  if (layoutMode === LayoutModeTypes.NIGHT) {
    return {
      container: { classNames: "darkBody" },
    };
  }

  return defaultLayoutConfig;
};
