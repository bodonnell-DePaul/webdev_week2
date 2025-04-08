import './App.css'
import { CalculatorProvider } from './context/CalculatorContext'
import Calculator from './components/Calculator'
import History from './components/History'

function App() {
  

  return (
    <>
      <CalculatorProvider>
        <div className="app">
          <Calculator />
          <History />
        </div>
      </CalculatorProvider>
    </>
  )
}

export default App
