import React from 'react'
import './Card.css'

const Card = ({user}) => {
  return (
    <div className='each-user'>
        <h3>{user?.name } {user?.lastName}</h3>
        
        <button className='card-button' onClick={() => {console.log(user.id)}}> <h4>{user?.phone}</h4> </button>
    </div>
  )
}

export default Card