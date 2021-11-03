import React,{useEffect} from "react";
import { useParams } from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";

import { ButtonToolbar,Button} from "react-bootstrap";
import FetchProduct from "../../fetchData/FetchProduct";
import { removeSelectedProduct } from "../../redux/actions/productActions";

const ProductDetails =()=>{
    const { productId } = useParams();
    let product = useSelector((state)=>state.product);

    const {fetchProductDetail, handleSubmit} = FetchProduct();

    const dispatch = useDispatch(); 

    useEffect(()=>{
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

              <div className="i-img">
                <img src={"https://localhost:44385/Photos/"+product.imageName} alt='' />
              </div>
                
              <div className="box">

                <div className="row">
                  <h4>{product.name}</h4>
                  <span>${product.price}</span>
                </div>
                <p>{product.slug}</p>
                <h6>DESCRIPTION:</h6>
                <p>{product.description}</p>

              </div>
            
            </div>
            <ButtonToolbar>
              <Button className="mr-2" variant="info" onClick={handleSubmit} >
                Add to cart
              </Button>
            </ButtonToolbar>
          </div>
      )}
    </div>
    )
}

export default ProductDetails;