import {useDispatch, useSelector} from "react-redux";

import ProductDataService from "../services/product.service";
import ImageUploadService from "../services/imageUpload.service";
import { setProducts, deleteProduct } from "../redux/actions/productActions";
import { selectedProduct } from "../redux/actions/productActions";
import { displayImage } from "../redux/actions/imageActions";

import FetchCart from "./FetchCart";

import Toastify from "../containers/ToastNotification/Toastify";

const FetchProduct = () => {
    const dispatch = useDispatch();

    const sProduct = useSelector(state => state.product);
    const user = useSelector(state => state.user);
    const { addToCart } = FetchCart(); 
    const {notifySuccess, notifyError, notifyWarning} = Toastify();

    const fetchProducts = async ()=>{
        await ProductDataService.getAll()
        .then((response)=>{
            //console.log(response.data);
            fetchImage(response.data);
            dispatch(setProducts(response.data));
        })
        .catch((err) => {
            notifyError(err);
            console.log("Error: ",err);
        });
    };

    const fetchProductDetail = async (id)=>{
        const response = await ProductDataService.get(id)
        .catch((err) => {
            notifyError(err);
            console.log("Error: ",err);
        });
        dispatch(selectedProduct(response.data));
    };

    const fetchImage = async (products) => {
        
        products.map(async (product)=>{
            const imagename = product.imageName;
            var res = await ImageUploadService.getImage(imagename);
            dispatch(displayImage(imagename, res.data));
        });
    }

    const deleteItem =async (item) => {
        if(window.confirm("Are you sure?")){
            await ProductDataService.delete(item.id)
            .then((response)=>{
                console.log(response.data);
                notifyWarning(response.data);
                dispatch(deleteProduct(item));
            });
        }
    }

    const handleSubmit = async (e)=>{
        e.preventDefault();
  
        const ItemId = sProduct.id;
        const ItemName = sProduct.name;
        const Quantity = 1;
        const Price = sProduct.price;
        const ImageName = sProduct.imageName;
        const RegisterUserId = user.userid;

        const data = {
            ItemId, ItemName,
            Quantity, Price, 
            ImageName, RegisterUserId
        };

        addToCart(data);
    };    
    return {
        fetchProducts, fetchProductDetail, 
        deleteItem, handleSubmit
    }
}

export default FetchProduct
