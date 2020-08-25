import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { gql, useMutation } from '@apollo/client';
var jwt = require('jsonwebtoken');

const SuccessOrder = (props) => {
  const {_id, orders} = jwt.decode(localStorage.getItem("jwt"));
  const productID = props.match.params.id;
  const ADDORDER = gql`
    mutation AddOrder($id: ID!, $productID:ID!) {
      buy(id: $id, productID: $productID)
    }
  `;
  const [AddOrder] = useMutation(ADDORDER);
 
    useEffect(() => {
      if (!orders.includes(productID)) {
        AddOrder({
          variables: {
            id: _id,
            productID: productID
          },
        }).then(res => {
          localStorage.setItem("jwt", res.data.buy);
        }).catch(err => console.log(err));
      } else {
        console.log("exists");
      }
    }, []);

  return (
    <div style={{ textAlign: "center", marginTop: "20%", fontSize: "150%" }}>
      <h1>Congratulations 🎉</h1>
      <p>Go to your orders page from <Link to="/orders">here</Link></p>
    </div>
  );
}
 
export default SuccessOrder;