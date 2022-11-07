import React from 'react'
import { Button} from '@mui/material';
import './Navbar.css'
import imagen from './tele.jpg'
import { useNavigate } from 'react-router-dom';

const NavBar = () => {
  const navigate = useNavigate()
  return (
    <div className='container-navbar'>
      <div className="opt-req">
        <Button variant="contained" size="small" color="secondary" type='on'>Mensajes</Button>
        <Button variant="contained" size="small" color="info" type='submit'>Promos</Button>
        <Button variant="contained" size="small" color="info" type='submit'>Ventas</Button>
      </div>
        <img className='logo' src={imagen} alt="logo-telematica" />
      <div className="opt-owner">
        <Button variant="contained" size="small" color="success" type='submit'>Perfil</Button>
        <Button variant="contained" size="small" color="error" onClick={() => {localStorage.clear()
        navigate('/')}}>Salir</Button>
      </div>
    </div>
  )
}

export default NavBar