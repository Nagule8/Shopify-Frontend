import React,{useEffect} from 'react';

import FetchCart from '../../../fetchData/FetchCart';

const AddItemToCart = () => {
    const {addToCart} = FetchCart();    

    useEffect(()=>{
        addToCart();
    })
}

export default AddItemToCart
