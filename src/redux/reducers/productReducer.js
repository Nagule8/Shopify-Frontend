import { ActionTypes } from "../constants/action-types";

const initialState = {
    products:[ ],
};
const iniCatState = {
    categories:[],
};
const iniCartState = {
    carts:[],
}

export const productReducer = (state = initialState,{type,payload})=>{
    switch(type){
        case ActionTypes.SET_PRODUCTS:
            return {...state,products:payload};
        default :
            return state;
    }
}

export const createProductReducer = (state = [],{type,payload})=>{
    switch(type){
        case ActionTypes.CREATE_PRODUCT:
            return {...state,...payload};
        default :
            return state;
    }
}

export const deleteProductReducer = (state = initialState,{type,payload})=>{
    switch(type){
        case ActionTypes.DELETE_PRODUCT:
            return state.products.filter(({id}) => id!==payload.id);
        default :
            return state;
    }
}

export const selectedProductReducer = (state={},{type,payload})=>{
    switch(type){
        case ActionTypes.SELECTED_PRODUCT:
            return {...state,...payload};
        case ActionTypes.REMOVE_SELECTED_PRODUCT:
            return {};
        default:
            return state;
    }
}

export const categoryReducer = (state = iniCatState,{type,payload})=>{
    switch(type){
        case ActionTypes.SET_CATEGORIES:
            return {...state,categories:payload};
        default :
            return state;
    }
}

export const createCategoryReducer = (state = [],{type,payload})=>{
    switch(type){
        case ActionTypes.CREATE_CATEGORY:
            return {...state,...payload};
        default :
            return state;
    }
}

export const cartReducer = (state = iniCartState,{type,payload})=>{
    switch(type){
        case ActionTypes.SET_CARTS:
            return {...state,carts:payload};
        default :
            return state;
    }
}