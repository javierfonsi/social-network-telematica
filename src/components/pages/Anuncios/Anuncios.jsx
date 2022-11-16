import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAds } from '../../../store/ads/thunk'
import CardAds from './CardAds'
import Loading from '../../common/loading/Loading'
import '../Home/Home.css'

const Anuncios = () => {
  const dispatch = useDispatch()

  //const [load, setLoad] = useState(true)
  const {ads, isLoading} = useSelector((state)=>state.ads)
  //console.log(ads)
  

    useEffect(() =>{
      dispatch(getAds())
     }, [dispatch])


  return (
    <div>
        <h3 className='current-subtitle' > Anuncios Actuales </h3> 
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