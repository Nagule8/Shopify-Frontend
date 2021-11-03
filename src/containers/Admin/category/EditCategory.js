import React from 'react'

const EditCategory = ({editShow}) => {
    console.log("showing",editShow);
    return (
        editShow ? <h1>Edit category</h1>
        : null
    );
};

export default EditCategory
