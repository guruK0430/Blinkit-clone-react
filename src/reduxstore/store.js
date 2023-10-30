import { configureStore } from "@reduxjs/toolkit";
import {productsReducer} from '../organisms/main/mainredux/ProductReducer'
import { cartReducer } from '../organisms/cart/cartredux/CartReducer'

const store = configureStore({
    reducer:{
        productsReducer : productsReducer,
        cartReducer : cartReducer
    }
})

export default store