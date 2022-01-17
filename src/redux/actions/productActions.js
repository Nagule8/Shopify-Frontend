import { ActionTypes } from "../constants/productAction-Types";

export const createProduct = (product) =>{
    return{
        type: ActionTypes.CREATE_PRODUCT,
        payload: product,

    };
};

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

export const editProduct = (product) =>{
    return{
        type: ActionTypes.EDIT_PRODUCT,
        payload: product,
    };
} ;

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

export const filteredProducts = (categoryId) => {
    return{
        type: ActionTypes.FILTER_PRODUCTS,
        payload:  categoryId
    }
}

export const sortedProducts = (sortValue, products) => {
    return{
        type: sortValue,
        products: products
    }
}

export const searchedProducts = (searchValue) => {
    return{
        type: ActionTypes.SEARCH_PRODUCTS,
        payload: searchValue
    }
}