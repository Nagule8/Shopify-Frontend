import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

toast.configure()
const Toastify = () => {
    const notifySuccess = (notifyMessage)=>{
        console.log("toastify",notifyMessage);
        // Calling toast method by passing string
        toast.success(notifyMessage + "Added", {position: toast.POSITION.TOP_RIGTH});
    }
    const notifyError = (notifyMessage) => {
        toast.error(notifyMessage, {position: toast.POSITION.TOP_RIGHT});
    }
    const notifyInfo = (notifyMessage) => {
        toast.info(notifyMessage, {position: toast.POSITION.TOP_RIGHT});
    }
    const notifyWarning = (notifyMessage) => {
        console.log("notifyMessage");
        toast.warn(notifyMessage, {position: toast.POSITION.TOP_RIGHT});
    }

    return{
        notifySuccess, notifyWarning,
        notifyError, notifyInfo
    }
}

export default Toastify
