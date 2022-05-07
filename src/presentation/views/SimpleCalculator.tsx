import "./styles.scss";
import React from "react";
import SimpleBody from "../../infrastructure/components/CalculatorBodys/SimpleBody";
import SimpleScreen from "../../infrastructure/components/CalculatorScreens/SimpleScreen";
import SimpleCalculatorController from "../../infrastructure/components/controllers/SimpleCalculatorControler";

const SimpleCalculator: React.FC = () => {
  return (
    <div className="calculatorContainer">
      <SimpleScreen />
      <SimpleBody />
      <SimpleCalculatorController />
    </div>
  );
};

export default SimpleCalculator;
