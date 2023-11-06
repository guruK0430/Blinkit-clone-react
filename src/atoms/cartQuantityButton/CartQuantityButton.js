import React from 'react'
import styles from './cartQuantityButton.module.scss'
import PropTypes from 'prop-types'

const CartQuantityButton = (props) => {
  const { helperHandleCart, item, QUANTITY_DECREASE, QUANTITY_INCREASE } = props

  return (
  <>
      {props.item?.qty === 0 ? 
        <button className={styles.addToCart} onClick={() => helperHandleCart(item, QUANTITY_INCREASE)}>ADD</button> :
        <div className={styles.quantityContainer}>
            <button className={styles.quantityBtn} onClick={() => helperHandleCart(item, QUANTITY_DECREASE)}>-</button>
            <p>{props.item?.qty}</p>
            <button className={styles.quantityBtn} onClick={() => helperHandleCart(item, QUANTITY_INCREASE)}>+</button>
        </div>
        }
  </>
  )
}

CartQuantityButton.propTypes = {
  helperHandleCart : PropTypes.func,
  item : PropTypes.object,
  QUANTITY_DECREASE : PropTypes.string,
  QUANTITY_INCREASE : PropTypes.string
}

export default CartQuantityButton