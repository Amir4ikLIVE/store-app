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
  Orders

} from "./pages";
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    children: [
      {
        index: true,
        element: <Landing />
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
        element: <Products />
      },
      {
        path: "products/:id",
        element: <SingleProduct />
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