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
        <h2 className='title-home'>Home</h2>
        {
            menus.map(menu => (
                <Card menu={menu} key={menu.id}/>
            ))
        }
    </div>
  )
}

export default Home