import React, { useContext, Fragment } from "react";
import "./abc.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./screens/Home";
import ViewDetail from "./screens/ViewDetail";
import ViewCart from "./screens/ViewCart";
import LoginOrRegister from "./screens/LoginOrRegister";
import Global, { GlobalContext } from "./contexts/Global";
import Orders from "./screens/Orders";
import Shoes from "./screens/Shoes";

function App() {
  const { auth } = useContext(GlobalContext);
  console.log(auth, "hahaha");
  return (
    <Global>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/account" component={LoginOrRegister} />
          {!auth ? (
            <Fragment>
              <Route path="/orders" component={Orders} />
              <Route path="/shoes/men" component={Shoes} />
              <Route path="/detail" component={ViewDetail} />
            </Fragment>
          ) : (
            <Route path="/cart" component={ViewCart} />
          )}
        </Switch>
      </BrowserRouter>
    </Global>
  );
}

export default App;
