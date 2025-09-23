import React from 'react';
import type { GreetingProps } from '../types/Props';


const Greeting: React.FC<GreetingProps> = ({ name, age = 18, isVip = false }) => {
  /*
    EXPLANATION OF THE LINE ABOVE:
    - React.FC<GreetingProps> = This is a React Functional Component that expects GreetingProps
    - ({ name, age = 18, isVip = false }) = This is "destructuring" - it extracts props from an object
    - age = 18 = Default value if age prop is not provided
    - isVip = false = Default value if isVip prop is not provided
  */
  
  return (
    <div className={`greeting ${isVip ? 'vip' : 'regular'}`}>
      {/* 
        EXPLANATION OF className ABOVE:
        - We use template literals (backticks) to combine strings
        - ${isVip ? 'vip' : 'regular'} is a ternary operator inside curly braces
        - If isVip is true, className becomes "greeting vip"
        - If isVip is false, className becomes "greeting regular"
      */}
      
      {/* Display the name prop inside curly braces */}
      <h2>Hello, {name}!</h2>
      
      {/* Conditional rendering: only show age if it exists */}
      {age && <p>You are {age} years old.</p>}
      {/* 
        EXPLANATION: {age && <p>...}
        - This is called "short-circuit evaluation"
        - If age is truthy (exists and not 0), render the <p> tag
        - If age is falsy (undefined, null, 0), render nothing
      */}
      
      {/* Another conditional rendering example */}
      {isVip && <span className="vip-badge">VIP Member</span>}
      {/* Only shows the VIP badge if isVip is true */}
    </div>
  );
};

export default Greeting;