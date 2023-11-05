import React, { useEffect, useState } from 'react'
import './sideBarComponent.css'
import { useDispatch, useSelector } from 'react-redux';
import { setSelectedSubCategory, setSelectedCategory } from '../main/mainredux/productsAction'
import { handleSubCategory } from './helpers/sideBarComponent.subCategories'
import VerticalContainer from '../../atoms/verticalContainer/index';
import HorizontalContainer from '../../atoms/horizontalContainer/index';
import Text from '../../atoms/text/index';

const SideBarComponent = () => {
    const { allProducts, selectedCategory, selectedSubCategory }  = useSelector((state) => ({
        allProducts: state.productsReducer.allProducts,
        selectedCategory : state.productsReducer.selectedCategory,
        selectedSubCategory : state.productsReducer.selectedSubCategory
    }));
    const [activeSubCategory, setActiveSubCategory] = useState(1)

    const dispatch = useDispatch();

    useEffect(() => {
        if(allProducts.length > 0 && !selectedCategory.id){
            dispatch(setSelectedCategory(allProducts[0]))
            dispatch(setSelectedSubCategory(allProducts[0].subCategories[0]))
        }
    }, [allProducts])

    useEffect(() => {
       if(selectedCategory?.subCategories?.length > 0){
        setActiveSubCategory(selectedCategory.subCategories[0].id)
       }
    },[selectedCategory.id])

    const helperHandleSubCategory = (productSubCategory) => {
        console.log(productSubCategory,"called")
        handleSubCategory(productSubCategory, dispatch, setSelectedSubCategory, setActiveSubCategory, selectedSubCategory)
    }

    return (
        <VerticalContainer className='sidebar-container'>
            {selectedCategory?.subCategories?.map((item, index) => 
            <HorizontalContainer className={item.id === activeSubCategory ? 'subcatagory-items active' : 'subcatagory-items'} onClick={() => helperHandleSubCategory(item)} key={index}>
                <div className='subcatagory-image-container'>
                    <img className='subcatagory-image' src={item?.subCategoryImage}/>
                </div>
                <Text>{item?.subCategoryName}</Text>
                
            </HorizontalContainer>)}
        </VerticalContainer>
    )
}

export default SideBarComponent