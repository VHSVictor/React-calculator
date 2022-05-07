export const getSimpleEquationValues = (equation: string) => {
  const simpleValues = equation.match(
    /([-]?[\d]+(.?[\d]+)?)[x÷+-]([-]?[\d]+(.?[\d]+)?)/
  );

  return {
    firstValue: simpleValues ? simpleValues[1] : "0",
    secondValue: simpleValues ? simpleValues[3] : "0",
  };
};

const doSimpleSum = ({ firstValue = "", secondValue = "" }): string => {
  let result: number = Number(firstValue) + Number(secondValue);

  return String(result);
};

const doSimpleDivision = ({ firstValue = "", secondValue = "" }): string => {
  let result: number = Number(firstValue) / Number(secondValue);

  return String(result);
};

const doSimpleSubtraction = ({ firstValue = "", secondValue = "" }): string => {
  let result: number = Number(firstValue) - Number(secondValue);

  return String(result);
};

const doSimpleMultiplication = ({
  firstValue = "",
  secondValue = "",
}): string => {
  let result: number = Number(firstValue) * Number(secondValue);

  return String(result);
};

export {
  doSimpleSum,
  doSimpleDivision,
  doSimpleSubtraction,
  doSimpleMultiplication,
};
