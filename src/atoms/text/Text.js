import React from 'react'
import styles from './text.module.scss'
import classNames from 'classnames'
import PropTypes from 'prop-types'

const Text = (props) => {
    const {className = "", children, ...rest} = props
  return (
    <p className={classNames(styles.textContainer, className)} {...rest}>
        {children}
    </p>
  )
}

Text.propTypes = {
  className : PropTypes.string,
  children : PropTypes.node.isRequired,
}

export default Text