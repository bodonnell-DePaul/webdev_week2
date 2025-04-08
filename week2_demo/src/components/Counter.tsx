import { useState } from 'react'

const Counter: React.FC = () => {
    const [count, myButtonCounter] = useState<number>(100);
  
    return (
      <div className="card">
        <p>Count: {count}</p>
        <button onClick={() => myButtonCounter(count + 15)}>Increment</button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
    );
  };

  export default Counter;