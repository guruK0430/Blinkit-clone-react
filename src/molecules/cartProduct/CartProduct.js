import React from 'react'
import CartQuantityButton from '../../atoms/cartQuantityButton/index'
import './cartProduct.css'

const CartProduct = (props) => {
  const { helperHandleCart, item, QUANTITY_DECREASE, QUANTITY_INCREASE } = props
  return (
    <div className='cart-product'>
        <div className="cart-left-section">
            <div className='cart-img-container'>
                <img className='cart-img' src={item.image} alt={"img"}/>
            </div>
            <div className='cart-product-details'>
                <p className='cart-title'>{item.productName}</p>
                <p className='cart-kilo'>{item.kg} kg</p>
                <strong className='cart-price'>₹{item.price}</strong>
            </div>
        </div>
        <CartQuantityButton helperHandleCart={helperHandleCart} item={item} QUANTITY_DECREASE={QUANTITY_DECREASE} QUANTITY_INCREASE = {QUANTITY_INCREASE} />
    </div>
  )
}

export default CartProduct