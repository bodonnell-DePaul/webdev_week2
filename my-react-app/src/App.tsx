import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import WelcomeMessage from './components/welcome'
import { Button } from 'react-bootstrap'

function App() {
  const [count, setCount] = useState<number>(0)
  const [step, setStep] = useState<number>(5);
// logic will live up here

  const buttonClick = () => {
    console.log('Button was clicked!');
  };

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1><WelcomeMessage /></h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + step)}>
          count is {count}
        </button>
        <Button onClick={() => setStep(1)}>Reset</Button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more

        
      </p>
    </>
  )
}

export default App
