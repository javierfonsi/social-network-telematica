import React from 'react'
import './Card.css'
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import Fab from '@mui/material/Fab';
import BiotechSharpIcon from '@mui/icons-material/BiotechSharp';
import LocalPharmacyIcon from '@mui/icons-material/LocalPharmacy';

const Card = ({user}) => {
  return (
    <div className='each-user'>
        <h3 className='user-name-title'>{user?.name } {user?.lastName}</h3>
        
        {/*<button className='card-button' onClick={() => {console.log(user.id)}}> */}
        <button className='card-button'> 
          <Fab color="success" aria-label="add" size="small"> 
            {
              user?.profile==="Laboratorios" ? <BiotechSharpIcon/> : 
              user?.profile==="Servicios Medicos" ? <LocalHospitalIcon /> : 
                <LocalPharmacyIcon/>
            } 
          </Fab>
          <span> {user?.phone}   </span>   
        </button>
    </div>
  )
}

export default Card