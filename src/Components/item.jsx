import React from 'react';



function Item({title, description, price, photo}) {
  
  return (
    <div className="item">
      <div className="img"><img src={photo || "https://via.placeholder.com/300/333"} alt="..." /></div>
      <main>
        <h3>{title}</h3>
        <p>{description}</p>
        <div className="price">
          <button>Purchase</button>
          <span>${price}</span>
        </div>
      </main>
    </div>
  );
}
 
export default Item;