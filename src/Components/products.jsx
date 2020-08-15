import React, { Component } from 'react';
import Item from './item';

class Products extends Component {
  state = {  }
  render() { 
    return (
      <div className="products">
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
      </div>
    );
  }
}
 
export default Products;