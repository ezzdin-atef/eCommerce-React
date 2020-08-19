import React, { Component } from "react";

export const UserContext = React.createContext();

class UserContextProvider extends Component {
  state = {
    isLogged: false,
  };
  render() {
    return (
      <UserContext.Provider value={{ ...this.state }}>
        {this.props.children}
      </UserContext.Provider>
    );
  }
}

export default UserContextProvider;
