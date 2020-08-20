import React from 'react';
import Item from './item';
import { gql, useQuery } from '@apollo/client';

function Products() {
  const ProductsQuery = gql`
    query PRODUCTS {
      Products {
        id
        title
        description
        price
      }
    }
  `;

  const { data, loading } = useQuery(ProductsQuery);
  if (loading) return <div className="products">Loading ...</div>
  return (
    <div className="products">
      {data.Products.map(el => <Item key={el.id} title={el.title} description={el.description} price={el.price} />)}
    </div>
  );
}
 
export default Products;