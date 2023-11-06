import React from 'react'
import CartComponent from '../../organisms/cart/index'
import HeaderComponent from '../../organisms/header/index'
import Footer from '../../organisms/footer/index'

const CartPage = () => {
  return (
    <div className='cart-container'>
      <HeaderComponent />
      <CartComponent />
      <Footer />
    </div>
  )
}

export default CartPage