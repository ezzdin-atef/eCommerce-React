import React, { useState } from "react";
import { gql, useMutation } from "@apollo/client";
import { toast } from 'react-toastify';
import { projectStorage } from '../firebase/config';
const jwt = require("jsonwebtoken");

function AddProduct(props) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState(0);
  const [file, setFile] = useState(null);
  const [disable, setDisable] = useState(false);
  const {_id} = jwt.decode(localStorage.getItem("jwt"));

  const notify = () => toast.info('The Product Added Successfully');

  const AddProductQuery = gql`
    mutation ADDPRODUCT($id: ID!, $title: String!, $description: String!, $price: Int, $photoUrl: String!) {
      addProduct(title: $title, description: $description, price: $price, seller: $id, photoUrl: $photoUrl) {
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
      case "file":
        const file = e.target.files[0];
        if (["image/png", "image/jpeg"].includes(file.type)) {
          setFile(file)
        }
        break;
      default:
        break;
    }
  };

  const onSubmit = (e) => {
    e.preventDefault();
    setDisable(true);
    const storageRef = projectStorage.ref(file.name + "+" + new Date());
    storageRef.put(file).then(() => {
      storageRef.getDownloadURL().then((url) => {
        console.log(url);
        ADDPRODUCT({
          variables: {
            id: _id,
            title: title,
            description: description,
            price: parseInt(price, 10),
            photoUrl: url
          }
        }).then(res => {
          notify();
          props.history.push("/");
        }).catch(err => {
          console.log(err);
          setDisable(false);
        });
      });
    });
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
            required="required"
          />
        </div>
        <div className="input-group">
          <label>Description:</label>
          <input
            type="text"
            value={description}
            onChange={(e) => onChange(e, "description")}
            required="required"
          />
        </div>
        <div className="input-group">
          <label>Price:</label>
          <input
            type="number"
            value={price}
            onChange={(e) => onChange(e, "price")}
            required="required"
          />
        </div>
        <div className="input-group">
          <label>Photo:</label>
          <input
            type="file"
            onChange={(e) => onChange(e, "file")}
            required="required"
          />
        </div>
        <input type="submit" value="Add" disabled={disable? "disabled" : ""} />
      </form>
    </React.Fragment>
  );
}

export default AddProduct;
