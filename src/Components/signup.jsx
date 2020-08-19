import React, { useState, useContext } from "react";
import { gql, useMutation } from "@apollo/client";
import { UserContext } from "../contexts/userContext";

function SignUP({ closeModel }) {
  const contextType = useContext(UserContext);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const Signup = gql`
    mutation AddUser($fname: String!, $lname: String!, $email: String!, $password: String!) {
      addUser(firstName: $fname, lastName: $lname, email: $email, password: $password) 
    }
  `;

  const [AddUser] = useMutation(Signup);

  const onChange = (e, type) => {
    switch (type) {
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
  };

  const onSubmit = (e) => {
    e.preventDefault();
    AddUser({
      variables: {
        fname: firstName,
        lname: lastName,
        email: email,
        password: password,
      },
    }).then(res => {
      contextType.addJWT(res.data.addUser);
      closeModel();
    }).catch(err => console.log(err));
  };

  return (
    <form onSubmit={onSubmit}>
      <div className="input-group">
        <label>First Name:</label>
        <input
          type="text"
          value={firstName}
          onChange={(e) => onChange(e, "firstName")}
          required="required"
        />
      </div>
      <div className="input-group">
        <label>Last Name:</label>
        <input
          type="text"
          value={lastName}
          onChange={(e) => onChange(e, "lastName")}
          required="required"
        />
      </div>
      <div className="input-group">
        <label>Email:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => onChange(e, "email")}
          required="required"
        />
      </div>
      <div className="input-group">
        <label>Password:</label>
        <input
          type="password"
          value={password}
          onChange={(e) => onChange(e, "password")}
          required="required"
        />
      </div>
      <input type="submit" value="Save" />
    </form>
  );
}

export default SignUP;
