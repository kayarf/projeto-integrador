import React, { useState } from 'react'
import './Navbar.css'

import logo from '../Assets/logo.png'
import cart_icon from '../Assets/cart_icon.png'
import { Link } from 'react-router-dom'


const Navbar = () => {

    const [menu,setMenu] = useState('shop')

  return (
    <div className='navbar'>
      <div className='nav-logo'><img src={logo} alt=''/>
      </div>
      <ul className="nav-menu">
        <li onClick={()=>{setMenu('shop')}}><Link style={{textDecoration: 'none'}} to='/'>Shop</Link>{menu==='shop'?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu('teclados')}}><Link style={{textDecoration: 'none'}} to='/teclados'>Teclados</Link>{menu==='teclados'?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu('mouses')}}><Link style={{textDecoration: 'none'}} to='/mouses'>Mouses</Link>{menu==='mouses'?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu('mousepads')}}><Link style={{textDecoration: 'none'}} to='/mousepads'>Mousepads</Link>{menu==='mousepads'?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu('mouse feet e grips')}}><Link style={{textDecoration: 'none'}} to='/mouse feet e grips'>Mouse Feet e Grips</Link>{menu==='mouse feet e grips'?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu('hardwares')}}><Link style={{textDecoration: 'none'}} to='/hardwares'>Hardware</Link>{menu==='hardwares'?<hr/>:<></>}</li>
      </ul>
      <div className='nav-login-cart'>
        <Link to='/login'><button>Login</button></Link>
        <Link to='/cart'><img src={cart_icon} alt=''></img></Link>
        <div className="nav-cart-count">0</div>
      </div>
    </div>
  )
}

export default Navbar
