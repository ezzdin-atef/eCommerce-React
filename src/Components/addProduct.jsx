import React, { Component } from "react";

class AddProduct extends Component {
  state = {
    title: "",
    description: "",
    price: 0.0,
  };

  onChange = (e, type) => {
    switch (type) {
      case "title":
        this.setState({ title: e.target.value });
        break;
      case "description":
        this.setState({ description: e.target.value });
        break;
      case "price":
        this.setState({ price: e.target.value });
        break;
    }
  };

  render() {
    const { title, description, price } = this.state;
    return (
      <React.Fragment>
        <h2 style={{ textAlign: "center", fontSize: "35px" }}>Your Profile</h2>
        <form className="profile">
          <div className="input-group">
            <label>Title:</label>
            <input
              type="text"
              value={title}
              onChange={(e) => this.onChange(e, "title")}
            />
          </div>
          <div className="input-group">
            <label>Description:</label>
            <input
              type="text"
              value={description}
              onChange={(e) => this.onChange(e, "description")}
            />
          </div>
          <div className="input-group">
            <label>Price:</label>
            <input
              type="number"
              value={price}
              onChange={(e) => this.onChange(e, "price")}
            />
          </div>
          <input type="submit" value="Add" />
        </form>
      </React.Fragment>
    );
  }
}

export default AddProduct;
