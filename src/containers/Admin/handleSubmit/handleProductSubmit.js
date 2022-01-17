import { useDispatch } from "react-redux";
import {useState} from 'react';

import {createProduct} from "../../../redux/actions/productActions";
import ProductDataService from "../../../services/product.service";
import ImageUploadService from '../../../services/imageUpload.service';
import OfflineSync from '../../BackgroundSync/OfflineSync';
import Toastify from "../../ToastNotification/Toastify";

const HandleProductSubmit = () => {
    var [imagename, setimagename] = useState("noimage.png");
    const { notifySuccess, notifyError } = Toastify();
    const {saveProductInOffline, saveImageOffline} = OfflineSync();
    const dispatch = useDispatch();

    //post the Product into the server
    const addProduct=async (e)=>{
        e.preventDefault();

        const name = e.target.Name.value;
        const description = e.target.Description.value;
        const price = e.target.Price.value;
        const categoryid = e.target.CategoryId.value;

        const data = {
            name,
            description,
            price,
            categoryid,
            imagename,
            
        };

        console.log("phot:",imagename);
         await ProductDataService.create(data)
        .then((response)=>{
            notifySuccess(`${response.data.name} Added.`);
            dispatch(createProduct(response.data));
        })
        .catch((err) => {
            notifyError(err);
            //storing data in indexDB
            saveProductInOffline(data);
            //Background sync
        });
    };

    const editProduct=async (e)=>{
        e.preventDefault();

        const id = e.target.Id.value;
        const name = e.target.Name.value;
        const description = e.target.Description.value;
        const price = e.target.Price.value;
        const categoryid = e.target.CategoryId.value;


        const data = {
            id,
            name,
            description,
            price,
            categoryid,
            imagename
        }

        console.log("Edited Product:",data);

        await ProductDataService.update(id, data)
        .then((response)=>{
            notifySuccess(`${response.data.name} Updated.`);
        })
        .catch( (err) => {
            notifyError(err);           
            //storing data in indexDB
            
            //Background sync
            
        });
    }

    const uploadImage=async (event)=>{
        event.preventDefault();

        setimagename(event.target.files[0].name);
        const formData = new FormData();
        formData.append("image", event.target.files[0]);

        await ImageUploadService.create(formData)
            .then((res)=>{
                notifySuccess("Image uploaded.");
            })
            .catch(err =>{
                notifyError(err);
                //storing image in IndexDB
                saveImageOffline(formData);        
        });
    };

    return{
        addProduct, editProduct, 
        uploadImage
    }
}

export default HandleProductSubmit;