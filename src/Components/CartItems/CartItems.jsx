import React, { useContext } from 'react'
import './CartItems.css'
import { ShopContext } from '../../Context/ShopContext'
import remove_icon from '../Assetes/cart_cross_icon.png'

const CartItems = () => {
    const {all_product, cartItems, removeFromCart} = useContext(ShopContext);
  return (
    <div className='cartitems'>
      <div className="cartitems-format-main">
        <p>Products</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>
      <hr />
      {all_product.map((e) => {
        if(cartItems[e.id]>0){
            return <div>
            <div className="cartitems-format cartitems-format-main">
            <img src={e.image}  className='cartitems-product-icon' alt="" />
            <p>{e.name}</p>
            <p>${e.new_price}</p>
            <button className='cartitems-qty'>{cartItems[e.id]}</button>
            <p>${e.new_price*cartItems[e.id]}</p>
            <img className='cartitems-remove-icon' onClick={()=>{removeFromCart(e.id)}} src={remove_icon} alt="" />
            </div>
            <hr />
            </div>
        }
      })}
      
    </div>
  )
}

export default CartItems
