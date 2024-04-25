import React from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import AdminMain from './Pages/Admin/Main';
import WebsiteMain from './Pages/Website/Main';
import Home from './Pages/Website/Home';
import Store from './Pages/Website/Store';
import Iphone from './Pages/Website/Iphone';
import Ipad from './Pages/Website/Ipad';
import Macbook from './Pages/Website/Macbook';
import Accesories from './Pages/Website/Accesories';
import Dashboard from './Pages/Admin/Dashboard';
import CategoryAdd from './Pages/Admin/category/Add';
import CategoryView from './Pages/Admin/category/View'
import ProductAdd from './Pages/Admin/product/Add';
import ProductView from './Pages/Admin/product/View'



function App() {
  const routes = createBrowserRouter(
    [
      {
        path: "/",
        element: <WebsiteMain />,
        children: [
          {
            path: "",
            element: <Home />
          },
          {
            path : "store",
            element : <Store/>
          },
          {
            path : "iphone",
            element : <Iphone/>
          },
          {
            path : "ipad",
            element : <Ipad/>
          },
          {
            path : "macbook",
            element : <Macbook/>
          },
          {
            path : "accesories",
            element : <Accesories/>
          }

        ]
      },
      {
        path: "/admin",
        element: <AdminMain />,
        children: [
            {
              path : "",
              element : <Dashboard/>
            },
            {
              path : "category",
              children : [
                {
                  path : "add",
                  element : <CategoryAdd/>
                },
                {
                  path : "view",
                  element : <CategoryView/>
                }
              ]
            },
            {
              path : "product",
              children : [
                {
                  path : "add",
                  element : <ProductAdd/>
                },
                {
                  path : "view",
                  element : <ProductView/>
                }
              ]
            }
        ]
      }
    ]
  )
  return (
    <RouterProvider router={routes} />
  )
}

export default App;