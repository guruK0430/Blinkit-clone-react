
const handleSubCategory = (...props) => {
    const[ productSubCategory, dispatch, setSelectedSubCategory, setActiveSubCategory ] = props
    setActiveSubCategory(productSubCategory?.id)
    dispatch(setSelectedSubCategory(productSubCategory))
}

export {
    handleSubCategory
}