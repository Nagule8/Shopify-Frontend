import { ActionTypes } from "../constants/action-types";

const initialState = {
    userid: 0,
};

export const userReducer = (state = initialState, {type,payload})=>{
    switch(type){
        case ActionTypes.SET_USER:
            return {...state,...payload};
        case ActionTypes.CREATE_USER:
            return {...state,...payload};
        case ActionTypes.GET_USER_ID:
            return {...state, userid:payload}
        default :
            return state;
    }
}