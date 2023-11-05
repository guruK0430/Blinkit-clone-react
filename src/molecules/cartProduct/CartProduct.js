import React from 'react'
import CartQuantityButton from '../../atoms/cartQuantityButton/index'
import './cartProduct.css'
import HorizontalContainer from '../../atoms/horizontalContainer'
import Text from '../../atoms/text'

const CartProduct = (props) => {
  const { helperHandleCart, item, QUANTITY_DECREASE, QUANTITY_INCREASE } = props
  return (
    <HorizontalContainer className='cart-product'>
        <HorizontalContainer className="cart-left-section">
            <div className='cart-img-container'>
              <img className='cart-img' src={item.image} alt={"img"}/>
            </div>
            <div className='cart-product-details'>
                <Text className='cart-title'>{item.productName}</Text>
                <Text className='cart-kilo'>{item.kg} kg</Text>
                <Text className='cart-price'>₹{item.price}</Text>
            </div>
        </HorizontalContainer>
        <CartQuantityButton helperHandleCart={helperHandleCart} item={item} QUANTITY_DECREASE={QUANTITY_DECREASE} QUANTITY_INCREASE = {QUANTITY_INCREASE} />
    </HorizontalContainer>
  )
}

export default CartProduct