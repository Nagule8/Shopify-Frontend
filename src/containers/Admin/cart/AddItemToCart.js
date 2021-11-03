import React,{useEffect} from 'react';
import { useSelector } from 'react-redux';
import CartDataService from "../../../services/cartitems.service";
const AddItemToCart = () => {
    const user = useSelector(state => state.user);
    const selectedProduct = useSelector(state => state.product);

    const fetchToCart = async (userId)=>{
        const ItemId = selectedProduct.Id;
        const ItemName = selectedProduct.Name;
        const Quantity = 1;
        const Price = selectedProduct.Price;
        const ImageName = selectedProduct.ImageName;
        const RegisterUserId = user.userid;

        const data = {
            ItemId, ItemName,
            Quantity, Price, 
            ImageName, RegisterUserId
        };

        const res = await CartDataService.create(data).catch((err)=>{
            console.log(err);
        });
    }

    useEffect(()=>{
        fetchToCart();
    })
}

export default AddItemToCart
