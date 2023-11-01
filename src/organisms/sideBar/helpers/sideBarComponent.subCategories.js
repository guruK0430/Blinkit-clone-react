
const handleSubCategory = (...props) => {
    const[ productSubCategory, dispatch, setSelectedSubCategory, setActiveSubCategory, selectedSubCategory ] = props
    setActiveSubCategory(productSubCategory?.id)
    if(selectedSubCategory.id !== productSubCategory?.id)
    dispatch(setSelectedSubCategory(productSubCategory))
}

export {
    handleSubCategory
}