import React from 'react'
import './mainProductCard.css'
import CartQuantityButton from '../../atoms/cartQuantityButton'

const MainProductCard = (props) => {
  return (
    <div className='product-container' key={props.index}>
        <div className='product-image-container'><img className='product-image' src={props.item.image} /></div>
            <p className='product-title'>{props.item?.productName}</p>
			<p className='product-in-kilo'>{props.item?.kg} kg</p>
			<div className='price-quantity-container'>
				<strong>₹{props.item?.price}</strong>
                <CartQuantityButton helperHandleCart={props.helperHandleCart} item={props.item} QUANTITY_DECREASE={props.QUANTITY_DECREASE} QUANTITY_INCREASE = {props.QUANTITY_INCREASE} />
			</div>
    </div>
  )
}

export default MainProductCard