import PropTypes from 'prop-types'

const handleCategory = (...props) => {
    const [ productCatagory, dispatch, setSelectedCategory, setSelectedSubCategory ] = props
    dispatch(setSelectedCategory(productCatagory))
    dispatch(setSelectedSubCategory(productCatagory.subCategories[0]))
}

handleCategory.propTypes = {
    productCatagory : PropTypes.object,
    dispatch : PropTypes.func,
    setSelectedCategory : PropTypes.func,
    setSelectedSubCategory : PropTypes.func,
  }

export {
    handleCategory
}