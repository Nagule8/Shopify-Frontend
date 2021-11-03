import {useDispatch, useSelector} from "react-redux";
import { selectedProduct } from "../redux/actions/productActions";
import CartDataService from "../services/cartitems.service";

import ProductDataService from "../services/product.service";

const FetchProduct = () => {
    const dispatch = useDispatch();
    const sProduct = useSelector(state => state.product);
    const user = useSelector(state => state.user);

    const fetchProductDetail = async (id)=>{
        const response = await ProductDataService.get(id)
        .catch((err) => {
            console.log("Error: ",err);
        });
        dispatch(selectedProduct(response.data));
    };

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
  
        await CartDataService.create(data).catch((err)=>{
          console.log(err);
      });
      };

    
    return {
        fetchProductDetail, handleSubmit,
    }
}

export default FetchProduct
