import React from 'react';
import { FeaturedProducts, Hero } from '../components';
import { customFetch } from '../utilities';

export const loader = async () => {
  const response = await customFetch("/products?featured=true");
  const products = response.data.data;
  return { products };
}

function Landing() {
  return <>
    <Hero />
    <FeaturedProducts />
  </>
}

export default Landing;