import React, { Component } from "react";
import { Link } from "react-router-dom";

class User extends Component {
  state = { show: false };

  handleDropdownMenu = () => {
    this.setState({ show: !this.state.show });
  };

  render() {
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
        </ul>
      </span>
    );
  }
}

export default User;
