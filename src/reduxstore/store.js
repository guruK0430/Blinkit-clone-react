import { configureStore } from "@reduxjs/toolkit";
import { productsReducer } from '../organisms/main/mainredux/productReducer'
import { cartReducer } from '../organisms/cart/cartredux/cartReducer'

const store = configureStore({
    reducer:{
        productsReducer : productsReducer,
        cartReducer : cartReducer
    }
})

export default store