import React,{useEffect} from "react";
import { useDispatch } from "react-redux";
import ProductComponent from "./ProductComponent";

import {setProducts} from "../../redux/actions/productActions";
import  ProductDataService from "../../services/product.service";

import FetchUser from "../../fetchData/FetchUser";

const ProductListing =()=>{
    const dispatch = useDispatch();
    const {fetchUser} = FetchUser();  

    const fetchProducts = async ()=>{
        const response = await ProductDataService.getAll()
        .catch((err) => {
            console.log("Error: ",err);
        });
        dispatch(setProducts(response.data));
    };

    useEffect(()=>{
        fetchProducts();
        fetchUser();
    },[]);

    return(

        <div className="ui grid container">
            <ProductComponent />
        </div>
    );
};

export default ProductListing;