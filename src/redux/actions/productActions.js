import { ActionTypes } from "../constants/action-types";

export const setProducts = (products) =>{
    return{
        type: ActionTypes.SET_PRODUCTS,
        payload: products,

    };
};

export const selectedProduct = (product) =>{
    return{
        type: ActionTypes.SELECTED_PRODUCT,
        payload: product,

    };
};

export const createProduct = (product) =>{
    return{
        type: ActionTypes.CREATE_PRODUCT,
        payload: product,

    };
};

export const deleteProduct = (id)=>{
    return{
        type: ActionTypes.DELETE_PRODUCT,
        payload: id,
    }
}

export const removeSelectedProduct = () =>{
    return{
        type: ActionTypes.REMOVE_SELECTED_PRODUCT,
    };
};

export const setCategories = (categories) =>{
    return{
        type: ActionTypes.SET_CATEGORIES,
        payload: categories,

    };
};

export const createCategory = (category) =>{
    return{
        type: ActionTypes.CREATE_CATEGORY,
        payload: category,

    };
};

export const deleteCategory = (id)=>{
    return{
        type: ActionTypes.DELETE_CATEGORY,
        payload: id,
    }
}

export const setCarts = (carts) =>{
    return{
        type: ActionTypes.SET_CARTS,
        payload: carts,

    };
};