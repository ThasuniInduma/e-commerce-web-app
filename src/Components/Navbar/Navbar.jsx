import React, { useContext, useRef, useState } from 'react'
import './Navbar.css'
import logo from '../Assetes/logo2.png'
import cart_icon from '../Assetes/cart_icon.png'
import { Link } from 'react-router-dom'
import { ShopContext } from '../../Context/ShopContext'
import nav_dropdown from '../Assetes/nav_dropdown.png'

const Navbar = () => {

  const [menu,setMenu] = useState("shop");
  const {getTotalCartItems} = useContext(ShopContext);
  const menuRef = useRef();

  const dropdown_toggle = (e) => {
    menuRef.current.classList.toggle('nav-menu-visible');
    e.target.classList.toggle('open');
  }

  return (
    <div className='navbar'>
      <div className='nav-logo'>
        <img src={logo} alt="" />
        <p>StyleHive</p>
      </div>
      <img className='nav-dropdown' src={nav_dropdown} onClick={dropdown_toggle} alt="" />
      <ul ref={menuRef} className='nav-menu'>
        <li onClick={() => {setMenu("shop")}}><Link to='/' style={{textDecoration: 'none', color: '#515151'}}>Home</Link>  {menu==="shop"? <hr/>:<></>}</li>
        <li onClick={() => {setMenu("men")}}><Link to='/men' style={{textDecoration: 'none', color: '#515151'}}>Men</Link> {menu==="men"? <hr/>:<></>}</li>
        <li onClick={() => {setMenu("women")}}><Link to='/women' style={{textDecoration: 'none', color: '#515151'}}>Women</Link> {menu==="women"? <hr/>:<></>}</li>
        <li onClick={() => {setMenu("kids")}}><Link to='/kids' style={{textDecoration: 'none', color: '#515151'}}>Kids</Link> {menu==="kids"? <hr/>:<></>}</li>
      </ul>
      <div className='nav-login-cart'>
        <Link to='/login'><button>Login</button></Link>
        <Link to='/cart'><img src={cart_icon} alt="" /></Link>
        <div className='nav-cart-count'>{getTotalCartItems()}</div>
      </div>
    </div>
  )
}

export default Navbar
