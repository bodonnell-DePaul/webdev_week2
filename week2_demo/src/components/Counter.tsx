import { useState } from 'react'

const Counter: React.FC = () => {
    const [count, setCount] = useState(0);
  
    return (
      <div className="card">
        <p>Count: {count}</p>
        <button onClick={() => setCount(count + 1)}>Increment</button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
    );
  };

  export default Counter;