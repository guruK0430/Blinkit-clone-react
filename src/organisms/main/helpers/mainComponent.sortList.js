import PropTypes from 'prop-types'

const handleProductSort = (...props) =>{

    const [ activeOption, selectedSubCategory, dispatch, setSelectedSubCategory, allProducts, selectedCategory, setAllProducts, REVELANCE, FROM_A_TO_Z, PRICE_HIGH_TO_LOW, PRICE_LOW_TO_HIGH ] = props

    const updateProductQuantity = allProducts.map((category) => {
        const categoryProducts = category.subCategories.map((subcatagory) => {	
            if(subcatagory.id === selectedSubCategory.id && category.id === selectedCategory.id){
                let productListAscending = []
                let mainProductsList = subcatagory?.products?.length > 0 ? [ ...subcatagory?.products ] : []

                productListAscending = mainProductsList?.sort((product1, product2) =>{
                    if(activeOption === REVELANCE){
                        return product1.id - product2.id
                    }
                    else if(activeOption === FROM_A_TO_Z){
                    if(product1.productName < product2.productName){
                        return -1
                    }
                    if(product1.productName > product2.productName){
                        return 1
                    }
                    return 0
                    }
                    else if(activeOption === PRICE_HIGH_TO_LOW){
                    return product2.price - product1.price
                    }
                    else if(activeOption === PRICE_LOW_TO_HIGH){
                    return product1.price - product2.price
                    }
                })
                dispatch(setSelectedSubCategory({ ...subcatagory, products: productListAscending}))
                return { ...subcatagory, products: productListAscending}
            }
            return subcatagory
        })   
        return { ...category, subCategories: categoryProducts}
    })
    dispatch(setAllProducts(updateProductQuantity))
}

handleProductSort.propTypes = {
    activeOption : PropTypes.string,
    selectedSubCategory: PropTypes.object,
    dispatch: PropTypes.func,
    setSelectedSubCategory: PropTypes.func,
    allProducts: PropTypes.array,
    selectedCategory: PropTypes.object,
    setAllProducts: PropTypes.func,
    REVELANCE : PropTypes.string,
    FROM_A_TO_Z : PropTypes.string,
    PRICE_HIGH_TO_LOW : PropTypes.string,
    PRICE_LOW_TO_HIGH : PropTypes.string,
}    


export default handleProductSort