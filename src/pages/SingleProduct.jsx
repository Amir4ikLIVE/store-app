import { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { customFetch, formatPrice, generateAmountOptions } from '../utilities';
import { useDispatch } from 'react-redux';
import { addItem } from '../Features/cart/cartSlice';

export const loader = async ({ params }) => {
  const response = await customFetch(`/products/${params.id}`);
  return { product: response.data.data };
};

function SingleProduct() {
  const dispatch = useDispatch();
  const { product } = useLoaderData();
  const { title, image, company, price, description, colors } = product.attributes;
  const [productColor, setProductColor] = useState(colors[0]);
  const [amount, setAmount] = useState(1);
  const dollarAmount = formatPrice(price);

  const handleAmount = (e) => {
    setAmount(parseInt(e.target.value));
  }

  const addToCart = () => {
    const cartProduct = {
      productID: product.id + productColor,
      title,
      image,
      company,
      amount,
      productColor,
      price
    }

    dispatch(addItem({product: cartProduct}));
  }

  return (
    <section>
      <div className='text-md breadcrumbs'>
        <ul>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/products'>Products</Link>
          </li>
        </ul>
      </div>
      <div className='mt-6 grid gap-y-8 lg:grid-cols-2 lg:gap-x-16'>
        <img src={image} alt={title} className='w-96 h-96 lg:w-full rounded-lg object-cover' />
        <div>
          <h1 className='capitalize text-3xl font-bold'>
            {title}
          </h1>
          <h4 className='text-4xl text-neutral-content font-bold mt-2'>
            {company}
          </h4>
          <p className='mt-3 text-xl'>
            {dollarAmount}
          </p>
          <p className='mt-6 leading-8'>
            {description}
          </p>
          <div className='mt-6'>
            <h4 className='text-md font-medium tracking-wider capitalize'>
              colors
            </h4>
            <div className='mt-2'>
              {colors.map((color) => {
                return (
                  <button
                    key={color}
                    onClick={() => setProductColor(color)}
                    className={`badge mr-2 w-6 h-6 ${color === productColor ? 'border border-secondary' : ''
                      }`}
                    style={{ backgroundColor: color }}
                  />
                );
              })}
            </div>
          </div>
          <div className="mt-4">
            <label htmlFor="amount">
              <h4 className='text-md font-medium tracking-wider capitalize'>amount</h4>
            </label>
            <select
              value={amount}
              onChange={handleAmount}
              id="amount"
              className='select select-secondary select-bordered select-md'
            >
              {
                generateAmountOptions(20)
              }
            </select>
          </div>
          <div className="mt-10">
            <button 
            className='btn btn-secondary btn-md uppercase'
            onClick={addToCart}
            >
              add to bag
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SingleProduct;