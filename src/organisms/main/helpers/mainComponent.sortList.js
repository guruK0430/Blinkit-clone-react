const handleProductSort = (...props) =>{

    const [ activeOption, selectedSubCategory, dispatch, setSelectedSubCategory, allProducts, selectedCategory, setAllProducts ] = props

    console.log(allProducts, selectedSubCategory, selectedCategory)

    const updateProductQuantity = allProducts.map((category) => {
        const categoryProducts = category.subCategories.map((subcatagory) => {	
            if(subcatagory.id === selectedSubCategory.id && category.id === selectedCategory.id){
                let productListAscending = []
                let mainProductsList = subcatagory?.products?.length > 0 ? [ ...subcatagory?.products ] : []

                productListAscending = mainProductsList?.sort((product1, product2) =>{
                    if(activeOption === 'Relevance'){
                        return product1.id - product2.id
                    }
                    else if(activeOption === "Form A to Z"){
                    if(product1.productName < product2.productName){
                        return -1
                    }
                    if(product1.productName > product2.productName){
                        return 1
                    }
                    return 0
                    }
                    else if(activeOption === "price(high to low)"){
                    return product2.price - product1.price
                    }
                    else if(activeOption === "price(low to high)"){
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
    console.log(updateProductQuantity)
    }


export default handleProductSort