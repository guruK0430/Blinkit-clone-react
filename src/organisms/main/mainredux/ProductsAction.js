import { SET_ALL_PRODUCTS, SET_SELECTED_CATEGORY, SET_SELECTED_SUBCATEGORY} from './ProductsType';

const setAllProducts = (products) => {
    return {
        type : SET_ALL_PRODUCTS,
        payload : products 
    }
}

const setSelectedCategory = (productCatagory) => {
    return {
        type: SET_SELECTED_CATEGORY,
        payload: productCatagory
    }
} 

const setSelectedSubCategory = (productSubCategory) => {
    return {
        type: SET_SELECTED_SUBCATEGORY,
        payload: productSubCategory
    }
} 

export {
    setAllProducts,
    setSelectedCategory,
    setSelectedSubCategory
}