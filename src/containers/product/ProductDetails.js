import React,{useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";

import FetchProduct from "../../fetchData/FetchProduct";
import { removeSelectedProduct } from "../../redux/actions/productActions";

import "../../Style/ProductDetails.css";

const ProductDetails =()=>{
  const { productId } = useParams();
  let product = useSelector((state)=>state.product);
  const images = useSelector(state => state.images.images);
  const [Image, setImage] = useState("");
  
  const {fetchProductDetail, handleSubmit} = FetchProduct();
  const dispatch = useDispatch(); 

  const getImage = ()=>{ 
    images.map((image)=>{      
      if(image.imagename === (product.imageName)){
        setImage(image.image);
      }
    })
  }

  useEffect(()=>{
    getImage();
    if(productId && productId!=="") fetchProductDetail(productId);
    return()=>{
      dispatch(removeSelectedProduct());
    }
  },[productId]);

  return(
      <div className="container">
    {Object.keys(product).length === 0 ? (
      <div>...Loading</div>
    ) : (
        <div className='item-details'>
          <div className='details' key={product.id}>

            <div className="big-img">
              <img src={`data:image/jpeg;base64,${Image}`} alt="" />
            </div>
              
            <div className="box">
              <div className="row">
                <h2>{product.name}</h2>
                <span>${product.price}</span>
              </div>

              <p>{product.slug}</p>
              <p>DESCRIPTION:</p>
              <p>{product.description}</p>

              <button className="cart" onClick={handleSubmit} >
                Add
              </button>
            </div>
            
          </div>
          
        </div>
    )}
  </div>
  )
}

export default ProductDetails;