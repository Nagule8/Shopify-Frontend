import { ActionTypes } from "../constants/toastAction-Types";
import createToast from "../../containers/ToastNotification/createToast";

export const addToast = (options={}) =>{

    return{
        type: ActionTypes.ADD_TOAST,
        payload: createToast(options),

    };
};

export const removeToast = (id) =>{
    return{
        type: ActionTypes.REMOVE_TOAST,
        payload: id,

    };
};