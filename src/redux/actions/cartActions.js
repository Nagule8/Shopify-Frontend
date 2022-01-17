import { ActionTypes } from "../constants/cartAction-Types";

export const addCartItem = (cartItem) =>{
    return{
        type: ActionTypes.CREATE_CART,
        payload: cartItem,

    };
};

export const setCartItems = (cartItems) =>{
    return{
        type: ActionTypes.SET_CARTS,
        payload: cartItems,

    };
};

export const selectedCartItem = (cartItem) =>{
    return{
        type: ActionTypes.SELECTED_CART,
        payload: cartItem,
    };
};

export const editCartItem = (cartItem)=>{
    return{
        type: ActionTypes.EDIT_CART,
        payload: cartItem,
    };
};

export const deleteCartItems = (cartItem)=>{
    return{
        type: ActionTypes.DELETE_CART,
        payload: cartItem,
    };
};

