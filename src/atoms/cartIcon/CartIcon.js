import cartIcon from './cartIcon.png'
import styles from'./cartIcon.module.scss'

const CartIcon = () =>{
    return (
        <img className={styles.cartIcon} src= {cartIcon} alt='img' />
    )
}

export default CartIcon