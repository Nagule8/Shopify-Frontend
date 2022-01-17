import { useDispatch } from "react-redux";
import CartDataService from "../services/cartitems.service";
import {setCartItems, deleteCartItems} from "../redux/actions/cartActions";
import Toastify from "../containers/ToastNotification/Toastify";

const FetchCart = () => {
    const dispatch = useDispatch();
    const {notifySuccess, notifyError, notifyWarning} = Toastify();

    const fetchCarts = async (userid)=>{
        await CartDataService.getAll(userid)
        .then((response)=>{
            dispatch(setCartItems(response.data));
        })
        .catch((err) => {
            notifyError(err);
        });
            
    };

    const IncQuantity = async (id,quantity) => {
        await CartDataService.update(id,quantity)
        .then(()=>{
            notifySuccess("Quantity Increased.");
        })
        .catch((err)=>{
            notifyError(err);
        });

        console.log(id,quantity);
    };

    const deleteCartItem = async (cartItem) =>{
        if(window.confirm("Are you sure?")){
            await CartDataService.delete(cartItem.id)
            .then((res)=>{
                notifyWarning(`${cartItem.itemName} deleted.`);
                dispatch(deleteCartItems(cartItem));
            })
            .catch((err)=>{
                notifyError(err);
            });
        }
    }

    const addToCart = async (data)=>{

        const res = await CartDataService.create(data)
        .then((res)=>{
            notifySuccess("Product added.");
        })
        .catch((err)=>{
            notifyError(err);
        });
    }

    return {
        fetchCarts, IncQuantity,
        deleteCartItem, addToCart
    }
}

export default FetchCart
