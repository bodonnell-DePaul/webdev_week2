// Import React to use React features
import React from 'react';
import UserInfo from './userInfo';
import { Nav } from 'react-bootstrap';


// Component 1: A simple header component
const Header: React.FC = () => {
  return (
    <header>
      {/* Regular HTML-like markup outside curly braces */}
      <h1>My Application</h1>
      <Nav variant='pills' defaultActiveKey="/home">
        {/* 
          Note: In TSX we use # for href since we're not doing real navigation yet
          In a real app, you'd use React Router for navigation
        */}
        <Nav.Item>
            <Nav.Link href="/home">Home</Nav.Link>
        </Nav.Item>
        <Nav.Item>
            <Nav.Link eventKey="/about">About</Nav.Link>
        </Nav.Item>
      </Nav>
    </header>
  );
};

// Component 2: A footer component  
const Footer: React.FC = () => {
  // You can define variables inside the component function
  const currentYear: number = new Date().getFullYear();
  
  return (
    <footer>
      {/* Using curly braces to embed the TypeScript variable */}
      <p>&copy; {currentYear} My Application</p>
      {/* This will display: © 2025 My Application */}
    </footer>
  );
};

// Component 3: Main content area
const MainContent: React.FC = () => {
  // Define some data that we'll display
  const features: string[] = ['Fast', 'Reliable', 'User-friendly'];
  
  return (
    <main>
        <UserInfo/>
      <p>This is the main content area.</p>
      
      {/* Displaying an array using map() inside curly braces */}
      <ol>
        {features.map((feature: string, index: number) => (
          <li key={index}>{feature}</li>
          // map() creates a new <li> for each item in the features array
          // key={index} helps React track each list item (required for lists)
        ))}
      </ol>
    </main>
  );
};

// Component 4: The main App component that combines all others
const MultiApp: React.FC = () => {
  return (
    <div className="app">
      {/* 
        Here we're using our custom components just like HTML tags!
        Notice: 
        - Component names start with capital letters
        - They're self-closing tags (no separate closing tag needed)
        - These components will render their return value in this spot
      */}
      <Header />      {/* This renders the Header component's JSX here */}
      <MainContent /> {/* This renders the MainContent component's JSX here */}
      <Footer />      {/* This renders the Footer component's JSX here */}
    </div>
  );
};

// Export the App component so it can be used in other files
export default MultiApp;