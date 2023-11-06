import React from 'react'
import styles from './footer.module.scss'
import Text from '../../atoms/text/index'

const Footer = () => {
  return (
    <Text className={styles.footerContainer}>“Blinkit” is owned & managed by "Blink Commerce Private Limited" (formerly known as Grofers India Private Limited) and is not related, linked or interconnected in whatsoever manner or nature, to “GROFFR.COM” which is a real estate services business operated by “Redstone Consultancy Services Private Limited”.</Text>
  )
}

export default Footer