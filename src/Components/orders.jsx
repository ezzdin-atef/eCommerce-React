import React, { Component } from 'react';

class Orders extends Component {
  state = {  }
  render() { 
    return (
      <React.Fragment>
        <h2 style={{textAlign: "center", fontSize: "35px"}}>All Orders</h2>
        <table>
          <tr>
            <th>Order Name</th>
            <th>Price</th>
            <th>Download</th>
          </tr>
          <tr>
            <td>Peter</td>
            <td>$100</td>
            <td></td>
          </tr>
          <tr>
            <td>Lois</td>
            <td>$150</td>
            <td></td>
          </tr>
          <tr>
            <td>Joe</td>
            <td>$300</td>
            <td></td>
          </tr>
          <tr>
            <td>Cleveland</td>
            <td>$250</td>
            <td></td>
          </tr>
        </table>

      </React.Fragment>
    );
  }
}
 
export default Orders;