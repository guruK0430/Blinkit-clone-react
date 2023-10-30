import { QUANTITY_DECREASE, QUANTITY_INCREASE } from '../Constants';

const handleCart = (...props) => {
    const [ product, quantityOperator, dispatch, setSelectedSubCategory, setAllProducts, addToCart, allProducts, setSelectedCategory ] = props

    const updateProductQuantity = allProducts.map((category) => {
        const categoryProducts = category.subCategories.map((subcatagory) => {	
            const subCategoryProducts = subcatagory.products.map(productData => {
                if(productData.id === product.id && subcatagory.id === product.subcategoryId && category.id === product.categoryId){
                    return (quantityOperator === QUANTITY_DECREASE) ? { ...productData, qty: productData.qty - 1 } : { ...productData, qty: productData.qty + 1 }
                }
                return productData
            })
            if(product.subcategoryId === subcatagory.id && category.id === product.categoryId){
                dispatch(setSelectedSubCategory({...subcatagory, products: subCategoryProducts}))
            }
            return {...subcatagory, products: subCategoryProducts}
        })
        if(category.id === product.categoryId){
            dispatch(setSelectedCategory({ ...category, subCategories: categoryProducts}))
        }
        return { ...category, subCategories: categoryProducts}
    })
    dispatch(setAllProducts(updateProductQuantity))
    
    if(quantityOperator === QUANTITY_DECREASE){
        dispatch(addToCart({...product, qty : product.qty - 1}))
    }
    else if (quantityOperator === QUANTITY_INCREASE){
        dispatch(addToCart({...product, qty : product.qty + 1}))
    }
}

export {
    handleCart
}