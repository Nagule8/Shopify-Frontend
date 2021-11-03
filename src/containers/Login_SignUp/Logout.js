import React,{useEffect} from 'react';
import { useHistory } from 'react-router-dom';

import RegisterUserDataService from '../../services/registeruser.service';

const Logout = () => {
    let histroy = useHistory();

    const logout = async ()=>{
        const res = await RegisterUserDataService.logout().catch((err)=>{
            console.log("Logout Error:",err);
        })

        console.log(res.data);
    }


    useEffect(()=>{
        window.localStorage.removeItem("token");
        window.localStorage.removeItem("Name");
        logout();
        histroy.push("/");
    })

    return (
        <div>
            Logged out.
        </div>
    )
}

export default Logout
