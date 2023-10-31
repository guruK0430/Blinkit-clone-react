import React from 'react'
import './mainProductCard.css'
import CartQuantityButton from '../../atoms/cartQuantityButton'

const MainProductCard = (props) => {
  const { helperHandleCart, item, QUANTITY_DECREASE, QUANTITY_INCREASE } = props
  return (
    <div className='product-container'>
        <div className='product-image-container'><img className='product-image' src={item.image} /></div>
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