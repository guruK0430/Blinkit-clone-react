import React, { useEffect, useState } from 'react'
import './sideBarComponent.css'
import { useDispatch, useSelector } from 'react-redux';
import { setSelectedSubCategory, setSelectedCategory } from '../main/mainredux/productsAction'
import { handleSubCategory } from './helpers/sideBarComponent.subCategories'

const SideBarComponent = () => {
    const { allProducts, selectedCategory }  = useSelector((state) => state.productsReducer);
    const [activeSubCategory, setActiveSubCategory] = useState(1)

    const dispatch = useDispatch();

    useEffect(() => {
        if(allProducts.length > 0 && !selectedCategory.id){
            dispatch(setSelectedCategory(allProducts[0]))
            dispatch(setSelectedSubCategory(allProducts[0].subCategories[0]))
        }
    }, [JSON.stringify(allProducts)])

    const helperHandleSubCategory = (productSubCategory) => {
        handleSubCategory(productSubCategory, dispatch, setSelectedSubCategory, setActiveSubCategory)
    }

    return (
        <div className='sidebar-container'>
            {selectedCategory?.subCategories?.map((item, index) => 
            <div className={item.id === activeSubCategory ? 'subcatagory-items active' : 'subcatagory-items'} onClick={() => helperHandleSubCategory(item)} key={index}>
                <div className='subcatagory-image-container'>
                    <img className='subcatagory-image' src={item?.subCategoryImage} alt={"image"}/>
                </div>
                <p>{item?.subCategoryName}</p>
                
            </div>)}
        </div>
    )
}

export default SideBarComponent