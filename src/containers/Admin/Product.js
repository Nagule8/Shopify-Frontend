import React from "react";
import { useSelector } from "react-redux";

import {Table} from "react-bootstrap";
import { ButtonToolbar,Button} from "react-bootstrap";

import AddProduct from "./product/AddProduct";
import EditProduct from "./product/EditProduct";
import AddToggle from "./toggle/AddToggle";
import EditToggle from "./toggle/EditToggle";
import ProductDataService from "../../services/product.service";

const Product =()=>{
    const products = useSelector((state)=> state.allProducts.products);
    const {isShowing, toggle} = AddToggle();
    const {editShow, editToggle} = EditToggle();

    const deleteItem =async (itemid) => {
        if(window.confirm("Are you sure?")){
            await ProductDataService.delete(itemid);
        }
    }

    return(
        <div>
                <Table className="mt-4" striped bordered hover size="sm" >
                    <thead>
                        <tr>
                        <th>Name</th>
                        <th>Slug</th>
                        <th>Description</th>
                        <th>Price</th>
                        <th>CategoryId</th>
                        <th>Image Name</th>
                        <th>Edit/Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {products.map(item=>
                            <tr key={item.id}>
                                <td>{item.name}</td>
                                <td>{item.slug}</td>
                                <td>{item.description}</td>
                                <td>{item.price}</td>
                                <td>{item.categoryId}</td>
                                <td>{item.imageName}</td>
                                <td>
                                    <ButtonToolbar>
                                        <Button className="mr-2" variant="info"
                                        onClick={editToggle} >
                                            Edit
                                        </Button>
                                        <Button className="mr-2" variant="danger" onClick={()=>deleteItem(item.Id)} >
                                            Delete
                                        </Button>
                                    </ButtonToolbar>
                                </td>
                            </tr>)}
                    </tbody>

                </Table>
                {
                    isShowing ? <Button className="mr-2" variant="danger" 
                    onClick={toggle}>
                        Close
                    </Button> :
                    <Button className="mr-2" variant="info" 
                    onClick={toggle}>
                        Add
                    </Button>
                }

                <AddProduct isShowing={isShowing} />
                <EditProduct editShow={editShow} />
            </div>
    );
};

export default Product;

/*
<BrowserRouter>
<Nav className="me-auto">                        
    <NavLink className=" bg-dark text-white" to={"/AddProduct"}>
        Add
    </NavLink>
</Nav>

<Switch>
<Route path="/AddProduct" component={AddProduct} />
</Switch>
</BrowserRouter>
*/