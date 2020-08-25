import React from 'react';
import { loadStripe } from '@stripe/stripe-js';
const stripePromise = loadStripe('pk_test_51HIVUVDumGswNoybY7MQ9qUqmpFa2Hbz1AwI5bj0zh3m2ba5giYJFd5FpJd9SCHaFBop6w6B4bzz6sihyrPvsFNk00cUsj2mHI');
var jwt = require('jsonwebtoken');
const {_id, orders} = jwt.decode(localStorage.getItem("jwt"));

function Item({id, title, description, price, photo}) {

  const onPurchase = async (event) => {
    console.log("start");
    const stripe = await stripePromise;

    // Call your backend to create the Checkout Session
    const response = await fetch('https://ecommerce-api-123.herokuapp.com/create-checkout-session', 
      { 
        method: 'POST', 
        body: JSON.stringify({
          id: id,
          userID: _id,
          title: title,
          description: description,
          price: price,
          photo: photo
        }),
        headers: {
          'Content-type': 'application/json'
        } 
      });

    const session = await response.json();

    // When the customer clicks on the button, redirect them to Checkout.
    const result = await stripe.redirectToCheckout({
      sessionId: session.id,
    });

    if (result.error) {
      // If `redirectToCheckout` fails due to a browser or network
      // error, display the localized error message to your customer
      // using `result.error.message`.
      console.log(result.error);
    }
  };

  return (
    <div className="item">
      <div className="img"><img src={photo || "https://via.placeholder.com/300/333"} alt="..." /></div>
      <main>
        <h3>{title}</h3>
        <p>{description}</p>
        <div className="price">
          {orders.includes(id)? <button disabled="disabled">Purchased</button> : <button role="link" onClick={onPurchase}>Purchase</button>}
          
          <span>${price}</span>
        </div>
      </main>
    </div>
  );
}
 
export default Item;