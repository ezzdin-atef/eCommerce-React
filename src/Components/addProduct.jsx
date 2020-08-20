import React, { useState } from "react";
import { gql, useMutation } from "@apollo/client";
import { toast } from 'react-toastify';
const jwt = require("jsonwebtoken");

function AddProduct(props) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState(0);
  const {_id} = jwt.decode(localStorage.getItem("jwt"));

  const notify = () => toast.info('The Product Added Successfully');

  const AddProductQuery = gql`
    mutation ADDPRODUCT($id: ID!, $title: String!, $description: String!, $price: Int) {
      addProduct(title: $title, description: $description, price: $price, seller: $id) {
        id
      }
    }
  `;

  const [ADDPRODUCT] = useMutation(AddProductQuery);

  const onChange = (e, type) => {
    switch (type) {
      case "title":
        setTitle(e.target.value);
        break;
      case "description":
        setDescription(e.target.value);
        break;
      case "price":
        setPrice(e.target.value);
        break;
      default:
        break;
    }
  };

  const onSubmit = (e) => {
    e.preventDefault();
    ADDPRODUCT({
      variables: {
        id: _id,
        title: title,
        description: description,
        price: parseInt(price, 10),
      }
    }).then(res => {
      notify();
      props.history.push("/");
    }).catch(err => console.log(err));
  }

  return (
    <React.Fragment>
      <h2 style={{ textAlign: "center", fontSize: "35px" }}>Add Product</h2>
      <form className="profile" onSubmit={onSubmit}>
        <div className="input-group">
          <label>Title:</label>
          <input
            type="text"
            value={title}
            onChange={(e) => onChange(e, "title")}
          />
        </div>
        <div className="input-group">
          <label>Description:</label>
          <input
            type="text"
            value={description}
            onChange={(e) => onChange(e, "description")}
          />
        </div>
        <div className="input-group">
          <label>Price:</label>
          <input
            type="number"
            value={price}
            onChange={(e) => onChange(e, "price")}
          />
        </div>
        <input type="submit" value="Add" />
      </form>
    </React.Fragment>
  );
}

export default AddProduct;
