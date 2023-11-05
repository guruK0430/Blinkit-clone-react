import React, { useState, } from 'react'
import styles from './headerComponent.module.css'
import Logo from '../../atoms/logo/index'
import CartIcon from '../../atoms/cartIcon/CartIcon'
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { setAllProducts, setSelectedCategory, setSelectedSubCategory } from '../main/mainredux/productsAction'
import productsData from '../../data/productsData.json'
import { Link } from 'react-router-dom';
import { handleCategory } from './helpers/headerComponent.productCategory';
import VerticalContainer from '../../atoms/verticalContainer/index';
import HorizontalContainer from '../../atoms/horizontalContainer/index';
import Button from '../../atoms/button/index';
import HeaderLocationText from '../../atoms/headerLocationText/index';
import Text from '../../atoms/text/index';
import Input from '../../atoms/input/index';

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
			count += items.qty 
		})
		setCartCount(count)
	}, [cartProducts])


	// dispatch all Blink products from Json file (or) Endpoints
	useEffect(() => {
		if(allProducts.length < 1){
			dispatch(setAllProducts(productsData))
		}
	}, [productsData])

	const helperHandleCategory = (productCatagory) => {
		handleCategory(productCatagory, dispatch, setSelectedCategory, setSelectedSubCategory)
	}

	useEffect(() => {
		const totalCartPrice = cartProducts.reduce(((totalPrice, item) => totalPrice + item.price * item.qty), 0)
		setCartTotalAMount(totalCartPrice)
	}, [cartProducts])

	return (
		<VerticalContainer className={styles.headerContainer} >
			<HorizontalContainer className={styles.headerSection}>
				<Link to='/'>
					<Logo />
				</Link>
				<HeaderLocationText />
				<Input className={styles.headerSearch} type='text' placeholder='Search'/>
				<Button className={styles.loginBtn}>Login</Button>
				<Link to='/cart'>
					<Button className={styles.cartBtn}>
						<CartIcon />
						<Text className={styles.cartCountText}>{cartCount === 0 ? "My Cart" : `${cartCount} items ${cartTotalAMount !== 0 ? `₹${cartTotalAMount.toLocaleString("en-US")}` : "" }`}</Text>
					</Button>
				</Link>
			</HorizontalContainer>
			<HorizontalContainer className={styles.catagoryContainer}>
				{allProducts.map((item) => 
				<Link to='/' key={item.id}><Button className={styles.catagory} onClick = {() => helperHandleCategory(item)}>{item.categoryName}</Button></Link>
				)}
			</HorizontalContainer>
		</VerticalContainer>
	)
}

export default HeaderComponent