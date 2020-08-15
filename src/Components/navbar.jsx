import React, { Component } from "react";
import { Link } from "react-router-dom";
import User from "./user";
import Registeration from "./registeration";

class Navbar extends Component {
  state = {
    isLogged: true,
    model: false,
  };

  handleClick = () => {
    this.setState({ model: !this.state.model });
  };

  hideModel = () => {
    this.setState({ model: false });
  };

  render() {
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
          {/* <nav>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/">Free</Link></li>
              <li><Link to="/">Paid</Link></li>
            </ul>
          </nav> */}
          {this.state.isLogged ? (
            <User />
          ) : (
            <button className="registration-btn" onClick={this.handleClick}>
              Registeration
            </button>
          )}
          {this.state.model ? <Registeration hideModel={this.hideModel} /> : ""}
        </div>
      </header>
    );
  }
}

export default Navbar;
