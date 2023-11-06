import React from 'react'
import styles from './input.module.scss'
import classNames from 'classnames'
import PropTypes from 'prop-types'

const Input = (props) => {
    const {className = "", children, ...rest} = props
  return (
    <input className={classNames(styles.inputContainer, className)} {...rest}>
        {children}
    </input>
  )
}

Input.propTypes = {
  className : PropTypes.string,
  children : PropTypes.node,
}

export default Input