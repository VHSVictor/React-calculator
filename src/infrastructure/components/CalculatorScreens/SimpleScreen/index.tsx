import "./styles.scss";
import {
  layoutSlice,
  selectLayoutMode,
} from "../../../../domain/store/layout/slice";
import SunIcon from "../../../../images/sun24.svg";
import MoonIcon from "../../../../images/moon.svg";
import { RootState } from "../../../../domain/store";
import { connect, ConnectedProps } from "react-redux";
import {
  selectLastEquation,
  selectCurrentEquation,
} from "../../../../domain/store/simpleCalculator/slice";
import React, { ReactElement, useState, useEffect } from "react";
import { LayoutModeTypes } from "../../../../domain/models/SimpleScreen";
import { getLayoutConfiguration } from "../../../utils/SimpleScreen/config";
import { defaultConfigurations } from "../../../utils/SimpleScreen/default";

interface Props extends PropsFromRedux {}

const SimpleScreen: React.FC<Props> = ({
  layoutMode,
  lastEquation,
  currentEquation,
  changeLayoutMode,
}) => {
  const [configurations, setConfigurations] = useState(defaultConfigurations);

  useEffect(() => {
    const configuration = getLayoutConfiguration(layoutMode);

    setConfigurations(configuration);
  }, [layoutMode]);

  const displayMoon = (): ReactElement => {
    const { img: imgStyle } = configurations?.darkTheme;

    return (
      <img
        alt="moon"
        src={MoonIcon}
        className={imgStyle.classNames}
        onClick={() => changeLayoutMode(LayoutModeTypes.NIGHT)}
      />
    );
  };

  const displaySun = (): ReactElement => {
    const { img: imgStyle } = configurations?.lightTheme;

    return (
      <img
        alt="sun"
        src={SunIcon}
        className={imgStyle.classNames}
        onClick={() => changeLayoutMode(LayoutModeTypes.DAY)}
      />
    );
  };

  const { container: containerStyle } = configurations;

  const displayLastEquation = () => {
    if (!lastEquation) return <></>;

    return <span>{lastEquation}</span>;
  };

  const displayCurrentEquation = () => {
    if (!currentEquation) return <></>;

    return <span>{currentEquation}</span>;
  };

  return (
    <div className={"screenContainer " + containerStyle}>
      <div className="lightContainer">
        {displaySun()}
        {displayMoon()}
      </div>
      <div className="calculationContainer">
        <div className="operation">{displayLastEquation()}</div>
        <div className="result">{displayCurrentEquation()}</div>
      </div>
    </div>
  );
};

const mapState = (state: RootState) => ({
  layoutMode: selectLayoutMode(state),
  lastEquation: selectLastEquation(state),
  currentEquation: selectCurrentEquation(state),
});

const mapDispatch = {
  changeLayoutMode: layoutSlice.actions.changeLayoutMode,
};

const connector = connect(mapState, mapDispatch);

type PropsFromRedux = ConnectedProps<typeof connector>;

export default connector(SimpleScreen);
