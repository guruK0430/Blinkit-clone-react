import React from 'react'
import './cartQuantityButton.css'

const CartQuantityButton = (props) => {
  const { helperHandleCart, item, QUANTITY_DECREASE, QUANTITY_INCREASE } = props

  return (
  <>
      {props.item?.qty === 0 ? 
        <button className='add-to-cart' onClick={() => helperHandleCart(item, QUANTITY_INCREASE)}>ADD</button> :
        <div className='quantity-container'>
            <button className="quantity-btn" onClick={() => helperHandleCart(item, QUANTITY_DECREASE)}>-</button>
            <p>{props.item?.qty}</p>
            <button className="quantity-btn" onClick={() => helperHandleCart(item, QUANTITY_INCREASE)}>+</button>
        </div>
        }
  </>
  )
}

export default CartQuantityButton