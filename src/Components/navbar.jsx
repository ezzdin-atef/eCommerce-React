import React, { Component } from "react";
import { Link } from "react-router-dom";
import User from "./user";
import Registeration from "./registeration";
import { UserContext } from "../contexts/userContext";

class Navbar extends Component {
  static contextType = UserContext;
  state = {
    model: false,
  };

  componentDidUpdate() {
    if (localStorage.getItem("jwt") && this.state.model) {
      this.setState({model: !this.state.model});
    }
  }

  handleClick = () => {
    this.setState({model: !this.state.model});
  }

  hideModel = () => {
    this.setState({ model: false });
  };

  render() {
    const { isLogged } = this.context;
    return (
      <header className="header">
        <div className="container">
          <h1 style={{ margin: 0 }}>
            <Link
              to="/"
              style={{
                color: "#333",
                textDecoration: "none",
                fontSize: "22px",
              }}
            >
              eCommerce React App
            </Link>
          </h1>
          {isLogged ? (
            <User />
          ) : (
            <button className="registration-btn" onClick={this.handleClick}>
              Registeration
            </button>
          )}
          {this.state.model ? <Registeration hideModel={this.hideModel} closeModel={this.handleClick} /> : ""}
        </div>
      </header>
    );
  }
}

export default Navbar;
