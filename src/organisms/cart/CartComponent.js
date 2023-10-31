import React, { useEffect, useState } from 'react'
import './cartComponent.css'
import { useSelector, useDispatch } from 'react-redux'
import { addToCart } from './cartredux/cartAction'
import { QUANTITY_DECREASE, QUANTITY_INCREASE } from './constants/cartComponent.cartQuantity'
import { handleCart } from '../main/helpers/mainComponent.cartList'
import { setSelectedCategory, setSelectedSubCategory, setAllProducts } from '../main/mainredux/productsAction'
import CartProduct from '../../molecules/cartProduct/index'

const CartComponent = () => {

  const [cartTotalAMount, setCartTotalAMount] = useState(0)

    const { allProducts, cartProducts }  = useSelector((state) => ({
		cartProducts : state.cartReducer,
    allProducts : state.productsReducer.allProducts,
	}));  

  const dispatch = useDispatch()
  
  const helperHandleCart = (product, quantityOperator) => {
    handleCart(product, quantityOperator, dispatch, setSelectedSubCategory, setAllProducts, addToCart, allProducts, setSelectedCategory)
  }

  useEffect(() => {
    const totalCartPrice = cartProducts.reduce(((totalPrice, item) => totalPrice + item.price * item.qty), 0)
    setCartTotalAMount(totalCartPrice)
  }, [cartProducts])

  return (
    <div className='cart-section'>
      <div className='cart-scroll-section'>
        <strong className='order-title'>Place Order</strong>
        <p className='deliver-title'>Delivery in 10 minutes</p>
        <p className='cart-count'>{cartProducts.length} items</p>
          {cartProducts.map((item, index) =>
            <CartProduct 
              item={item} 
              key={index} 
              helperHandleCart={helperHandleCart} 
              QUANTITY_DECREASE={QUANTITY_DECREASE} 
              QUANTITY_INCREASE = {QUANTITY_INCREASE} 
            />
          )}
      </div>
      <div className='cart-total-container'>
        <strong>Grand Total</strong>
        <p><strong>₹{cartTotalAMount}</strong></p>
      </div>
      <div className='cart-count-price'>{cartProducts.length} items, ₹{cartTotalAMount}</div>
    </div>
  )
}

export default CartComponent