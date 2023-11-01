import React from 'react'
import CartComponent from '../../organisms/cart/index'
import HeaderComponent from '../../organisms/header/index'

const CartPage = () => {
  return (
    <div className='cart-container'>
      <HeaderComponent />
      <CartComponent />
    </div>
  )
}

export default CartPage