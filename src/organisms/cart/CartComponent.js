import React, { useEffect, useState } from 'react'
import './CartComponent.css'
import { useSelector, useDispatch } from 'react-redux'
import { addToCart } from './cartredux/CartAction'
import { QUANTITY_DECREASE, QUANTITY_INCREASE } from './Constants'

const CartComponent = () => {

  const [cartTotalAMount, setCartTotalAMount] = useState(0)

    const { cartProducts }  = useSelector((state) => ({
		cartProducts : state.cartReducer,
	}));  

  const dispatch = useDispatch()

  const handleCartQuantity = (product, quantityOperator) => {
    if(quantityOperator === QUANTITY_DECREASE){
			dispatch(addToCart({...product, qty : product.qty - 1}))
		}
		else if(quantityOperator === QUANTITY_INCREASE){
			dispatch(addToCart({...product, qty : product.qty + 1}))
		}
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
              <button className="quantity-btn" onClick={() => handleCartQuantity(item, QUANTITY_DECREASE)} >-</button>
              <p>{item?.qty}</p>
              <button className="quantity-btn" onClick={() => handleCartQuantity(item, QUANTITY_INCREASE)} >+</button>
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