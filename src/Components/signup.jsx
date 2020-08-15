import React, { Component } from "react";

class SignUP extends Component {
  state = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  };

  onChange = (e, type) => {
    switch (type) {
      case "firstName":
        this.setState({ firstName: e.target.value });
        break;
      case "lastName":
        this.setState({ lastName: e.target.value });
        break;
      case "email":
        this.setState({ email: e.target.value });
        break;
      case "password":
        this.setState({ password: e.target.value });
        break;
    }
  };
  render() {
    const { firstName, lastName, email, password } = this.state;
    return (
      <form>
        <div className="input-group">
          <label>First Name:</label>
          <input
            type="text"
            value={firstName}
            onChange={(e) => this.onChange(e, "firstName")}
            required="required"
          />
        </div>
        <div className="input-group">
          <label>Last Name:</label>
          <input
            type="text"
            value={lastName}
            onChange={(e) => this.onChange(e, "lastName")}
            required="required"
          />
        </div>
        <div className="input-group">
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => this.onChange(e, "email")}
            required="required"
          />
        </div>
        <div className="input-group">
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => this.onChange(e, "password")}
            required="required"
          />
        </div>
        <input type="submit" value="Save" />
      </form>
    );
  }
}

export default SignUP;
