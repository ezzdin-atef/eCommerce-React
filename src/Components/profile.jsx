import React, { useState, useContext } from "react";
import { gql, useMutation } from "@apollo/client";
import { UserContext } from "../contexts/userContext";
import { toast } from 'react-toastify';
var jwt = require('jsonwebtoken');

function Profile() {
  const contextType = useContext(UserContext);
  const {_id ,firstName: fName, lastName: lName, email: mail} = jwt.decode(localStorage.getItem("jwt"));
  const [firstName, setFirstName] = useState(fName || "");
  const [lastName, setLastName] = useState(lName || "");
  const [email, setEmail] = useState(mail || "");
  const [password, setPassword] = useState("");
  const [disable, setDisable] = useState(false);
  const notify = () => toast.info('All Changes Saved Successfully');

  const EditProfile = gql`
    mutation Editprofile($id: ID!, $fname: String!, $lname: String!, $email: String!, $password: String) {
      editUser(id: $id ,email: $email, firstName: $fname, lastName: $lname, password: $password) 
    }
  `;

  const [Editprofile] = useMutation(EditProfile);

  const onChange = (e, type) => {
    switch(type) {
      case "firstName":
        setFirstName(e.target.value);
        break;
      case "lastName":
        setLastName(e.target.value);
        break;
      case "email":
        setEmail(e.target.value);
        break; 
      case "password":
        setPassword(e.target.value);
        break; 
      default:
        break;
    }
  }

  const onSubmit = (e) => {
    e.preventDefault();
    setDisable(true);
    Editprofile({
      variables: {
        id: _id,
        fname: firstName,
        lname: lastName,
        email: email,
        password: password,
      },
    }).then(res => {
      contextType.addJWT(res.data.editUser);
      notify();
    }).catch(err => console.log(err));

    return setDisable(false);
  };

  return (
    <React.Fragment>
      <h2 style={{textAlign: "center", fontSize: "35px"}}>Your Profile</h2>
      <form className="profile" onSubmit={onSubmit}>
        <div className="input-group">
          <label>First Name:</label>
          <input type="text" value={firstName} onChange={(e) => onChange(e, "firstName")} />
        </div>
        <div className="input-group">
          <label>Last Name:</label>
          <input type="text" value={lastName} onChange={(e) => onChange(e, "lastName")} />
        </div>
        <div className="input-group">
          <label>Email:</label>
          <input type="email" value={email} disabled="disabled" />
        </div>
        <div className="input-group">
          <label>Password:</label>
          <input type="password" value={password} onChange={(e) => onChange(e, "password")} />
        </div>
        <input type="submit" value="Save" disabled={disable? "disabled" : ""} />
      </form>
    </React.Fragment>
  );
}
 
export default Profile;