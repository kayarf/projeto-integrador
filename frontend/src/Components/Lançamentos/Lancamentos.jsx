import React from 'react'
import './Lancamentos.css'
import new_collections from '../Assets/new_collections'
import Item from '../Item/Item'

const Lancamentos = () => {
  return (
    <div className='novos-lancamentos'>
        <h1>Lançamentos</h1>
        <hr></hr>
        <div className='lancamentos'>
            {new_collections.map((item,i)=>{
                return <Item key={i} id={item.id} name={item.name} image={item.image} price={item.price}/>
            })}
        </div>
      
    </div>
  )
}

export default Lancamentos
