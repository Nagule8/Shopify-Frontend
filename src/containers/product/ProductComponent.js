import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import "./ProductComponent.css";

const ProductComponent =()=>{
    const products = useSelector((state)=> state.allProducts.products);
    const renderList = products.map(product =>{
        return(
            <div className="card" key={product.id}>
            <Link to={`/product/${product.id}`}>
                <img src={"https://localhost:44385/Photos/"+product.imageName} alt="" />
                <h3>{product.name}</h3>
                <p>Price:<b>${product.price}</b></p>
            </Link>
        </div>
        )
    });

    return(
      <div>
          <h1>Featured Products</h1>
          <div className="item-container">
            {renderList}
          </div>
      </div>
    );
}

export default ProductComponent;