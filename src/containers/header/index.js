import React from 'react'
import { useSelector } from 'react-redux';
import { Nav, Bars, NavMenu, NavLink, NavBtn, NavBtnLink } from './Header';

const Navbar = () => {
    const user = useSelector(state => state.user);
    const username = window.localStorage.getItem("Name");
    return (
        <>
        <Nav>
            <NavLink to="/" exact>
                <i class="fab fa-shopware fa-3x"></i>
            </NavLink>
            <Bars />
            <NavMenu>
                {
                    username == "Admin" ?
                    <>['']
                    <NavLink to="/Category" activeStyle>
                        Category
                    </NavLink>
                    <NavLink to="/Product" activeStyle>
                        Product
                    </NavLink>
                    </> : null
                }
                <NavLink to="/Cart" activeStyle>
                    <i class="fas fa-shopping-cart"></i>
                </NavLink>
                {user.Name ?
                    (<NavLink to="/">Welcome, {(username)} !</NavLink>) :
                    null
                }

            </NavMenu>
            
            <NavBtn>
            {
                user.Name ?
                <NavBtnLink to="/Logout" activeStyle>
                    Logout
                </NavBtnLink> :
                <NavBtnLink to="/SignUp" activeStyle>
                    SignUp!
                </NavBtnLink>
            }
            </NavBtn>
        </Nav>
        </>
    )
}

export default Navbar
