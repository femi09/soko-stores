import React from "react";
import { Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home/index";
import ProductDetails from "./pages/ProductDetails/index";
import Bag from "./pages/Bag";
import Checkout from "./pages/Checkout/index";
import OrderConfirmed from "./pages/OrderConfirmed/index";
import Footer from "./components/Footer/index";

import "./App.css";

function App() {
  return (
    <div className="app">
      <Header />
      <Switch>
        <Route path="/order_confirmed" component={OrderConfirmed} />
        <Route path="/checkout" component={Checkout} />
        <Route path="/product" component={ProductDetails} />
        <Route path="/bag" component={Bag} />
        <Route path="/" component={Home} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
