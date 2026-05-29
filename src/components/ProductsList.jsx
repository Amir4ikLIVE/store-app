import React from 'react'
import { Link, useLoaderData } from 'react-router-dom';
import { formatPrice } from '../utilities';

const ProductsList = () => {
    let { products } = useLoaderData();
    console.log(products);

    return (
        <div className='grid mt-12 gap-y-8'>
            {
                products.map((product) => {
                    const { title, image, price, company } = product.attributes;
                    const dollarAmount = formatPrice(price);
                return <Link
                        to={`/products/${product.id}`}
                        key={product.id}
                        className='group flex flex-col sm:flex-row p-8 rounded-lg bg-base-100 gap-y-4 flex-wrap shadow-xl hover:shadow-2xl transition duration-300'>
                        <div className='px-4 pt-4'>
                            <img 
                            src={image} 
                            alt={title} 
                            className='rounded-lg h-24 w-24 sm:h-32 sm:w-32 object-cover group-hover:scale-105 transition duration-300'/>
                        </div>
                       <div className='ml-0 sm:ml-16'>
                            <h3 className='capitalize font-medium text-lg'>
                                {title}
                            </h3>
                            <h4 className='capitalize text-md text-neutral-content'>
                                {company}
                            </h4>
                       </div>
                       <p className='ml-0 sm:ml-auto text-lg font-medium'>
                        {dollarAmount}
                       </p>
                    </Link>
                })
            }
        </div>
    )
}

export default ProductsList;