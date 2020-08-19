import React, { Component } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../contexts/userContext";

class User extends Component {
  state = { show: false };
  static contextType = UserContext;

  handleDropdownMenu = () => {
    this.setState({ show: !this.state.show });
  };

  render() {
    const { logout } = this.context;
    return (
      <span
        className={`user ${this.state.show ? "show" : ""}`}
        onClick={this.handleDropdownMenu}
      >
        Username <i className="fa fa-caret-down" aria-hidden="true"></i>
        <ul>
          <li>
            <Link to="/profile">Profile</Link>
          </li>
          <li>
            <Link to="/orders">Orders</Link>
          </li>
          <li>
            <Link to="/add">Add Product</Link>
          </li>
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
