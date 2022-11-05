import React from 'react'
import { Outlet } from 'react-router-dom'
import NavBar from '../../common/navbar/NavBar'
import './HeaderLayout.css'

const HeaderLayout = () => {
  return (
    <div>
        <NavBar/>
        <Outlet/>
    </div>
  )
}

export default HeaderLayout