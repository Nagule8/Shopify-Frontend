import React,{useState} from 'react';
import "../../Style/Login.css";
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { setUser } from '../../redux/actions/userActions';
import RegisterUserDataService from '../../services/registeruser.service';


const Login = () => {
    const [Name, setName] = useState("");
    const [Password, setPassword] = useState("");
    let histroy = useHistory();

    const dispatch = useDispatch();

    const login= async (e)=>{
        e.preventDefault();
        window.localStorage.setItem("Name",Name);
        const data = {Name,Password};

        await RegisterUserDataService.login(data)
        .catch((err)=>{
            console.log("Login Error:",err);
        });
        
        dispatch(setUser(data));

        histroy.push("/");
    };

    return (
        <div className="login">
            <form className="login__form" onSubmit={login}>
                <h1>Login,Here</h1>
                <input type="name" id="Name" placeholder="Email"
                onChange={(e)=> setName(e.target.value)}  />

                <input type="password" id="Password" placeholder="********" 
                onChange={(e)=> setPassword(e.target.value)} />

                <button type="submit" className="submit__btn">Submit</button>
            </form>
                   
            <a href="/SignUp">New User?</a>  
        </div>
    )
}

export default Login