import {useDispatch} from "react-redux";
import {setCategories} from "../redux/actions/productActions";
import CategoryDataService from "../services/category.service";

const FetchCategory = () => {
    const dispatch = useDispatch();

    const fetchCategories = async ()=>{
        const response = await CategoryDataService.getAll()
        .then((res)=>{
            if(res){
                dispatch(setCategories(res.data));
            }
        })
        .catch((err) => {
            console.log("Error: ",err);
        });
        
    };

    const deleteItem =async (itemid) => {
        if(window.confirm("Are you sure?")){
            await CategoryDataService.delete(itemid);
        }
    }
    return {
        fetchCategories, deleteItem

    }
}

export default FetchCategory
