import React from 'react'
import styles from './headerLocationText.module.scss'

const HeaderLocationText = () => {
  return (
    <span className={styles.locationContainer}>
        <strong className={styles.deliveryTimeText}>Dleivery in 11 minutes</strong>
        <p className={styles.locationText}>Bengaluru, Karnataka, India</p>
    </span>
  )
}

export default HeaderLocationText