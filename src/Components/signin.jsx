import React, { useState, useContext } from "react";
import { gql, useApolloClient  } from "@apollo/client";
import { UserContext } from "../contexts/userContext";
import { toast } from 'react-toastify';

function SignIN({ closeModel }) {
  const contextType = useContext(UserContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [disable, setDisable] = useState(false);
  const notify = (message) => toast.error(message);

  const Signin = gql`
    query logIn($email: String!, $password: String!) {
      login(email: $email, password: $password)
    }
  `;
  const client = useApolloClient();

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

  const onSubmit = (e) => {
    e.preventDefault();
    setDisable(true);
    client.query({
      query: Signin,
      variables: {
        email: email,
        password: password,
      }
    }).then((result) => {
      if (result.data.login === "Password is Wrong") {
      notify("Password is Wrong"); 
      setDisable(false);
    }
      else contextType.addJWT(result.data.login);
    }).catch((err) => {
      notify(err);
      setDisable(false);
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
      <input type="submit" value="Save" disabled={disable? "disabled" : ""}/>
    </form>
  );
}

export default SignIN;
