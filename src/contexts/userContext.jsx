import React, { Component } from "react";

export const UserContext = React.createContext();

class UserContextProvider extends Component {
  state = {
    isLogged: localStorage.getItem("jwt")? true : false,
    jwt: localStorage.getItem("jwt") || ""
  };

  addJWT = (jwt) => {
    localStorage.setItem("jwt", jwt);
    this.setState({ jwt, isLogged: true });
  }

  logout = () => {
    localStorage.removeItem("jwt");
    this.setState({ jwt: "", isLogged: false });
  }

  render() {
    return (
      <UserContext.Provider value={{ ...this.state, addJWT: this.addJWT, logout: this.logout }}>
        {this.props.children}
      </UserContext.Provider>
    );
  }
}

export default UserContextProvider;
