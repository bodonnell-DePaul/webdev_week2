import './App.css'
import Header from './components/Header'
import Counter from './components/Counter'
import Logos from './components/Logos'
import Greeting from './components/Greeting'
import Form from './components/Form'
import DataDisplay from './components/DataDisplay'
import UserProfile from './components/UserProfile'
import Dashboard from './components/Dashboard'

function App() { 
  const myNameVar: string = 'Brian';
  const myActualStatus: string = 'tired';
  const myUrl: string = 'https://api.chucknorris.io/jokes/random';


  return (
    <div id='App'>
      <Header />
      <UserProfile />

      <Logos />
      <Dashboard />
      <Greeting name={myNameVar} status={myActualStatus} />
      <Counter />
      <Form />
      <DataDisplay newUrl={myUrl}/>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  )
}

export default App
