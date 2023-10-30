import React from 'react'
import CartQuantityButton from '../../atoms/cartQuantityButton/index'
import './cartProduct.css'

const CartProduct = (props) => {
  return (
    <div className='cart-product' key={props.index}>
        <div class="cart-left-section">
            <div className='cart-img-container'>
                <img className='cart-img' src={props.item.image} />
            </div>
            <div className='cart-product-details'>
                <p className='cart-title'>{props.item.productName}</p>
                <p className='cart-kilo'>{props.item.kg} kg</p>
                <strong className='cart-price'>₹{props.item.price}</strong>
            </div>
        </div>
        <CartQuantityButton helperHandleCart={props.helperHandleCart} item={props.item} QUANTITY_DECREASE={props.QUANTITY_DECREASE} QUANTITY_INCREASE = {props.QUANTITY_INCREASE} />
    </div>
  )
}

export default CartProduct