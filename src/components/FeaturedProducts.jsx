import React from 'react'
import SectionTitle from './SectionTitle';
import ProductsGrid from './ProductsGrid';

const FeaturedProducts = () => {

  return (
    <div>
      <div className='pt-24'>
        <SectionTitle text="Featured Products" />
        <ProductsGrid />
      </div>
    </div>
  )
}

export default FeaturedProducts;