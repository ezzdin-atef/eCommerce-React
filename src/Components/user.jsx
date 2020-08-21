import React, { Component } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../contexts/userContext";
var jsonwebtoken = require("jsonwebtoken");

class User extends Component {
  state = { show: false };
  static contextType = UserContext;

  handleDropdownMenu = () => {
    this.setState({ show: !this.state.show });
  };

  render() {
    const { logout, jwt } = this.context;
    const { admin } = jsonwebtoken.decode(jwt);
    return (
      <span
        className={`user ${this.state.show ? "show" : ""}`}
        onClick={this.handleDropdownMenu}
      >
        Menu <i className="fa fa-caret-down" aria-hidden="true"></i>
        <ul>
          <li>
            <Link to="/profile">Profile</Link>
          </li>
          <li>
            <Link to="/orders">Orders</Link>
          </li>
          {
            admin &&
            <li>
              <Link to="/add">Add Product</Link>
            </li>
          }
          
          <li>
            <Link to="">Payments</Link>
          </li>
          <li>
            <Link to="/" onClick={(e) => logout()}>Logout</Link>
          </li>
        </ul>
      </span>
    );
  }
}

export default User;
