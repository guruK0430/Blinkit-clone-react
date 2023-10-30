import { ADD_PRODUCT_CART } from './cartType'

export const addToCart = (product) => {
    return{
        type: ADD_PRODUCT_CART,
        payLoad : product
    }
}
