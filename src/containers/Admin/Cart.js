import React,{useEffect} from "react";
import { useSelector } from "react-redux";

import {Row, Col, Table} from "react-bootstrap";
import { Button, ButtonToolbar } from "react-bootstrap";
import CartSummary from "../cart/CartSummary";

import FetchCart from "../../fetchData/FetchCart";

const Cart =()=>{
    const carts = useSelector((state)=> state.allCarts.carts);
    const UserId =useSelector((state)=> state.user.userid);
    const {fetchCarts, IncQuantity, deleteCartItem} = FetchCart();

    useEffect(()=>{
        fetchCarts(UserId);
    },[UserId]);

    console.log("user id:",UserId);

    return(
        <div>
            <Row>
            <Col sm={6} >
            <Table className="mt-4" striped bordered hover size="sm" >
                    <thead>
                        <tr>
                            <th>Item Id</th>
                        <th>Name</th>
                        <th>Quantity</th>
                        <th>Price</th>
                        <th>Total</th>
                        </tr>
                    </thead>
                    <tbody>
                        {carts.map(item=>
                            <tr key={item.id}>
                                <td>{item.itemId}</td>
                                <td>{item.itemName}</td>
                                <td>
                                    <input type="number" defaultValue={item.quantity} 
                                    onChange={e =>{IncQuantity(item.id,e.target.value)}} />
                                </td>
                                <td>{item.price}</td>
                                <td>{item.total}</td>
                                <td>
                                    <ButtonToolbar>
                                        <Button className="mr-2" variant="danger" 
                                        onClick={()=>{
                                            deleteCartItem(item);
                                        }} >
                                            Delete
                                        </Button>
                                    </ButtonToolbar>
                                </td>
                            </tr>)}
                    </tbody>

                </Table>   
                </Col>
                <Col sm={6} >
                    <CartSummary />
                </Col>
                </Row>
        </div>
    );
};

export default Cart;