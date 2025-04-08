import './App.css'
import Header from './components/Header'
import Counter from './components/Counter'
import Logos from './components/Logos'
import DataDisplay from './components/DataDisplay'
import Greeting from './components/Greeting'
import Form from './components/Form'

function App() { 
  const myNameVar: string = 'Brian';
  const myActualStatus: string = 'tired';


  return (
    <div id='App'>
      <Header />
      <Logos />
      <Greeting name={myNameVar} status={myActualStatus} />
      <Counter />
      <Form />
      <DataDisplay />
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  )
}

export default App
