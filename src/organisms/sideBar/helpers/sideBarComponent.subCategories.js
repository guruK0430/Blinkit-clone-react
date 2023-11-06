import PropTypes from 'prop-types'

const handleSubCategory = (...props) => {
    const[ productSubCategory, dispatch, setSelectedSubCategory, setActiveSubCategory, selectedSubCategory ] = props
    setActiveSubCategory(productSubCategory?.id)
    if(selectedSubCategory.id !== productSubCategory?.id)
    dispatch(setSelectedSubCategory(productSubCategory))
}

handleSubCategory.propTypes = {
    productSubCategory: PropTypes.object,
    dispatch: PropTypes.func,
    setSelectedSubCategory: PropTypes.func,
    setActiveSubCategory: PropTypes.func,
    selectedSubCategory: PropTypes.func,
}   

export {
    handleSubCategory
}