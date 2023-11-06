import React from 'react'
import styles from './horizontalContainer.module.scss'
import classNames from 'classnames'
import PropTypes from 'prop-types'

const HorizontalContainer = (props) => {
    const {className = "", children, ...rest} = props
  return (
    <div className={classNames(styles.horizontalContainer, className)}{...rest} >
        {children}
    </div>
  )
}

HorizontalContainer.propTypes = {
  className : PropTypes.string,
  children : PropTypes.node,
}

export default HorizontalContainer