import React from 'react';
import {  useSelector } from "react-redux";
import FilterFunctions from './FilterFunctions';
import "../../Style/Filter.css";

const Filter = ({count}) => {
    const categories = useSelector((state)=> state.allCategories.categories);
    const {filterProducts, sortProducts, searchProducts} = FilterFunctions();    

    return (
        <div className="filter">
            <div className="sort-product">
                {" "}
                Sort By : <select name="Sort" id="" onChange={sortProducts}>
                    <option value="Latest">Latest</option>
                    <option value="Highest">Highest</option>
                    <option value="Lowest">Lowest</option>
                    <option value="Alphabetic">Alphabetic</option>
                </select>
            </div>
            
            <div className="filter-product">
                Filter : 
                <select name="Filter" id="" onChange={filterProducts}>
                    <option value=""></option>
                    {                        
                        categories.map(category => {
                            return(
                                <option key={category.id} value={category.id}>{category.name}</option>
                            )
                        })
                    }
                </select>
            </div>
            
            <div className="search-product">
                Search:
                <input type="text" id="searchProduct" placeholder="Search..." onChange={searchProducts}  />
            </div>
            
        </div>
    )
}

export default Filter
