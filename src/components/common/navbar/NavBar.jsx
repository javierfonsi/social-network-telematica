import React from 'react'
import { useDispatch } from 'react-redux'
import { Button} from '@mui/material';
import './Navbar.css'
import imagen from './tele.jpg'
import { useNavigate } from 'react-router-dom';
import { logout } from '../../../store/auth/authSlice';

const NavBar = () => {
  const navigate = useNavigate()

  const dispatch = useDispatch()

  const out = () => {

    dispatch(logout())
    navigate('/')
    
    }

  

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
        <Button className='for-but-header' variant="contained" color="error" onClick={() => out()}>Salir</Button>
      </div>
    </div>
  )
}

export default NavBar