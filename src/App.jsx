import { BrowserRouter, Route, Routes } from "react-router"
import Dashboard from "./components/Dashboard/Dashboard"
import Login from "./auth/login/Login"
import { Book } from "react-bootstrap-icons"
import './App.css'
import NotFound from "./components/notFound/NotFound"

function App() {
  
  return (
    <div className='d-flex flex-column align-items-lg-center'>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login/>}/>
          <Route path="/dashboard" element={<Dashboard/>}/>
          <Route path="/*" element={<NotFound/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
