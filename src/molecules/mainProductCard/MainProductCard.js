import React from 'react'
import './mainProductCard.css'
import CartQuantityButton from '../../atoms/cartQuantityButton'
import DiscountBackground from '../../atoms/discountBackground/index'
import Text from '../../atoms/text/index'
import HorizontalContainer from '../../atoms/horizontalContainer'

const MainProductCard = (props) => {
  const { helperHandleCart, item, QUANTITY_DECREASE, QUANTITY_INCREASE } = props
  return (
    <div className='product-container'>
      <img className='discount-Background' src= {DiscountBackground} />
      <Text className='discount-value'>{item?.discount}%<br />OFF</Text>
      <div className='product-image-container'><img className='product-image' src={item.image} alt={"img"} /></div>
      <Text className='product-title'>{item?.productName}</Text>
			<Text className='product-in-kilo'>{item?.kg} kg</Text>
			<HorizontalContainer className='price-quantity-container'>
				<strong>₹{item?.price}</strong>
         <CartQuantityButton helperHandleCart={helperHandleCart} item={item} QUANTITY_DECREASE={QUANTITY_DECREASE} QUANTITY_INCREASE = {QUANTITY_INCREASE} />
			</HorizontalContainer>
    </div>
  )
}

export default MainProductCard