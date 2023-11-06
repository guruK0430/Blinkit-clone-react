import React from 'react'
import styles from './mainProductCard.module.scss'
import CartQuantityButton from '../../atoms/cartQuantityButton'
import DiscountBackground from '../../atoms/discountBackground/index'
import Text from '../../atoms/text/index'
import HorizontalContainer from '../../atoms/horizontalContainer'
import PropTypes from 'prop-types'

const MainProductCard = (props) => {
  const { helperHandleCart, item, QUANTITY_DECREASE, QUANTITY_INCREASE } = props
  return (
    <div className={styles.productContainer}>
      <img className={styles.discountBackground} src= {DiscountBackground} />
      <Text className={styles.discountValue}>{item?.discount}%<br />OFF</Text>
      <div className={styles.productImageContainer}><img className={styles.productImage} src={item.image} alt={"img"} /></div>
      <Text className={styles.productTitle}>{item?.productName}</Text>
			<Text className={styles.productInKilo}>{item?.kg} kg</Text>
			<HorizontalContainer className={styles.priceQuantityContainer}>
				<strong>₹{item?.price}</strong>
         <CartQuantityButton helperHandleCart={helperHandleCart} item={item} QUANTITY_DECREASE={QUANTITY_DECREASE} QUANTITY_INCREASE = {QUANTITY_INCREASE} />
			</HorizontalContainer>
    </div>
  )
}

MainProductCard.propTypes = {
  helperHandleCart : PropTypes.func,
  item : PropTypes.object,
  QUANTITY_DECREASE : PropTypes.string,
  QUANTITY_INCREASE : PropTypes.string
}

export default MainProductCard