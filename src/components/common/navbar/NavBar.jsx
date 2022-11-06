import React from 'react'
import { Button} from '@mui/material';
import './Navbar.css'

const NavBar = () => {
  return (
    <div className='container-navbar'>
      <div className="opt-req">
        <Button variant="contained" color="secondary" type='on'>Mensajes</Button>
        <Button variant="contained" color="info" type='submit'>Anuncios</Button>
        <Button variant="contained" color="info" type='submit'>Ventas</Button>
      </div>
      <Button variant="contained" color="success" type='submit'>Mi perfil</Button>
    </div>
  )
}

export default NavBar