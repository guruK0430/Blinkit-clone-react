import React from 'react'
import './mainProductCard.css'
import CartQuantityButton from '../../atoms/cartQuantityButton'
import DiscountBackground from '../../atoms/discountBackground/index'

const MainProductCard = (props) => {
  const { helperHandleCart, item, QUANTITY_DECREASE, QUANTITY_INCREASE } = props
  return (
    <div className='product-container'>
        <img className='discount-Background' src= {DiscountBackground} />
        <span className='discount-value'>{item?.discount}%<br />OFF</span>
        <div className='product-image-container'><img className='product-image' src={item.image} alt={"img"} /></div>
            <p className='product-title'>{item?.productName}</p>
			<p className='product-in-kilo'>{item?.kg} kg</p>
			<div className='price-quantity-container'>
				<strong>₹{item?.price}</strong>
                <CartQuantityButton helperHandleCart={helperHandleCart} item={item} QUANTITY_DECREASE={QUANTITY_DECREASE} QUANTITY_INCREASE = {QUANTITY_INCREASE} />
			</div>
    </div>
  )
}

export default MainProductCard