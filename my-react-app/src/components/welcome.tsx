// Import React library to use React features
import React from 'react';

// Define a functional component using TypeScript
// React.FC means "React Functional Component" - this tells TypeScript this is a React component
const WelcomeMessage: React.FC = () => {
    //where we would store state
    //where our logic will live
  // This function returns TSX (TypeScript + JSX)
  // The <h1> tag is TSX - it looks like HTML but it's actually TypeScript
  return (<h1>Welcome to React!</h1>);
};

// Export the component so it can be used in other files
export default WelcomeMessage;