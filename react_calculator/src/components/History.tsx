import React from 'react';
import { useCalculator } from '../context/CalculatorContext';

const History: React.FC = () => {
  const { history } = useCalculator(); // Access the history from the context

  return (
    <div>
      <h2>Calculation History</h2>
      {history.length === 0 ? (
        <p>No calculations yet.</p>
      ) : (
        <ul>
          {history.map((calculation, index) => (
            <li key={index}>
              {calculation.expression} = {calculation.result}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default History;