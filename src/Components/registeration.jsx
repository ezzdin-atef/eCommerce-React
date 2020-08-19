import React, { Component } from "react";
import SignIN from "./signin";
import SignUP from "./signup";

class Registeration extends Component {
  state = {
    model: "SignIN",
  };

  render() {
    return (
      <React.Fragment>
        <div className="registeration-model">
          <header style={{ textAlign: "center" }}>
            <span
              className={`btn ${this.state.model === "SignIN" ? "active" : ""}`}
              onClick={() => this.setState({ model: "SignIN" })}
            >
              Sign IN
            </span>{" "}
            |{" "}
            <span
              className={`btn ${this.state.model === "SignUP" ? "active" : ""}`}
              onClick={() => this.setState({ model: "SignUP" })}
            >
              Sign UP
            </span>
          </header>
          {this.state.model === "SignUP" ? <SignUP closeModel={this.props.closeModel} /> : <SignIN closeModel={this.props.closeModel} />}
        </div>
        <div className="overlay" onClick={this.props.hideModel}></div>
      </React.Fragment>
    );
  }
}

export default Registeration;
