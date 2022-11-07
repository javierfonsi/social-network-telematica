import React, { useEffect } from 'react'

import './Home.css'
import {useDispatch, useSelector} from 'react-redux'
import Card from '../../common/Card'
import { getUsers } from '../../../store/users/thunk'
import Footer from '../../layaout/footerLayout/Footer'

const Home = () => {
  const dispatch = useDispatch()

  const {users} = useSelector((state)=>state.users)

  //console.log(users)

    useEffect(() =>{
      dispatch(getUsers())
     }, [dispatch])




  return (
    <div className='home-main'>
      <h2 className="current-user">Usuarios actuales</h2>
      <div className='card-main'>
        {
          users.map(user=>(
            <Card user = {user} key={user.id}/>
          ))
        }
      </div>
      <Footer/>
    </div>
  )
}

export default Home