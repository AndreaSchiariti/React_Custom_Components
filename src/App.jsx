import './App.css'
import { Counter } from "./components/Counter.jsx"
import { UserLogin } from "./components/UserLogin.jsx"
import { GithubUsers } from "./components/GithubUsers"

function App() {

  return (
    <div className="container">
      {/* <Counter />
      <UserLogin /> */}
      <GithubUsers />
    </div>
  )
}

export default App
