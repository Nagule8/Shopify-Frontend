import { ActionTypes } from "../constants/categoryAction-Types";

const initialState = {
    categories:[],
};

export const CategoryReducer = (state = initialState,{type, payload})=>{
    switch(type){
        case ActionTypes.SET_CATEGORIES:
            return {...state,categories:payload};
        
        case ActionTypes.CREATE_CATEGORY:
            return {
                ...state,
                categories:[...state.categories, payload]};
        case ActionTypes.DELETE_CATEGORY:
            return {
                categories:[
                    ...state.categories.filter((category) => category.id !== payload.id)
                ]
            };
        default :
            return state;
    }
}

export const selectedCategoryReducer = (state={},{type, payload})=>{
    switch(type){
        case ActionTypes.SELECTED_CATEGORY:
            return {...state,...payload};
        default:
            return state;
    }
}

export const editCategoryReducer = (state={},{type, payload})=>{
    switch(type){
        case ActionTypes.EDIT_CATEGORY:
            return {...state, ...payload};
        default:
            return state;
    }
}