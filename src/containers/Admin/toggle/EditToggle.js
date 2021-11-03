import {useState} from 'react';

const EditToggle = () => {
    const [editShow, setEditShow] = useState(false);

    function editToggle(){
        setEditShow(!editShow);
    }

    return {
        editShow,
        editToggle,
    }
};

export default EditToggle
