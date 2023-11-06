import React, { useEffect, useState } from 'react'
import './cartComponent.css'
import { useSelector, useDispatch } from 'react-redux'
import { addToCart } from './cartredux/cartAction'
import { QUANTITY_DECREASE, QUANTITY_INCREASE } from './constants/cartComponent.cartQuantity'
import { handleCart } from '../main/helpers/mainComponent.cartList'
import { setSelectedCategory, setSelectedSubCategory, setAllProducts } from '../main/mainredux/productsAction'
import CartProduct from '../../molecules/cartProduct/index'
import HorizontalContainer from '../../atoms/horizontalContainer'
import Text from '../../atoms/text/index'
import VerticalContainer from '../../atoms/verticalContainer'

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
    <VerticalContainer className='cart-section'>
      <div className='cart-scroll-section'>
        <Text className='order-title'>Place Order</Text>
        <Text className='deliver-title'>Delivery in 10 minutes</Text>
        <Text className='cart-count'>{cartProducts.length} items</Text>
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
      <HorizontalContainer className='cart-total-container'>
        <strong>Grand Total</strong>
        <Text><strong>₹{cartTotalAMount.toLocaleString("en-US")}</strong></Text>
      </HorizontalContainer>
      <Text className='cart-count-price'>{cartProducts.length} items, ₹{cartTotalAMount.toLocaleString("en-US")}</Text>
    </VerticalContainer>
  )
}

export default CartComponent