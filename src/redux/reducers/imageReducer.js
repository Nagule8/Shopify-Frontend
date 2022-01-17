import { ActionTypes } from "../constants/imageAction-Types";

const initialState = {
    images:[],
};

export const ImageReducer = (state = initialState,{type, payload}) => {
    switch(type){
        case ActionTypes.SET_IMAGE:
            return {
                images:[...state.images, payload]
            };
        default :
            return state;
    }
}