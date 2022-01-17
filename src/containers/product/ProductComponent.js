import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "../../Style/ProductComponent.css";

const ProductComponent =()=>{
    const products = useSelector((state)=> state.allProducts.products);
    const images = useSelector(state => state.images.images);

    const renderList = products.map(product =>{
        return(
            
            <div className="card" key={product.id}>
            <Link to={`/product/${product.id}`}>
                {
                    images.filter((image) => {
                        if(image.imagename === (product.imageName)){
                            <img src={`data:image/jpeg;base64,${image.image}`} alt="" />
                        }
                    })
                }                                
                <h3>{product.name}</h3>
                <p>Price:<b>${product.price}</b></p>
            </Link>
        </div>
        )
    });


    return(
      <div className="container">
          <h1>Featured Products</h1>
          <div className="item-container">
            {renderList}
          </div>
      </div>
    );
}

export default ProductComponent;