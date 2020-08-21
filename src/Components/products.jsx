import React from 'react';
import Item from './item';
import { css } from "@emotion/core";
import BeatLoader from "react-spinners/BeatLoader";
import { gql, useQuery } from '@apollo/client';

function Products() {
  const ProductsQuery = gql`
    query PRODUCTS {
      Products {
        id
        title
        description
        price
        photoUrl
      }
    }
  `;

  const override = css`
    display: block;
    margin: 100px auto;
  `;

  const { data, loading } = useQuery(ProductsQuery);
  if (loading) return (
    <div className="products">
      <BeatLoader
        color= "#009688"
        css= {override}
      />
    </div>
  );

  return (
    <div className="products">
      {data.Products.map(el => <Item key={el.id} title={el.title} description={el.description} price={el.price} photo={el.photoUrl} />)}
    </div>
  );
}
 
export default Products;