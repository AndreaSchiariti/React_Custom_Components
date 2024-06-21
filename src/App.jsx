import './App.css'
import { Counter } from "./components/Counter.jsx"
import { UserLogin } from "./components/UserLogin.jsx"
import { GithubUsers } from "./components/GithubUsers"
import { CurrentLocation } from './components/CurrentLocation.jsx'

function App() {

  return (
    <div className="container">
      {/* <Counter />
      <UserLogin /> */}
      <GithubUsers />
      <CurrentLocation />
    </div>
  )
}

export default App
