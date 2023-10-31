import React from 'react'
import './mainComponent.css'
import { useSelector, useDispatch } from 'react-redux';
import { addToCart } from '../cart/cartredux/cartAction';
import { setAllProducts, setSelectedSubCategory, setSelectedCategory } from './mainredux/productsAction'
import { QUANTITY_DECREASE, QUANTITY_INCREASE } from './constants/mainComponent.productQuantity';
import { handleCart } from './helpers/mainComponent.cartList'
import MainProductCard from '../../molecules/mainProductCard/index';
import SortDropDown from '../../atoms/sortDropDown/index';

const MainComponent = () => {
    const { selectedSubCategory, allProducts }  = useSelector((state) => ({
		selectedSubCategory : state.productsReducer.selectedSubCategory,
		cartProducts : state.cartReducer,
		allProducts : state.productsReducer.allProducts,
	}));  
  const dispatch = useDispatch()

	const helperHandleCart = (product, quantityOperator) => {
		handleCart(product, quantityOperator, dispatch, setSelectedSubCategory, setAllProducts, addToCart, allProducts, setSelectedCategory)
	}

  return (
    <div className='main-container'>
        <div className='sorting-section'>
			<strong>Buy Products Online</strong>
			<SortDropDown />
		</div>
        <div className='products-section'>
        {selectedSubCategory?.products?.map((item, index) => 
			  <MainProductCard             
			      item={item} 
            helperHandleCart={helperHandleCart} 
            QUANTITY_DECREASE={QUANTITY_DECREASE} 
            QUANTITY_INCREASE = {QUANTITY_INCREASE} 
            key={index}
			  />
        )}
        </div>
    </div>
  )
}

export default MainComponent