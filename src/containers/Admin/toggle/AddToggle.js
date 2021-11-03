import {useState} from 'react';

const AddToggle = () => {
    const [isShowing, setIsShowing] = useState(false);

    function toggle(){
        setIsShowing(!isShowing);
    }

    return {
        isShowing,
        toggle,
    }
};

export default AddToggle
