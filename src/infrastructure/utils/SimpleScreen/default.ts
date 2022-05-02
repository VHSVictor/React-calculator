export const defaultConfigurations = {
  darkTheme: {
    img: { classNames: "" },
  },
  lightTheme: {
    img: { classNames: "" },
  },
  container: "",
};

export const darkTheme = {
  lightTheme: {
    img: { classNames: "imgNonSelected" },
  },
  darkTheme: defaultConfigurations.darkTheme,
  container: "screenNight",
};

export const lightTheme = {
  lightTheme: defaultConfigurations.lightTheme,
  darkTheme: {
    img: { classNames: "imgNonSelected" },
  },
  container: defaultConfigurations.container,
};
