import React from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './pages/Home';
import Search from './pages/Search';
import Offers from './pages/Offers';
import Sign from './pages/Sign';
import Cart from './pages/Cart';
import Help from './pages/Help';
import Main from './Main';

function App() {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <Main />,
      children: [
        {
          path: "",
          element: <Home />
        },
        {
          path: "search",
          element: <Search />
        },
        {
          path: "offers",
          element: <Offers />
        },
        {
          path: "help",
          element: <Help />
        },
        {
          path: "cart",
          element: <Cart />
        },
        {
          path: "sign-in",
          element: <Sign/>
        }

      ]
    }

  ]);


  return (
    <>
      <RouterProvider router={routes} />
    </>
  )
}

export default App;