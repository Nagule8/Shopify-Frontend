import React,{useEffect} from "react";
import Header from './containers/header/Header';
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Product from "./containers/Admin/Product";
import Category from './containers/Admin/Category';
import Cart from "./containers/Admin/Cart";

import ProductListing from "./containers/product/ProductListing";
import ProductDetails from './containers/product/ProductDetails';
import Login from './containers/Login_SignUp/Login';
import SignUp from './containers/Login_SignUp/SignUp';
import Logout from "./containers/Login_SignUp/Logout";
import Checkout from "./containers/cart/Checkout";

import FetchUser from "./fetchData/FetchUser";

function App() {
  const name = window.localStorage.getItem("Name");
  const {fetchUserId,fetchUser} = FetchUser();

  useEffect(()=>{
    fetchUser();
    fetchUserId(name);
  },[]);
  
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Switch>
          <Route path="/" component={ProductListing} exact />
          <Route path="/product/:productId" component={ProductDetails} />
          <Route path="/Product" component={Product} />
          <Route path="/Category" component={Category} />
          <Route path="/Cart" component={Cart} />
          <Route path="/Login" component={Login} />
          <Route path="/SignUp" component={SignUp} />
          <Route path="/Logout" component={Logout} />
          <Route path="/Checkout" component={Checkout} />
          <Route>404 Not Found!</Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
