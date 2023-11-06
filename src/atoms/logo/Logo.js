import logo from './logo.svg'
import styles from './logo.module.scss'

const Logo = () =>{
    return (
        <div className={styles.logoContainer}>
            <img src={logo} className={styles.logo} />
        </div>     
    )
}

export default Logo