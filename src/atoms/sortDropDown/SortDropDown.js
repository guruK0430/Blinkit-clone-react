import React from 'react'
import './sortDropDown.css'

const SortDropDown = (props) => {
  const { handleProductSort, REVELANCE, FROM_A_TO_Z, PRICE_HIGH_TO_LOW, PRICE_LOW_TO_HIGH } = props
  return (
    <span className='sort-dropdown'>
        <label className='sort-label' htmlFor="sort-products">sort By </label>
        <select id="sort-products" onChange={(e) => handleProductSort(e.target.value)}>
            <option value={REVELANCE}>Relevance</option>
            <option value={PRICE_HIGH_TO_LOW}>price(high to low)</option>
            <option value={PRICE_LOW_TO_HIGH}>price(low to high)</option>
            <option value={FROM_A_TO_Z} >Form A to Z</option>
        </select>
    </span>
  )
}

export default SortDropDown