import React, { useEffect, useState } from 'react'
import axios from 'axios'

import './Home.css'
import Card from '../../common/Card'

const Home = () => {

    const [menus, setMenus] = useState([])


    useEffect(() =>{
        axios.get("https://apprestaurantapijr.herokuapp.com/api/v1/menus")
            .then(res => setMenus(res.data.data.menu))
            .catch(err => console.log(err))
    }, [])




  return (
    <div>
        <h1 className='title-home'>Home</h1>
        {
            menus.map(menu => (
                <Card menu={menu} key={menu.id}/>
            ))
        }
        <h2>Esto es el home</h2>
    </div>
  )
}

export default Home