import { useDispatch } from "react-redux";

import {createCategory} from "../../../redux/actions/categoryActions";
import CategoryDataService from '../../../services/category.service';
import OfflineSync from "../../BackgroundSync/OfflineSync";

import Toastify from "../../ToastNotification/Toastify";

const HandleCategorySubmit = () => {
    const {saveCategoryInOffline} = OfflineSync();
    const { notifySuccess, notifyError } = Toastify();
    const dispatch = useDispatch();

    //post the category into the server
    const addCategory=async (e)=>{
        e.preventDefault();

        const name = e.target.Name.value;
        const data = {
            name
        }

        await CategoryDataService.create(data)
        .then((response)=>{
            notifySuccess(`${response.data.name} added.`);
            dispatch(createCategory(response.data));
        })
        .catch( (err) => {
            notifyError(err);
            //storing data in indexDB
            saveCategoryInOffline(data);
            //Background sync
            
        });
    };

    const editCategory=async (e)=>{
        e.preventDefault();

        const id = e.target.Id.value;
        const name = e.target.Name.value;
        const slug = e.target.Slug.value;
        const sorting = e.target.Sorting.value;
        const data = {
            id,
            name,
            slug,
            sorting
        }

        await CategoryDataService.update(id,data)
        .then((response)=>{
            notifySuccess(`Category added.`);
        })
        .catch( (err) => {
            notifyError(err);
            //storing data in indexDB
            
            //Background sync            
        });
    }    

    return{
        addCategory, editCategory
    }
}

export default HandleCategorySubmit