import React,{useEffect} from 'react';
import { useHistory } from 'react-router-dom';
import Login_Logout from './handleSubmit/Login_Logout';

const Logout = () => {
    let histroy = useHistory();
    const {logout} = Login_Logout();
    


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
