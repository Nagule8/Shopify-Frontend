import { ActionTypes } from "../constants/toastAction-Types";

const initialState = {
    toasts:[ ]
};

export const toastsReducer = (state=initialState,{type, payload})=>{
    switch(type){
        case ActionTypes.ADD_TOAST:
            return {...state,
                toasts:[
                    ...state.toasts, payload
                ]
            };
        case ActionTypes.REMOVE_TOAST:
            return state.id !== payload;
        default:
            return state;
    }
}