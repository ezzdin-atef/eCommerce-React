import React, { useContext } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Navbar from "./Components/navbar";
import Products from "./Components/products";
import Profile from "./Components/profile";
import Orders from "./Components/orders";
import AddProduct from "./Components/addProduct";
import { UserContext } from "./contexts/userContext";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import "font-awesome/css/font-awesome.css";

const client = new ApolloClient({
  uri: "https://ecommerce-api-123.herokuapp.com/graphql",
  cache: new InMemoryCache(),
});

function App() {
  const contextType = useContext(UserContext);

  return (
    <ApolloProvider client={client}>
      <div className="App">
        <Navbar />
        <div className="container">
          <Switch>
            <Route path="/add" exact component={(props) => contextType.isLogged? <AddProduct {...props} /> : <Redirect to="/" />} />
            <Route path="/profile" exact component={(props) => contextType.isLogged? <Profile {...props} /> : <Redirect to="/" />} />
            <Route path="/orders" exact component={(props) => contextType.isLogged? <Orders {...props} /> : <Redirect to="/" />} />
            <Route path="/" exact component={Products} />
          </Switch>
        </div>
      </div>
    </ApolloProvider>
  );
}

export default App;
