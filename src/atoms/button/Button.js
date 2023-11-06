import React from 'react'
import styles from './button.module.scss'
import classNames from 'classnames'
import PropTypes from 'prop-types'

const Button = (props) => {
    const {className = "", children, ...rest} = props
  return (
    <button className={classNames(styles.buttonContainer, className)} {...rest}>
        {children}
    </button>
  )
}

Button.propTypes = {
  className : PropTypes.string,
  children : PropTypes.node.isRequired,
}

export default Button