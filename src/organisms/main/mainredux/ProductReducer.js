import { SET_ALL_PRODUCTS, SET_SELECTED_CATEGORY, SET_SELECTED_SUBCATEGORY } from "./ProductsType";

const initialstate = {
    allProducts : [],
    selectedCategory : {},
    selectedSubCategory : {},
}

const productsReducer = (state = initialstate, action) => {
    switch(action.type){
        case SET_ALL_PRODUCTS : {
            return { ...state, allProducts : action.payload }
        }
        case SET_SELECTED_CATEGORY : {
            return { ...state, selectedCategory : action.payload }
        }
        case SET_SELECTED_SUBCATEGORY : {
            return { ...state, selectedSubCategory : action.payload }
        }
        default:
            return state;
    }
}

export {
    productsReducer
}