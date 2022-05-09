export const nestedOperation = (newEquation: string) => {
  const nestedOperation = newEquation.match(/[.a-z-÷+][.a-z-÷+]{1,}/);

  if (!nestedOperation) return false;

  return true;
};

export const nestedDots = (newEquation: string) => {
  const nestedDots = newEquation.match(/[..]{2,}/);

  if (!nestedDots) return false;

  return true;
};

export const undoLastOperation = (operation: string | number) => {
  if (operation === "↵") return true;
};

export const cleanAllOperation = (operation: string | number) => {
  if (operation === "AC") return true;
};

export const plusMinusOperation = (operation: string | number) => {
  if (operation === "±") return true;
};

const handlePlusMinusEquation = (
  hasOperation: any,
  currentEquation: string
) => {
  const currentOperation = hasOperation && hasOperation[0][0];

  const splittedExpression = currentEquation.split(currentOperation);

  if (splittedExpression.length > 3) return;

  const newValue = String(-Number(splittedExpression[1]));

  const newEquation = "".concat(
    splittedExpression[0],
    currentOperation,
    newValue
  );
  return newEquation;
};

export const handleWriteOperation = (
  currentEquation: string,
  option: string
): string | undefined => {
  let newEquation = String(currentEquation + option);

  if (undoLastOperation(option)) return currentEquation.slice(0, -1);
  if (plusMinusOperation(option)) {
    const hasOperation = currentEquation.match(/[a-z]/);

    if (hasOperation)
      return handlePlusMinusEquation(hasOperation, currentEquation);

    return String(-Number(currentEquation));
  }
  if (nestedOperation(newEquation)) return;
  if (nestedDots(newEquation)) return;

  return newEquation;
};
