import React from "react";
import {NavLink} from "react-router-dom";
import { Container,FormControl, Navbar, Nav } from "react-bootstrap";
import { useSelector } from 'react-redux';

import "./Header.css";
import {FaShoppingCart} from "react-icons/fa";

const Header = ()=>{
    const user = useSelector(state => state.user);
    const username = window.localStorage.getItem("Name");

    return (    
        <Navbar bg="dark" variant="dark"  expand="lg">
                
            <Container>
                <Navbar.Brand>
                    <a href="/">Shopify</a>
                </Navbar.Brand>
                <Navbar.Text className="search">
                    <FormControl style={{width:500}} placeholder="Search a product" className="m-auto" />
                </Navbar.Text>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav>                        
                        <a className="d-inline p-2 bg-dark text-white" href="/">
                            Home
                        </a>
                        {username === "Admin" ? <div className="d-inline p-2 bg-dark text-white">
                            <NavLink className="d-inline p-2 bg-dark text-white" to="/Category">
                                Category
                            </NavLink> 
                            <NavLink className="d-inline p-2 bg-dark text-white" to="/Product">
                                Product
                            </NavLink> </div> : null
                        }
                        <NavLink className="d-inline p-2 bg-dark text-white" to="/Cart">
                            <FaShoppingCart color="white" fontSize="25px" /> 
                        </NavLink>

                        <div className="d-inline p-2 bg-dark text-white">
                            {user.Name ?
                            <NavLink to="/Logout">Logout</NavLink> :
                            <NavLink to="/SignUp">
                                SignUp  
                            </NavLink>                      

                        }</div>
                        <div className="d-inline p-1 bg-dark text-white" >
                            {user.Name ?
                                (<h3>Welcome, {(username)} !</h3>) :
                                <div>Anonymous user</div>
                            }                            
                        </div>                           
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Header;