import React, { useState, } from 'react'
import './headerComponent.css'
import Logo from '../../atoms/logo/index'
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { setAllProducts, setSelectedCategory, setSelectedSubCategory } from '../main/mainredux/productsAction'
import productsData from '../../data/productsData.json'
import { Link } from 'react-router-dom';
import { handleCategory } from './helpers/headerComponent.productCategory';

const HeaderComponent = () => {

	const[cartCount, setCartCount] = useState(0)
	const [cartTotalAMount, setCartTotalAMount] = useState(0)

  	const dispatch = useDispatch();

	const { cartProducts, allProducts }  = useSelector((state) => ({
		cartProducts : state.cartReducer,
		allProducts : state.productsReducer.allProducts,
	}));  

	useEffect(() => {
		let count  = 0
		cartProducts?.forEach((items) => {
			console.log(items.qty)
			count += items.qty 
		})
		setCartCount(count)
	}, [cartProducts])


	// dispatch all Blink products from Json file (or) Endpoints
	useEffect(() => {
		dispatch(setAllProducts(productsData))
	}, [productsData])

	const helperHandleCategory = (productCatagory) => {
		handleCategory(productCatagory, dispatch, setSelectedCategory, setSelectedSubCategory)
	}

	useEffect(() => {
		const totalCartPrice = cartProducts.reduce(((totalPrice, item) => totalPrice + item.price * item.qty), 0)
		setCartTotalAMount(totalCartPrice)
	  }, [cartProducts])

	return (
		<div className='header-container'>
			<div className='header-section-1'>
				<Link to='/'><img src={Logo} alt='logo' className='logo' /></Link>
				<span className='location-constainer'>
					<strong className='delivery-time-text'>Dleivery in 11 minutes</strong>
					<p className='location-text'>Bengaluru, Karnataka, India</p>
				</span>
				<input className='header-search' type='text' placeholder='Search'/>
				<button className='login-btn'>Login</button>
				<Link to='/cart'><button className='cart-btn'>{cartCount === 0 ? "My Cart" : `${cartCount} items ${cartTotalAMount !== 0 ? `₹${cartTotalAMount}` : "" }`}</button></Link>
			</div>
			<div className='catagory-container'>
				{allProducts.map((item) => <Link to='/' key={item.id}><button className='catagory' onClick = {() => helperHandleCategory(item)}>{item.categoryName}</button></Link>)}
			</div>
		</div>
	)
}

export default HeaderComponent