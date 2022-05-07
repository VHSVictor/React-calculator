import { darkTheme, lightTheme } from "./default";
import { LayoutModeTypes } from "../../../domain/models/SimpleScreen";
import { ScreenLayoutConfiguration } from "../../../domain/models/ScreenLayoutConfiguration";

export const getLayoutConfiguration = (
  layoutMode: LayoutModeTypes
): ScreenLayoutConfiguration => {
  if (layoutMode === LayoutModeTypes.NIGHT) return darkTheme;

  return lightTheme;
};
