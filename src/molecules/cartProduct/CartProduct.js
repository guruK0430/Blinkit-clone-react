import React from 'react'
import CartQuantityButton from '../../atoms/cartQuantityButton/index'
import styles from './cartProduct.module.scss'
import HorizontalContainer from '../../atoms/horizontalContainer'
import Text from '../../atoms/text'
import PropTypes from 'prop-types'

const CartProduct = (props) => {
  const { helperHandleCart, item, QUANTITY_DECREASE, QUANTITY_INCREASE } = props
  return (
    <HorizontalContainer className={styles.cartProduct}>
        <HorizontalContainer className={styles.cartLeftSection}>
            <div className={styles.cartImgContainer}>
              <img className={styles.cartImg} src={item.image} alt={"img"}/>
            </div>
            <div className={styles.cartProductDetails}>
                <Text className={styles.cartTitle}>{item.productName}</Text>
                <Text className={styles.cartKilo}>{item.kg} kg</Text>
                <Text className={styles.cartPrice}>₹{item.price}</Text>
            </div>
        </HorizontalContainer>
        <CartQuantityButton helperHandleCart={helperHandleCart} item={item} QUANTITY_DECREASE={QUANTITY_DECREASE} QUANTITY_INCREASE = {QUANTITY_INCREASE} />
    </HorizontalContainer>
  )
}

CartProduct.propTypes = {
  helperHandleCart : PropTypes.func,
  item : PropTypes.object,
  QUANTITY_DECREASE : PropTypes.string,
  QUANTITY_INCREASE : PropTypes.string
}

export default CartProduct