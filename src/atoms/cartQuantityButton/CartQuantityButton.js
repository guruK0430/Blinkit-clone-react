import React from 'react'
import './cartQuantityButton.css'

const CartQuantityButton = (props) => {

  return (
  <>
      {props.item?.qty === 0 ? 
        <button className='add-to-cart' onClick={() => props.helperHandleCart(props.item, props.QUANTITY_INCREASE)}>ADD</button> :
        <div className='quantity-container'>
            <button className="quantity-btn" onClick={() => props.helperHandleCart(props.item, props.QUANTITY_DECREASE)}>-</button>
            <p>{props.item?.qty}</p>
            <button className="quantity-btn" onClick={() => props.helperHandleCart(props.item, props.QUANTITY_INCREASE)}>+</button>
        </div>
        }
  </>

  )
}

export default CartQuantityButton