// This file defines a React context for managing a calculator's history of calculations.
// It provides a way to store and access the history of calculations (expression and result pairs)
// across the application, and includes a provider component and a custom hook for easy usage.

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

// Define the shape of the context
interface Calculation {
  expression: string;
  result: string;
}

interface CalculatorContextType {
  history: Calculation[];
  addCalculation: (calculation: Calculation) => void;
}

// Create the context
const CalculatorContext = createContext<CalculatorContextType | undefined>(undefined);

// Provider component
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
    setHistory((prevHistory) => [calculation, ...prevHistory]); // Add new calculation to the history
  };

  return (
    <CalculatorContext.Provider value={{ history, addCalculation }}>
      {children}
    </CalculatorContext.Provider>
  );
};

// Custom hook to use the CalculatorContext
export const useCalculator = (): CalculatorContextType => {
  const context = useContext(CalculatorContext);
  if (!context) {
    throw new Error('useCalculator must be used within a CalculatorProvider');
  }
  return context;
};