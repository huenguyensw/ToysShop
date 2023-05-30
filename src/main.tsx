import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './pages/Root';
import Products from './pages/Products';
import Product from './pages/Product';
import CreateProduct from './pages/admin/CreateProduct';
import UpdateProduct from './pages/admin/UpdateProduct';
import ManageProducts from './pages/admin/ManageProducts';
import Checkout from './pages/Checkout';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [{
      path: "/",
      element: <Products />
    },
    {
      path: "/products/:id",
      element: <Product />
    },
    {
      path: "/admin/addProduct",
      element: <CreateProduct />
    },
    {
      path: "/admin/updateProduct/:id",
      element: <UpdateProduct/>
    },
    {
      path: "/admin/manageProduct",
      element: <ManageProducts/>
    },
    {
      path: "/checkout",
      element: <Checkout/>
    }]
  },
]);


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
