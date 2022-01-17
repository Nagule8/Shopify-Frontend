import React from 'react';
import { useSelector } from 'react-redux';

const FetchImage = () => {

    const images = useSelector(state => state.images.images);
    const fetchImage = (imgName) => {
        
        images.filter((image) => {
            if(image.imagename.toLowerCase().includes(imgName.toLowerCase())){
                return image.image;
            }
        })
        
    }

    return {
        fetchImage
    }
}

export default FetchImage
