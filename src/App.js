import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Navbar from "./Components/navbar";
import Products from './Components/products';
import Profile from './Components/profile';
import Orders from './Components/orders';
import 'font-awesome/css/font-awesome.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="container">
        <Switch>
          <Route path="/profile">
            <Profile />
          </Route>
          <Route path="/orders">
            <Orders />
          </Route>
          <Route path="/">
            <Products />
          </Route>
        </Switch>
      </div>
    </div>
  );
}

export default App;
