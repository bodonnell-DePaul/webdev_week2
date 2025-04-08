import React from 'react';

interface GreetingProps {
  name: string;
  status: string;
}

const Greeting: React.FC<GreetingProps> = ({ name, status }) => {
  return <h1>Welcome, {name}! You are {status}!</h1>;
};

export default Greeting;