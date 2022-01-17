let id = 0;
const defaultOptions = {
    color: "#5cb85c"
};

const createToast = (options={})=>{
    return {
        id:id++,
        ...defaultOptions,
        description:options        
    }
};

export default createToast;