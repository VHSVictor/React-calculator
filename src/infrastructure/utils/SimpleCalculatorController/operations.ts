import { SimpleCalculatorActionTypes } from "../../../domain/store/simpleCalculator/slice";
import {
  doSimpleSum,
  doSimpleDivision,
  doSimpleSubtraction,
  doSimpleMultiplication,
} from "./actions";

export const getSimpleOperationActions = (): any => {
  const { DO_SUM, DO_DIVISION, DO_SUBTRACTION, DO_MULTIPLICATION } =
    SimpleCalculatorActionTypes;

  return {
    "+": DO_SUM,
    "÷": DO_DIVISION,
    "-": DO_SUBTRACTION,
    x: DO_MULTIPLICATION,
  };
};

export const getActionFunctions = () => {
  const { DO_SUM, DO_DIVISION, DO_SUBTRACTION, DO_MULTIPLICATION } =
    SimpleCalculatorActionTypes;

  return {
    [DO_SUM]: doSimpleSum,
    [DO_DIVISION]: doSimpleDivision,
    [DO_SUBTRACTION]: doSimpleSubtraction,
    [DO_MULTIPLICATION]: doSimpleMultiplication,
  };
};
