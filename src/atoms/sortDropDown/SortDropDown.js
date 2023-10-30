import React from 'react'
import './sortDropDown.css'

const SortDropDown = () => {
  return (
    <span className='sort-dropdown'>
        <label className='sort-label' htmlFor="sort-products">sort By </label>
        <select id="sort-products">
            <option value="Relevance">Relevance</option>
            <option value="price(high to low)">price(high to low)</option>
            <option value="price(low to high)">price(low to high)</option>
            <option value="Form A to Z">Form A to Z</option>
        </select>
    </span>
  )
}

export default SortDropDown