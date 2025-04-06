Here’s how you can build a **simple calculator application** using React features like `useState`, `useEffect`, and the Context API. The application will allow users to perform basic calculations and store the history of previous calculations, which will be visible to the user.

---

### **Application Features**
1. Perform basic arithmetic operations (addition, subtraction, multiplication, division).
2. Display the result of the current calculation.
3. Store and display a history of previous calculations.
4. Use the Context API to manage the calculation history globally.

---

### **Step 1: Create the Context for Calculation History**

We’ll use the Context API to manage the history of calculations globally.

```tsx
import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

interface Calculation {
  expression: string;
  result: string;
}

interface CalculatorContextType {
  history: Calculation[];
  addCalculation: (calculation: Calculation) => void;
}

const CalculatorContext = createContext<CalculatorContextType | undefined>(undefined);

interface CalculatorProviderProps {
  children: ReactNode;
}

export const CalculatorProvider: React.FC<CalculatorProviderProps> = ({ children }) => {
  const [history, setHistory] = useState<Calculation[]>([]);

  // Load history from local storage when the component mounts
  useEffect(() => {
    const savedHistory = localStorage.getItem('calculatorHistory');
    if (savedHistory) {
      setHistory(JSON.parse(savedHistory));
    }
  }, []);

  // Save history to local storage whenever it changes
  useEffect(() => {
    localStorage.setItem('calculatorHistory', JSON.stringify(history));
  }, [history]);

  const addCalculation = (calculation: Calculation) => {
    setHistory((prevHistory) => [calculation, ...prevHistory]);
  };

  return (
    <CalculatorContext.Provider value={{ history, addCalculation }}>
      {children}
    </CalculatorContext.Provider>
  );
};

export const useCalculator = (): CalculatorContextType => {
  const context = useContext(CalculatorContext);
  if (!context) {
    throw new Error('useCalculator must be used within a CalculatorProvider');
  }
  return context;
};
```

---

### **Step 2: Create the Calculator Component**

This component will handle the calculator logic and display the current calculation.

```tsx
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
```

---

### **Step 3: Create the History Component**

This component will display the history of previous calculations.

```tsx
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
```

---

### **Step 4: Combine Everything in the App Component**

Wrap the application with the `CalculatorProvider` to provide the context to all components.

```tsx
import React from 'react';
import { CalculatorProvider } from './context/CalculatorContext';
import Calculator from './components/Calculator';
import History from './components/History';

const App: React.FC = () => {
  return (
    <CalculatorProvider>
      <div className="app">
        <Calculator />
        <History />
      </div>
    </CalculatorProvider>
  );
};

export default App;
```

---

### **Step 5: Add Basic Styling**

You can add some basic CSS to make the calculator look better.

```css
.app {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 20px;
}

.calculator-display {
  width: 300px;
  height: 50px;
  background-color: #f0f0f0;
  text-align: right;
  padding: 10px;
  font-size: 24px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
}

.calculator-buttons {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 10px;
}

.calculator-buttons button {
  padding: 15px;
  font-size: 18px;
  cursor: pointer;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  margin: 5px 0;
}
```

---

### **How It Works**

1. **Calculator Component**:
   - Handles user input and performs calculations.
   - Uses `useState` to manage the current input.
   - Adds calculations to the global history using the Context API.

2. **History Component**:
   - Displays the list of previous calculations.
   - Accesses the global history using the Context API.

3. **Context API**:
   - Manages the calculation history globally.
   - Allows the `Calculator` component to add calculations and the `History` component to display them.

4. **App Component**:
   - Combines the `Calculator` and `History` components and provides the context.

---

### **Application Types Where This Pattern Is Useful**

1. **Global State Management**:
   - Applications that need to share state across multiple components (e.g., shopping carts, user authentication).

2. **Data Visualization**:
   - Apps that display historical data or logs (e.g., financial calculators, analytics dashboards).

3. **Educational Tools**:
   - Simple tools for teaching concepts like arithmetic or algebra.

---

This example demonstrates how to use React features like `useState`, `useEffect`, and the Context API to build a functional and modular application. Let me know if you need further enhancements!

Similar code found with 2 license types