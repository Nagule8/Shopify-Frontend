import {useDispatch} from "react-redux";
import {setCategories, deleteCategory} from "../redux/actions/categoryActions";
import CategoryDataService from "../services/category.service";
import Toastify from "../containers/ToastNotification/Toastify";

const FetchCategory = () => {
    const dispatch = useDispatch();
    const {notifyError, notifyWarning} = Toastify();

    const fetchCategories = async ()=>{
        await CategoryDataService.getAll()
        .then((res)=>{
                dispatch(setCategories(res.data));
        })
        .catch((err) => {
            notifyError(err);
            console.log("Error: ",err);
        });
        
    };

    const deleteItem =async (category) => {
        if(window.confirm("Are you sure?")){
            await CategoryDataService.delete(category.id)
            .then((response)=>{
                notifyWarning(response.data);
                dispatch(deleteCategory(category));
                console.log(response.data);
            })
            .catch((error)=>{
                notifyError(error);
                console.log("Error deleting the category",error);   
            })
        }
    }
    return {
        fetchCategories, deleteItem

    }
}

export default FetchCategory
