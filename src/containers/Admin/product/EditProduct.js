import React from 'react';

const EditProduct = ({editShow}) => {
    console.log("showing",editShow);
    return (
        editShow ? <h2>Edit product</h2> : null
    )
}

export default EditProduct
