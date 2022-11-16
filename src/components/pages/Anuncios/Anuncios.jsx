import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAds } from '../../../store/ads/thunk'
import CardAds from './CardAds'
import Loading from '../../common/loading/Loading'
const Anuncios = () => {
  const dispatch = useDispatch()

  //const [load, setLoad] = useState(true)
  const {ads, isLoading} = useSelector((state)=>state.ads)

  console.log(ads)
  

    useEffect(() =>{
      //dispatch(getUsers())
      dispatch(getAds())
     }, [dispatch])


  return (
    <div>Vista desde Anuncios
        {
          isLoading? <div className="container-load"><Loading/></div> :(
          <div className='card-main'>
            {
              ads.map(ad=>(
                <CardAds ad = {ad} key={ad.id}/>
              ))
            }
          </div>)
        }
    </div>
  )
}

export default Anuncios