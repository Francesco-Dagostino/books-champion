import { BrowserRouter, Route, Routes } from "react-router"
import Dashboard from "./components/Dashboard/Dashboard"
import Login from "./auth/login/Login"
import { Book } from "react-bootstrap-icons"
import './App.css'
import NotFound from "./components/notFound/NotFound"
import Protected from "./components/protected/Protected"
import { useState } from "react"

function App() {
  
  const [loggeedIn, setLoggedIn] = useState(false)
  
  const handleLogin = () => {
    setLoggedIn(true)
  }

  const handleSingOut = () => {
    setLoggedIn(false)
  }

  return (
    <div className='d-flex flex-column align-items-lg-center'>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login onlogin={handleLogin}/>}/>
          <Route path="/dashboard" element={
            <Protected isSignedIn={loggeedIn} >
              <Dashboard onsingout={handleSingOut}/>
            </Protected>
            }/>
          <Route path="/*" element={<NotFound/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
