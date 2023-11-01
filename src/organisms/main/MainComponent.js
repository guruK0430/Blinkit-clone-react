import React, { useEffect, useState } from 'react'
import './mainComponent.css'
import { useSelector, useDispatch } from 'react-redux';
import { addToCart } from '../cart/cartredux/cartAction';
import { setAllProducts, setSelectedSubCategory, setSelectedCategory } from './mainredux/productsAction'
import { QUANTITY_DECREASE, QUANTITY_INCREASE } from './constants/mainComponent.productQuantity';
import { handleCart } from './helpers/mainComponent.cartList'
import MainProductCard from '../../molecules/mainProductCard/index';
import SortDropDown from '../../atoms/sortDropDown/index';
import handleProductSort from './helpers/mainComponent.sortList';

const MainComponent = () => {
    const { selectedSubCategory, allProducts, selectedCategory }  = useSelector((state) => ({
		selectedSubCategory : state.productsReducer.selectedSubCategory,
		allProducts : state.productsReducer.allProducts,
    selectedCategory : state.productsReducer.selectedCategory
	}));  
  const dispatch = useDispatch()

  const[activeSortOption, setActiveSortOption] = useState('Relevance')

	const helperHandleCart = (product, quantityOperator) => {
		handleCart(product, quantityOperator, dispatch, setSelectedSubCategory, setAllProducts, addToCart, allProducts, setSelectedCategory)
	}

  const helperHandleProductSort = (activeOption) =>{
    setActiveSortOption(activeOption)
    handleProductSort(activeOption, selectedSubCategory, dispatch, setSelectedSubCategory, allProducts, selectedCategory, setAllProducts)
  }

  useEffect(() => {
    if(selectedSubCategory?.products?.length > 0){
      helperHandleProductSort(activeSortOption)
    }
  }, [selectedSubCategory.id, selectedCategory.id])

  return (
    <div className='main-container'>
        <div className='sorting-section'>
			<strong>Buy Products Online</strong>
			{
        <SortDropDown handleProductSort={helperHandleProductSort}/>
        }
		</div>
        <div className='products-section'>
        {selectedSubCategory?.products?.map((item) => 
			  <MainProductCard             
			      item={item} 
            helperHandleCart={helperHandleCart} 
            QUANTITY_DECREASE={QUANTITY_DECREASE} 
            QUANTITY_INCREASE = {QUANTITY_INCREASE} 
            key={item.id}
			  />
        )}
        </div>
    </div>
  )
}

export default MainComponent