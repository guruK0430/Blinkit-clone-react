import logo from './logo.svg'
import styles from './logo.module.css'

const Logo = () =>{
    return (
        <div className={styles.logo_container}>
            <img src={logo} className={styles.logo} />
        </div>     
    )
}

export default Logo