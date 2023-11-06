import React from 'react'
import styles from './sortDropDown.module.scss'
import PropTypes from 'prop-types'


const SortDropDown = (props) => {
  const { handleProductSort, REVELANCE, FROM_A_TO_Z, PRICE_HIGH_TO_LOW, PRICE_LOW_TO_HIGH } = props
  return (
    <span className={styles.sortDropdown}>
        <label className={styles.sortLabel}>sort By </label>
        <select onChange={(e) => handleProductSort(e.target.value)}>
            <option value={REVELANCE}>Relevance</option>
            <option value={PRICE_HIGH_TO_LOW}>price(high to low)</option>
            <option value={PRICE_LOW_TO_HIGH}>price(low to high)</option>
            <option value={FROM_A_TO_Z} >Form A to Z</option>
        </select>
    </span>
  )
}

SortDropDown.propTypes = {
  handleProductSort : PropTypes.func,
  REVELANCE : PropTypes.string,
  FROM_A_TO_Z : PropTypes.string,
  PRICE_HIGH_TO_LOW : PropTypes.string,
  PRICE_LOW_TO_HIGH : PropTypes.string,
}

export default SortDropDown