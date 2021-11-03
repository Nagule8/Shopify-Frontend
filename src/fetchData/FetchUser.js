import { useDispatch } from "react-redux";

import {getUserId} from "../redux/actions/userActions";
import UserIdDataService from "../services/getuserid.service";
import { setUser } from "../redux/actions/userActions";


const FetchUser = () => {
    const dispatch = useDispatch();

    const fetchUserId = async (username)=>{
        const user = (username);
        if(user){
            const response = await UserIdDataService.get((user))
            .catch((err) => {
                console.log("Error: ",err);
            });
            dispatch(getUserId(response.data));
        }
    };

    const fetchUser = ()=>{
        const Name = window.localStorage.getItem("Name");
        const Password = window.localStorage.getItem("Password");
    
        dispatch(setUser({Name,Password}));
    };
    return {
        fetchUserId, fetchUser
    }
};

export default FetchUser
