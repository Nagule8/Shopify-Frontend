import { ActionTypes } from "../constants/userAction-Types";

export const setUser = (user) =>{

    return{
        type: ActionTypes.SET_USER,
        payload: user,

    };
};

export const createUser = (user) =>{
    return{
        type: ActionTypes.CREATE_USER,
        payload: user,

    };
};

export const getUserId = (userid)=>{
    return{
        type: ActionTypes.GET_USER_ID,
        payload: userid,
    }
}