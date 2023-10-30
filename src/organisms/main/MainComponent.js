import React from 'react'
import './MainComponent.css'
import { useSelector, useDispatch } from 'react-redux';
import { addToCart } from '../cart/cartredux/CartAction';
import { setAllProducts, setSelectedSubCategory, setSelectedCategory } from './mainredux/ProductsAction'
import { QUANTITY_DECREASE, QUANTITY_INCREASE } from './Constants';
import { handleCart } from './helpers/mainComponent.cartList'

const MainComponent = () => {
    const { selectedSubCategory, cartProducts, allProducts }  = useSelector((state) => ({
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
			<span className='sort-dropdown'>
				<label className='sort-label' htmlFor="sort-products">sort By </label>
				<select id="sort-products">
					<option value="Relevance">Relevance</option>
					<option value="price(high to low)">price(high to low)</option>
					<option value="price(low to high)">price(low to high)</option>
					<option value="Form A to Z">Form A to Z</option>
				</select>
			</span>
		</div>
        <div className='products-section'>
        {selectedSubCategory?.products?.map((item, index) => 
            <div className='product-container' key={index}>
                <div className='product-image-container'><img className='product-image' src={item.image} /></div>
                <p className='product-title'>{item?.productName}</p>
				<p className='product-in-kilo'>{item?.kg} kg</p>
				<div className='price-quantity-container'>
					<strong>₹{item?.price}</strong>
					{item?.qty === 0 ? 
					<button className='add-to-cart' onClick={() => helperHandleCart(item, QUANTITY_INCREASE)}>ADD</button> :
					<div className='quantity-container'>
						<button className="quantity-btn" onClick={() => helperHandleCart(item, QUANTITY_DECREASE)}>-</button>
						<p>{item?.qty}</p>
						<button className="quantity-btn" onClick={() => helperHandleCart(item, QUANTITY_INCREASE)}>+</button>
					</div>
					}
				</div>
                
            </div>
        )}
        </div>
    </div>
  )
}

export default MainComponent