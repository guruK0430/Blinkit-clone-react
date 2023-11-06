import React from 'react'
import styles from './verticalContainer.module.scss'
import classNames from 'classnames'
import PropTypes from 'prop-types'

const VerticalContainer = (props) => {
  const {className = "", children, ...rest} = props
  return (
    <div className={classNames(styles.verticalConatiner, className)} {...rest} >
        {children}
    </div>
  )
}

VerticalContainer.propTypes = {
  className : PropTypes.string,
  children : PropTypes.node,
}

export default VerticalContainer