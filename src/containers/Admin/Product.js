import React,{useState} from "react";
import { useDispatch ,useSelector } from "react-redux";
import {Table} from "react-bootstrap";
import { ButtonToolbar,Button} from "react-bootstrap";

import AddToggle from "./toggle/AddToggle";
import EditToggle from "./toggle/EditToggle";
import AddProduct from "./product/AddProduct";
import EditProduct from "./product/EditProduct";
import FetchProduct from "../../fetchData/FetchProduct";
import { addToast } from "../../redux/actions/toastActions";

const Product =()=>{
    const products = useSelector((state)=> state.allProducts.products);
    const {deleteItem} = FetchProduct();
    const {isShowing, toggle} = AddToggle();
    const {editShow, editToggle} = EditToggle();
    const [SpecificItem, setSpecificItem] = useState("");
    const dispatch = useDispatch();

    const showFun = (item)=>{
        setSpecificItem(item);
        editToggle();
    }
    return(
        <div>
                <Table className="mt" striped bordered hover size="sm" >
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
                                        onClick={()=>{showFun(item)}} >
                                            Edit
                                        </Button>
                                        <Button className="mr-2" variant="danger" 
                                        onClick={()=>{
                                            //notifyWarning(item.name + "Deleted.");
                                            deleteItem(item);
                                            }} >
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
                    onClick={()=>{
                        toggle();
                        dispatch(addToast("Success"));
                    }}>
                        Add Product
                    </Button>
                }

                <AddProduct isShowing={isShowing} />
                <EditProduct show={editShow} editShow={editShow} item={SpecificItem} />
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