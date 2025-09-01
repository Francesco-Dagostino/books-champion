import React from 'react'
import { useNavigate } from 'react-router'
import { Button } from "react-bootstrap";

const NotFound = () => {
    const navigate = useNavigate()

    const backToHome = () => {
        navigate("/login")
    }
    
  return (
    <div className='center-margin'>
      <h1>Error de código 404</h1>
      <p>No se encontro la pagina</p>

      <hr />
      <h5>Deseas Volver?</h5>
      <Button className="Text-center" onClick={backToHome}>Volver a la pagina Principal</Button>
    </div>
  )
}

export default NotFound
