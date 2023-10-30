import React, { useEffect, useState } from 'react'
import './cartComponent.css'
import { useSelector, useDispatch } from 'react-redux'
import { addToCart } from './cartredux/cartAction'
import { QUANTITY_DECREASE, QUANTITY_INCREASE } from './Constants'
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
  }, [JSON.stringify(cartProducts)])

  return (
    <div className='cart-section'>
      <strong className=''>Place Order</strong>
      <p>Delivery in 10 minutes</p>
      <p>6 items</p>
        {cartProducts.map((item, index) =>
          <CartProduct 
            item={item} 
            index={index} 
            helperHandleCart={helperHandleCart} 
            QUANTITY_DECREASE={QUANTITY_DECREASE} 
            QUANTITY_INCREASE = {QUANTITY_INCREASE} 
          />
        )}
      <div className='cart-total-container'>
        <strong>Grand Total</strong>
        <p>₹{cartTotalAMount}</p>
      </div>
    </div>
  )
}

export default CartComponent