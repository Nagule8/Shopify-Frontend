import React,{useState} from "react";
import { useSelector } from "react-redux";
import { Button, ButtonToolbar } from "react-bootstrap";
import {NavLink} from "react-router-dom";
import { Nav } from "react-bootstrap";

import Checkout from "./Checkout";

const CartSummary = () => {
    const carts = useSelector((state)=> state.allCarts.carts);
    const [TotalCartValue, setTotalCartValue] = useState(0);

    const [changeButton, setchangeButton] = useState(0);

    const totalCartValue = ()=>{
        var tot = 0;  
        {carts.map(item=>
            {
                tot = tot + item.total;
            }
        )
        console.log(carts);
    };
        setTotalCartValue(tot);
        setchangeButton(tot);
            
    }

    return (
        <div>
            <h1>Cart summary!</h1>
            <h1>Total:${TotalCartValue}</h1>

            <ButtonToolbar>
                {changeButton ? <Nav>
                    <NavLink to="/Checkout">
                    <Button variant="success" >
                        Proceed to checkout
                    </Button>
                    </NavLink>

                </Nav>
                : <Button onClick={totalCartValue} >
                    Get Total
                </Button>}
            </ButtonToolbar>
        </div>

        
    )
}

export default CartSummary