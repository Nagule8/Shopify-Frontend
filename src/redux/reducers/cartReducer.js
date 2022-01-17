import { ActionTypes } from "../constants/cartAction-Types";

const iniCartState = {
    carts:[],
};

export const CartReducer = (state = iniCartState,{type,payload})=>{
    switch(type){
        case ActionTypes.SET_CARTS:
            return {...state,carts:payload};
        case ActionTypes.CREATE_CART:
            return {
                ...state,
                carts:[...state.carts,payload]
            };
        case ActionTypes.DELETE_CART:
            return {
                carts:[
                    ...state.carts.filter((cart) => cart.id !== payload.id)
                ]
            };
        default :
            return state;
    }
}