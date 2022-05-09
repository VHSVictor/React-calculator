import {
  doSimpleSum,
  doSimpleDivision,
  doSimpleSubtraction,
  doSimpleMultiplication,
} from "../src/infrastructure/utils/SimpleCalculatorController/actions";

const firstValue: string = "6";
const secondValue: string = "2";

test("Do a simple sum", () => {
  expect(doSimpleSum({ firstValue, secondValue })).toBe("8");
});
test("Do a simple division", () => {
  expect(doSimpleDivision({ firstValue, secondValue })).toBe("3");
});
test("Do a simple subtraction", () => {
  expect(doSimpleSubtraction({ firstValue, secondValue })).toBe("4");
});
test("Do a simple multiplication", () => {
  expect(doSimpleMultiplication({ firstValue, secondValue })).toBe("12");
});
