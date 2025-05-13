import React from 'react'
import './Item.css'

const Item = (props) => {
  return (
    <div className='item'>
        <img src={props.image} alt='' ></img>
        <p>{props.name}</p>
        <div className='item-price'>
            R$ {props.price}
        </div>
      
    </div>
  )
}

export default Item
