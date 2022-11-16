import React from 'react'
import { useNavigate } from 'react-router-dom'
import './Card.css'
import Fab from '@mui/material/Fab';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import BiotechSharpIcon from '@mui/icons-material/BiotechSharp';
import LocalPharmacyIcon from '@mui/icons-material/LocalPharmacy';

const Card = ({user}) => {
  const Navigate = useNavigate()

  return (
    <div className='each-user'>
        <h3 className='user-name-title'>{user?.name } {user?.lastName}</h3>
        
        {/*<button className='card-button' onClick={() => {console.log(user.id)}}>{user?.phone} </button>*/}
        <div className='card-button' onClick={()=>Navigate('/messages')}> 
          <Fab color="success" aria-label="add" size="small"> 
            {
              user?.profile==="Laboratorios" ? <BiotechSharpIcon/> : 
              user?.profile==="Servicios Medicos" ? <LocalHospitalIcon /> : 
                <LocalPharmacyIcon/>
            } 
          </Fab>
          <span> {user?.phone}   </span>   
        </div>
        
    </div>
  )
}

export default Card