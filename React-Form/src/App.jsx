import SignUpForm from "./components/SignForm.jsx"
import Authenticate from "./components/Authenicate.jsx"
import {useState} from "react"


function App() {
  const [token, setToken] = useState(null);


  return (
    <>
      <SignUpForm token={token} setToken={setToken}/>
      <Authenticate token={token} setToken={setToken}/>
      
    </>
  )
}

export default App
