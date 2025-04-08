import './App.css'
import Header from './components/Header'
import Counter from './components/Counter'
import Logos from './components/Logos'
import DataDisplay from './components/DataDisplay'

function App() { 

  return (
    <div id='App'>
      <Header />
      <Logos />
      <h1>Vite + React</h1>
      <Counter />
      <DataDisplay />
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  )
}

export default App
