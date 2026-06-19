import React from 'react'
import { CartItemsList, CartTotal, SectionTitle } from "../components";
import { Link } from 'react-router-dom';

const Cart = () => {
  const user = null;

  return <>
    <SectionTitle text={'Shopping Cart'} />
    <div className="mt-8 gap-8 grid lg:grid-cols-12">
      <div className="lg:col-span-8">
        <CartItemsList />
      </div>
      <div className="lg:col-span-4 lg:pl-4">
        <CartTotal />
        {
          user ? (
            <Link to="/checkout" className='btn btn-primary btn-block mt-8'>
              Proceed to checkout
            </Link>
          ) : (
            <Link to="/login" className='btn btn-primary btn-block mt-8'>
              Please login
            </Link>
          )
        }
      </div>
    </div>
  </>
}

export default Cart;