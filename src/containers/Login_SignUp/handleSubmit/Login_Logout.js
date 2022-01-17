import RegisterUserDataService from '../../../services/registeruser.service';

const Login_Logout = () => {

    const logout = async ()=>{
        const res = await RegisterUserDataService.logout().catch((err)=>{
            console.log("Logout Error:",err);
        })

        console.log(res.data);
    };

    return{
         logout
    }
}

export default Login_Logout;