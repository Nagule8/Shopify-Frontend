import React,{useState ,useEffect} from "react";

import ProductComponent from "./ProductComponent";
import FetchUser from "../../fetchData/FetchUser";
import FetchProduct from "../../fetchData/FetchProduct";
import FetchCategory from "../../fetchData/FetchCategory";
import Filter from "../Filter/Filter";


const ProductListing =()=>{    
    const {fetchUser} = FetchUser();  
    const {fetchProducts} = FetchProduct();
    const {fetchCategories} = FetchCategory();

    useEffect(()=>{
        fetchProducts();
        fetchCategories();
        fetchUser();
    },[]);

    return(
        <div className="ui grid container">
            <Filter />
            <ProductComponent />
        </div>
    );
};

export default ProductListing;