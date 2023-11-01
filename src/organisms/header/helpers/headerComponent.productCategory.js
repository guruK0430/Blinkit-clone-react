const handleCategory = (...props) => {
    const [ productCatagory, dispatch, setSelectedCategory, setSelectedSubCategory ] = props
    console.log(productCatagory)
    dispatch(setSelectedCategory(productCatagory))
    dispatch(setSelectedSubCategory(productCatagory.subCategories[0]))
}

export {
    handleCategory
}