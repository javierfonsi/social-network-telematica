import React, { useEffect} from 'react'
import './Home.css'
import {useDispatch, useSelector} from 'react-redux'
import Card from '../../common/Card'
import { getUsers } from '../../../store/users/thunk'
import Footer from '../../layaout/footerLayout/Footer'
import Loading from '../../common/loading/Loading'

const Home = () => {
  const dispatch = useDispatch()

  //const [load, setLoad] = useState(true)
  const {users, isLoading} = useSelector((state)=>state.users)
  

    useEffect(() =>{
      dispatch(getUsers())
     }, [dispatch])

    

  return (
    <div className='home-main'>
      <h3 className="current-subtitle">Usuarios actuales</h3>
        {
          isLoading? <div className="container-load"><Loading/></div> :(
          <div className='card-main'>
            {
              users.map(user=>(
                <Card user = {user} key={user.id}/>
              ))
            }
          </div>)
        }
        <Footer/>
    </div>
  )
}

export default Home