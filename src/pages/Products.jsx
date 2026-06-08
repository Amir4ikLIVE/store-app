import React from 'react'
import {
  Filter,
  PaginationContainer,
  ProductsContainer
} from '../components';
import { customFetch } from '../utilities';

const url = "/products";

export const loader = async ({ request }) => {
  const params = new URL(request.url).searchParams;
  const page = params.get("page") || 1;

  const response = await customFetch(url, {
    params: {
      page,
    },
  });

  const products = response.data.data;
  const meta = response.data.meta;

  return { products, meta };
};

function Products() {
  return (
    <>
      <Filter />
      <ProductsContainer />
      <PaginationContainer />
    </>
  )
}

export default Products;