import { ActionTypes } from "../constants/categoryAction-Types";

export const createCategory = (category) =>{
    return{
        type: ActionTypes.CREATE_CATEGORY,
        payload: category,

    };
};

export const setCategories = (categories) =>{
    return{
        type: ActionTypes.SET_CATEGORIES,
        payload: categories,

    };
};

export const selectedCategory = (category) =>{
    return{
        type: ActionTypes.SELECTED_CATEGORY,
        payload: category,
    };
};

export const editCategory = (category)=>{
    return{
        type: ActionTypes.EDIT_CATEGORY,
        payload: category,
    };
};

export const deleteCategory = (category)=>{
    return{
        type: ActionTypes.DELETE_CATEGORY,
        payload: category,
    };
};

