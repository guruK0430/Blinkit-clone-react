import React from 'react'
import styles from './input.module.css'
import classNames from 'classnames'

const Input = (props) => {
    const {className = "", children, ...rest} = props
  return (
    <input className={classNames(styles.input, className)} {...rest}>
        {children}
    </input>
  )
}

export default Input