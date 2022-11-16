import React from 'react'
import { Outlet } from 'react-router-dom'
import NavBar from '../../common/navbar/NavBar'
//import Footer from '../footerLayout/Footer'
import './HeaderLayout.css'

const HeaderLayout = () => {
  return (
    <div>
        <NavBar/>
        {/*<Footer/>*/}
        <Outlet/>
    </div>
  )
}

export default HeaderLayout