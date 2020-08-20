import React from 'react';



function Item({title, description, price}) {
  
  return (
    <div className="item">
      <img src="https://via.placeholder.com/300/333" alt="..." />
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