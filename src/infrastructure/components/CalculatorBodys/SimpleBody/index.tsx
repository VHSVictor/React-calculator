import "./styles.scss";
import React, { useState, useEffect } from "react";
import { RootState } from "../../../../domain/store";
import { connect, ConnectedProps } from "react-redux";
import {
  LayoutConfigModel,
  calculatorSettings,
  defaultLayoutConfig,
  getBodyLayoutConfiguration,
} from "../../../utils/SimpleyBody/config";

interface Props extends PropsFromRedux {}

const SimpleBody: React.FC<Props> = ({ layoutMode }) => {
  const [layoutConfig, setLayoutConfig] =
    useState<LayoutConfigModel>(defaultLayoutConfig);

  useEffect(() => {
    const bodyConfig = getBodyLayoutConfiguration(layoutMode);
    setLayoutConfig(bodyConfig);
  }, [layoutMode]);

  const displayFunctions = () => {
    const { functions } = calculatorSettings;

    return functions?.map((settings) => {
      return (
        <div className={`item  ${settings.cssClasses}`}>{settings?.label}</div>
      );
    });
  };

  const { classNames: themeClassNames } = layoutConfig?.container;

  return (
    <div className={`simpleBodyContainer ${themeClassNames}`}>
      {displayFunctions()}
    </div>
  );
};

const mapState = (state: RootState) => ({
  layoutMode: state.layout.layoutMode,
});

const connector = connect(mapState, {});

type PropsFromRedux = ConnectedProps<typeof connector>;

export default connector(SimpleBody);
