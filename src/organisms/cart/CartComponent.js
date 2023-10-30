import React, { useEffect, useState } from 'react'
import './CartComponent.css'
import { useSelector, useDispatch } from 'react-redux'
import { addToCart } from './cartredux/CartAction'
import { QUANTITY_DECREASE, QUANTITY_INCREASE } from './Constants'
import { handleCartQuantity } from './helpers/cartComponent.cartQuantity'
import { handleCart } from '../main/helpers/mainComponent.cartList'
import { setSelectedCategory, setSelectedSubCategory, setAllProducts } from '../main/mainredux/ProductsAction'

const CartComponent = () => {

  const [cartTotalAMount, setCartTotalAMount] = useState(0)

    const { allProducts, cartProducts }  = useSelector((state) => ({
		cartProducts : state.cartReducer,
    allProducts : state.productsReducer.allProducts,
	}));  

  const dispatch = useDispatch()

  const helperHandleCartQuantity = (product, quantityOperator) => {
    console.log(product, quantityOperator, allProducts)
    //handleCartQuantity(product, quantityOperator, dispatch, addToCart, handleCart, setSelectedSubCategory, setAllProducts, allProducts, setSelectedCategory)
    handleCart(product, quantityOperator, dispatch, setSelectedSubCategory, setAllProducts, addToCart, allProducts, setSelectedCategory)
  }

  useEffect(() => {
    const totalCartPrice = cartProducts.reduce(((totalPrice, item) => totalPrice + item.price * item.qty), 0)
    setCartTotalAMount(totalCartPrice)
  }, [cartProducts])

  return (
    <div className='cart-section'>
      <strong className=''>Place Order</strong>
      <p>Delivery in 10 minutes</p>
      <p>6 items</p>
        {cartProducts.map((item, index) =>
          <div className='cart-product' key={index}>
            <div class="cart-left-section">
              <div className='cart-img-container'><img className='cart-img' src={item.image} /></div>
              <div className='cart-product-details'>
                <p className='cart-title'>{item.productName}</p>
                <p className='cart-kilo'>{item.kg} kg</p>
                <strong className='cart-price'>₹{item.price}</strong>
              </div>
            </div>
            <div className='quantity-container'>
              <button className="quantity-btn" onClick={() => helperHandleCartQuantity(item, QUANTITY_DECREASE)} >-</button>
              <p>{item?.qty}</p>
              <button className="quantity-btn" onClick={() => helperHandleCartQuantity(item, QUANTITY_INCREASE)} >+</button>
            </div>
          </div>
        )}
      <div className='cart-total-container'>
        <strong>Grand Total</strong>
        <p>₹{cartTotalAMount}</p>
      </div>
    </div>
  )
}

export default CartComponent