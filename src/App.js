import React from "react";
import { Switch, Route } from "react-router-dom";

import "./App.css";

import Homepage from "./pages/homepage/Homepage";
import ShopPage from "./pages/shop/ShopPage";
import Header from './components/header/Header';



function App() {
  return (
    <div>
      <Header/>
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route path="/shop/hats" component={ShopPage} />
      </Switch>
    </div>
  );
}

export default App;
