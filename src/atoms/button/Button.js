import React from 'react'
import styles from './button.module.css'
import classNames from 'classnames'

const Button = (props) => {
    const {className = "", children, ...rest} = props
  return (
    <button className={classNames(className, styles.button)} {...rest}>
        {children}
    </button>
  )
}

export default Button