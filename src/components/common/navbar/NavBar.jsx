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
        <Button className='req-but-header' variant="contained" color="secondary" type='on'>Mensaje</Button>
        <Button className='for-but-header' variant="contained" color="info" type='submit'>Promos</Button>
        <Button className='for-but-header' variant="contained" color="info" type='submit'>Ventas</Button>
      </div>
        <img className='logo' src={imagen} alt="logo-telematica" />
      <div className="opt-owner">
        <Button className='for-but-header' variant="contained" color="success" type='submit'>Perfil</Button>
        <Button className='for-but-header' variant="contained" color="error" onClick={() => {localStorage.clear()
        navigate('/')}}>Salir</Button>
      </div>
    </div>
  )
}

export default NavBar