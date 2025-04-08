import React, { useState, useEffect } from 'react';
import { useCalculator } from '../context/CalculatorContext';

const Calculator: React.FC = () => {
  const [input, setInput] = useState<string>(''); // Current input
  const { addCalculation } = useCalculator(); // Access the context to add calculations to history

  const handleButtonClick = (value: string) => {
    setInput((prev) => prev + value); // Append the clicked button value to the input
  };

  const handleClear = () => {
    setInput(''); // Clear the input
  };

  const handleCalculate = () => {
    try {
      // Evaluate the expression
      const result = eval(input).toString(); // Use eval for simplicity (not recommended for production)
      addCalculation({ expression: input, result }); // Add to history
      setInput(result); // Update the input with the result
    } catch (error) {
      alert('Invalid Expression');
    }
  };

  // UseEffect to log the input whenever it changes
  useEffect(() => {
    console.log(`Current input: ${input}`);
  }, [input]); // Dependency array ensures this runs only when `input` changes

  return (
    <div>
      <h1>Calculator</h1>
      <div className="calculator-display">{input || '0'}</div>
      <div className="calculator-buttons">
        <div className="calculator-row">
          {['7', '8', '9', '/'].map((button) => (
            <button
              key={button}
              onClick={() => (button === '=' ? handleCalculate() : handleButtonClick(button))}
            >
              {button}
            </button>
          ))}
        </div>
        <div className="calculator-row">
          {['4', '5', '6', '*'].map((button) => (
            <button
              key={button}
              onClick={() => (button === '=' ? handleCalculate() : handleButtonClick(button))}
            >
              {button}
            </button>
          ))}
        </div>
        <div className="calculator-row">
          {['1', '2', '3', '-'].map((button) => (
            <button
              key={button}
              onClick={() => (button === '=' ? handleCalculate() : handleButtonClick(button))}
            >
              {button}
            </button>
          ))}
        </div>
        <div className="calculator-row">
          {['0', '.', '=', '+'].map((button) => (
            <button
              key={button}
              onClick={() => (button === '=' ? handleCalculate() : handleButtonClick(button))}
            >
              {button}
            </button>
          ))}
        </div>
        <div className="calculator-row">
          <button onClick={handleClear}>C</button>
        </div>
      </div>
    </div>
  );
};

export default Calculator;