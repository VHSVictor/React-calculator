import "./styles.scss";
import React, { useState, useEffect } from "react";
import { RootState } from "../../../../domain/store";
import { connect, ConnectedProps } from "react-redux";
import {
  LayoutConfigModel,
  calculatorSettings,
  defaultLayoutConfig,
  getBodyLayoutConfiguration,
  calculatorFunctionObj,
} from "../../../utils/SimpleBody/config";
import {
  cleanAll,
  setAction,
  selectLastEquation,
  setCurrentEquation,
  selectCurrentEquation,
} from "../../../../domain/store/simpleCalculator/slice";
import {
  cleanAllOperation,
  handleWriteOperation,
} from "../../../utils/SimpleBody/operations";
import { getSimpleOperationActions } from "../../../utils/SimpleCalculatorController/operations";

interface Props extends PropsFromRedux {}

const SimpleBody: React.FC<Props> = ({
  cleanAll,
  setAction,
  layoutMode,
  currentEquation,
  setCurrentEquation,
}) => {
  const [layoutConfig, setLayoutConfig] =
    useState<LayoutConfigModel>(defaultLayoutConfig);

  useEffect(() => {
    const bodyConfig = getBodyLayoutConfiguration(layoutMode);

    setLayoutConfig(bodyConfig);
  }, [layoutMode]);

  const handleCallAction = (action: string) => {
    const operationActions = getSimpleOperationActions();
    const currentOperation = operationActions[action] || false;

    if (!currentOperation) return;

    setAction(currentOperation);
  };

  const handleOperation = (settings: calculatorFunctionObj) => {
    const option = settings?.label;

    const isOperation = option.match(/[x÷+=-a-z]/);
    //criar utils para regex
    const fullOperation = currentEquation.match(
      /[-]?([\d]+)?.?[\d]+([x÷+-])[-]?([\d]+)?.?\d+/
    );

    if (isOperation) {
      if (fullOperation) {
        const action = fullOperation?.[2];
        return handleCallAction(action);
      }

      if (cleanAllOperation(option)) return cleanAll();
    }

    const newEquation = handleWriteOperation(currentEquation, option);

    if (newEquation === undefined) return;

    setCurrentEquation(newEquation);
  };

  const displayFunctions = () => {
    const { functions } = calculatorSettings;

    return functions?.map((settings) => {
      return (
        <div
          key={settings.label}
          onClick={() => handleOperation(settings)}
          className={`item  ${settings.cssClasses}`}
        >
          {settings?.label}
        </div>
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
  lastEquation: selectLastEquation(state),
  currentEquation: selectCurrentEquation(state),
});

const mapDispatch = {
  cleanAll,
  setAction,
  setCurrentEquation,
};

const connector = connect(mapState, mapDispatch);

type PropsFromRedux = ConnectedProps<typeof connector>;

export default connector(SimpleBody);
