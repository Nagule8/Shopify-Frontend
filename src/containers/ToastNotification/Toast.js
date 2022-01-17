import React from "react";
import "../../Style/Toasts.css";
import { useDispatch, useSelector } from "react-redux";
import { removeToast } from "../../redux/actions/toastActions";
import "../../Style/Toast.css";
const Toast = ({toasts}) => {
    console.log(toasts);
    
    return(
        <div className="container">
            {toasts.map((toast) => {
                <div 
                    key={toast.id} className="notification toast "
                    style={{backgroundColor: toast.color}}>

                    <button>x</button>
                    <div>
                        <p className="description">{toast.description}</p>
                    </div>
                </div>
            })}
        </div>
    );
}

export default Toast;