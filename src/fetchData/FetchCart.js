import { useDispatch } from "react-redux";
import CartDataService from "../services/cartitems.service";
import {setCarts} from "../redux/actions/productActions";

const FetchCart = () => {
    const dispatch = useDispatch();

    const fetchCarts = async (userid)=>{
        const res = await CartDataService.getAll(userid)
            .catch((err) => {
                console.log("Error: ",err);
            });
            dispatch(setCarts(res.data));
    };

    const IncQuantity = async (id,quantity) => {
        await CartDataService.update(id,quantity)
        .catch((err)=>{
            console.log("Error:",err);
        });

        console.log(id,quantity);

    };

    const deleteCartItem = async (id) =>{
        await CartDataService.delete(id)
        .catch((err)=>{
            console.log("error:",err);
        });
        console.log(`cart item ${id}, Deleted.`);
    }

    return {
        fetchCarts, IncQuantity,
        deleteCartItem
    }
}

export default FetchCart
