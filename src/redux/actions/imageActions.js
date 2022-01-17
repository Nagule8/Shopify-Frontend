import { ActionTypes } from "../constants/imageAction-Types";

export const displayImage = (imagename, image) =>{
    return{
        type: ActionTypes.SET_IMAGE,
        payload: {
            imagename: imagename,
            image: image
        },

    };
};