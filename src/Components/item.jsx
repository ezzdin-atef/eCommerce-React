import React, { Component } from 'react';

class Item extends Component {
  state = {  }
  render() { 
    return (
      <div className="item">
        <img src="https://via.placeholder.com/300" alt="..." />
        <main>
          <h3>Item Name</h3>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ut, deserunt!</p>
          <div className="price">
            <button>Purchase</button>
            <span>$150</span>
          </div>
        </main>
      </div>
    );
  }
}
 
export default Item;