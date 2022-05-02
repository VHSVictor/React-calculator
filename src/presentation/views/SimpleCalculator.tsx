import "./styles.scss";
import React from "react";
import SimpleBody from "../../infrastructure/components/CalculatorBodys/SimpleBody";
import SimpleScreen from "../../infrastructure/components/CalculatorScreens/SimpleScreen";

const SimpleCalculator: React.FC = () => {
  return (
    <div className="calculatorContainer">
      <SimpleScreen />
      <SimpleBody />
    </div>
  );
};

export default SimpleCalculator;
