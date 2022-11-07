import React from 'react'
import './Card.css'

const Card = ({user}) => {
  return (
    <div className='each-user'>
        <h3>{user?.name } {user?.lastName}</h3>
        <h4>{user?.phone}</h4>
    </div>
  )
}

export default Card