import React, { useState, useContext } from "react";
import { gql, useLazyQuery  } from "@apollo/client";
import { UserContext } from "../contexts/userContext";


function SignIN({ closeModel }) {
  const contextType = useContext(UserContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const Signin = gql`
    query logIn($email: String!, $password: String!) {
      login(email: $email, password: $password)
    }
  `;

  const [logIn, { data }] = useLazyQuery(Signin);

  const onChange = (e, type) => {
    switch (type) {
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

  if (data && data.login !== "Password is Wrong") {
    console.log(data.login);
    contextType.addJWT(data.login);
    closeModel();
  }

  const onSubmit = (e) => {
    e.preventDefault();
    logIn({
      variables: {
        email: email,
        password: password,
      },
    });
  };

  return (
    <form onSubmit={onSubmit}>
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

export default SignIN;
