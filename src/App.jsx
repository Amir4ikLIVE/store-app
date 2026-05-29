import React from 'react'
import {
  About,
  Cart,
  Error,
  SingleProduct,
  Products,
  Checkout,
  HomeLayout,
  Landing,
  Login,
  Register,
  Orders,

} from "./pages";

import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import { ErrorElement } from './components';
import { loader as landingLoader } from './pages/Landing';
import { loader as singleProductLoader } from './pages/SingleProduct';
import { loader as productsLoader } from "./pages/Products";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    children: [
      {
        index: true,
        element: <Landing />,
        errorElement: <ErrorElement />,
        loader: landingLoader
      },
      {
        path: "about",
        element: <About />
      },
      {
        path: "cart",
        element: <Cart />
      },
      {
        path: "checkout",
        element: <Checkout />
      },
      {
        path: "orders",
        element: <Orders />
      },
      {
        path: "products",
        element: <Products />,
        loader: productsLoader,
        errorElement: <ErrorElement />
      },
      {
        path: "/products/:id",
        element: <SingleProduct />,
        loader: singleProductLoader,
        errorElement: <ErrorElement />
      }
    ],
    errorElement: <Error />
  },
  {
    path: "login",
    element: <Login />
  },
  {
    path: "register",
    element: <Register />
  }
]);

function App() {
  return <RouterProvider router={router} />
}

export default App;