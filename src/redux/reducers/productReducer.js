import { ActionTypes } from "../constants/productAction-Types";

const initialState = {
    products:[ ]
};

export const ProductReducer = (state = initialState,{type,payload})=>{

    switch(type){
        case ActionTypes.SET_PRODUCTS:
            return {...state, products:payload};
        case ActionTypes.CREATE_PRODUCT:
            return {
                ...state,
                products:[...state.products, payload]
            };
        case ActionTypes.DELETE_PRODUCT:
            return {
                products:[
                    ...state.products.filter((product) => product.id!==payload.id)
                ]
            };
        case ActionTypes.FILTER_PRODUCTS:
            if(payload == ""){  
                return{...state};
             }
            return{
                products:[...state.products.filter((product) => product.categoryId === payload)]
            }
        case ActionTypes.SEARCH_PRODUCTS:
            return {
                products:[
                    ...state.products.filter((product) => {
                        if(product.name.toLowerCase().includes(payload.toLowerCase())){
                            return product
                        }
                    })
                ]
            }
        case "Highest":
            return{
                products:[...state.products.sort((a, b)=> a.price <  b.price ? 1: -1)]
            }
        case "Lowest":
            return{
                products: [...state.products.sort((a, b)=> a.price >  b.price ? 1: -1)]
            }
        case "Alphabetic":
            return{
                products: [...state.products.sort((a, b)=> a.slug >  b.slug ? 1: -1)]
            }
        default :
            return state;
    }
}

export const selectedProductReducer = (state={},{type,payload})=>{
    switch(type){
        case ActionTypes.SELECTED_PRODUCT:
            return {...payload};
        case ActionTypes.REMOVE_SELECTED_PRODUCT:
            return {};
        default:
            return state;
    }
}

export const editProductReducer = (state={},{type, payload})=>{
    switch(type){
        case ActionTypes.EDIT_PRODUCT:
            return {...state, ...payload};
        default:
            return state;
    }
}
