import { ADD_PRODUCT_CART } from './cartType'

const intialState = []

const cartReducer = (state = intialState, action) => {
    switch(action.type){
        case ADD_PRODUCT_CART : {
            let existingProduct = false
            const updatedCart = state.map((cartItems) => {
				if(cartItems.id === action.payLoad.id && cartItems.subcategoryId === action.payLoad.subcategoryId && cartItems.categoryId === action.payLoad.categoryId){
                    existingProduct = true
					return action.payLoad
				}
				return cartItems
			})

            const finalCart = updatedCart.filter((item) => item.qty > 0)
            return existingProduct ? finalCart : [ ...state, action.payLoad ]
        }
        default:
            return state;
    }
}

export {
    cartReducer
}