import React, { Component } from "react";

class SignIN extends Component {
  state = {
    email: "",
    password: "",
  };

  onChange = (e, type) => {
    switch (type) {
      case "email":
        this.setState({ email: e.target.value });
        break;
      case "password":
        this.setState({ password: e.target.value });
        break;
    }
  };

  render() {
    const { email, password } = this.state;
    return (
      <form>
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

export default SignIN;
