import React, { useEffect, useState } from 'react'
import './Home.css'
import {useDispatch, useSelector} from 'react-redux'
import Card from '../../common/Card'
import { getUsers } from '../../../store/users/thunk'
import Footer from '../../layaout/footerLayout/Footer'
import Loading from '../../common/loading/Loading'

const Home = () => {
  const dispatch = useDispatch()

  const {users} = useSelector((state)=>state.users)
  const [load, setLoad] = useState(true)

  //console.log(users)

    useEffect(() =>{
      dispatch(getUsers())
      users.length >0? setLoad(false): setLoad(true)
     }, [dispatch, users])

  return (
    <div className='home-main'>
      <h2 className="current-user">Usuarios actuales</h2>
        {
          load? <div className="container-load"><Loading/></div> :         
          <div className='card-main'>
            {
              users.map(user=>(
                <Card user = {user} key={user.id}/>
              ))
            }
          </div>
        }
        <Footer/>
    </div>
  )
}

export default Home