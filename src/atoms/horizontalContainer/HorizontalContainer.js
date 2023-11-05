import React from 'react'
import styles from './horizontalContainer.module.css'
import classNames from 'classnames'

const HorizontalContainer = (props) => {
    const {className = "", children, ...rest} = props
  return (
    <div className={classNames(styles.horizontalContainer, className)}{...rest} >
        {children}
    </div>
  )
}

export default HorizontalContainer