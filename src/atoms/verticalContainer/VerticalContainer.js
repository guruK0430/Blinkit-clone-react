import React from 'react'
import styles from './verticalContainer.module.css'
import classNames from 'classnames'

const VerticalContainer = (props) => {
  const {className = "", children, ...rest} = props
  return (
    <div className={classNames(styles.verticalConatiner, className)} {...rest} >
        {children}
    </div>
  )
}

export default VerticalContainer