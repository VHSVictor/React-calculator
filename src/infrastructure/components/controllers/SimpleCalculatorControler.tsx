import React, { useEffect, useCallback } from "react";
import { RootState } from "../../../domain/store";
import { connect, ConnectedProps } from "react-redux";
import {
  selectCurrentEquation,
  selectLastEquation,
  setResult,
  SimpleCalculatorActionTypes,
} from "../../../domain/store/simpleCalculator/slice";
import { getSimpleEquationValues } from "../../utils/SimpleCalculatorController/actions";
import { getActionFunctions } from "../../utils/SimpleCalculatorController/operations";

interface Props extends PropsFromRedux {}

const SimpleCalculatorController: React.FC<Props> = ({
  setResult,
  currentEquation,
  calculatorAction,
}) => {
  const actionFunctions = useCallback((): any => {
    const simpleActionFunctions = getActionFunctions();

    return simpleActionFunctions;
  }, []);

  const defaultFunction = () => {};

  useEffect(() => {
    if (calculatorAction === SimpleCalculatorActionTypes.WAITING) return;

    const getActionFunctions = actionFunctions();
    const getActionFunction =
      getActionFunctions[calculatorAction] || defaultFunction;

    const simpleValues = getSimpleEquationValues(currentEquation);
    let result: string = getActionFunction(simpleValues);

    setResult(result);
  }, [calculatorAction, currentEquation, actionFunctions, setResult]);

  return <></>;
};

const mapState = (state: RootState) => ({
  calculatorAction: state.simpleCalculator.action,
  lastEquation: selectLastEquation(state),
  currentEquation: selectCurrentEquation(state),
});

const mapDispatch = {
  setResult,
};

const connector = connect(mapState, mapDispatch);

type PropsFromRedux = ConnectedProps<typeof connector>;

export default connector(SimpleCalculatorController);
