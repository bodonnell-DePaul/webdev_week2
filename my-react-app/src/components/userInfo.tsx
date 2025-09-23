import React from 'react';

// Now let's create TSX that mixes HTML-like tags with TypeScript expressions
const userInfo: React.FC = () => {

    // First, let's define some TypeScript variables (just like normal TypeScript)
    const userName: string = 'Alice';           // A string variable
    const userAge: number = 28;                 // A number variable  
    const isLoggedIn: boolean = true;           // A boolean variable
    const score: number = 95;                   // Another number for calculations

    return (
        <div>
            {/* 
            CRITICAL RULE: 
            - Outside curly braces {} = HTML-like markup (tags, text, attributes)
            - Inside curly braces {} = TypeScript code (variables, expressions, calculations)
            */}
            
            {/* Example 1: Displaying a simple variable */}
            <h1>Welcome, {userName}!</h1>
            {/* This creates: <h1>Welcome, Alice!</h1> */}
            
            {/* Example 2: Displaying numbers */}
            <p>Your age is: {userAge}</p>
            {/* This creates: <p>Your age is: 28</p> */}
            
            {/* Example 3: Conditional expressions (ternary operator) */}
            <p>Status: {isLoggedIn ? 'Logged In' : 'Logged Out'}</p>
            {/* This creates: <p>Status: Logged In</p> (since isLoggedIn is true) */}
            
            {/* Example 4: Mathematical operations */}
            <p>Next year you'll be: {userAge + 1} years old</p>
            {/* This creates: <p>Next year you'll be: 29 years old</p> */}
            
            {/* Example 5: String concatenation */}
            <p>Grade: {score >= 90 ? 'A' : score >= 80 ? 'B' : 'C'}</p>
            {/* This creates: <p>Grade: A</p> */}
            
            {/* Example 6: Calling string methods */}
            <p>Username in caps: {userName.toUpperCase()}</p>
            {/* This creates: <p>Username in caps: ALICE</p> */}
        </div>
    )
}

export default userInfo;
  


// // TypeScript provides type safety:
// interface Greeting {
//   name: string;
//   age: number;
// }

// const greeting: React.FC = () => {

//     return (
//     <><Greeting name="John" age={25} /></>)

// };

// export default greeting;