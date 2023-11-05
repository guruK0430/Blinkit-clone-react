import React from 'react'
import styles from './text.module.css'
import classNames from 'classnames'

const Text = (props) => {
    const {className = "", children, ...rest} = props
  return (
    <p className={classNames(styles.text, className)} {...rest}>
        {children}
    </p>
  )
}

export default Text