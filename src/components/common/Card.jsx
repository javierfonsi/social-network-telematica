import React from 'react'

const Card = ({menu}) => {
  return (
    <div>
        <h2>{menu?.name}</h2>
        <h2>{menu?.price}</h2>
    </div>
  )
}

export default Card