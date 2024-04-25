import React, { useEffect, useState } from 'react'
import Filter from './Filter';
import Listing from './Listing';
import axios from 'axios';
import Header from './Header';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Cart from './Cart';

function App() {

  // const [products, setProducts] = useState([]);
  const [categories, setCategory] = useState([]);
  const [filterCategory, setFilterCategory] = useState(null);
  const [range, setRange] = useState({
    from: 0,
    to: 1000
  });

  useEffect(
    () => {

      axios.get('https://fakestoreapi.com/products/categories')
        .then(
          (success) => {
            setCategory(success.data);
          }
        )
        .catch(
          (error) => {
            setCategory(error);
          }
        )
    },
    []
  )

  const setFrom = (data) => {
    setRange({
      to: range.to,
      from: data
    })
  }

  const setTo = (data) => {
    setRange({
      from: range.from,
      to: data
    })
  }

  const Home = <>
    <Header />
    <div className='max-w-[1400px] grid grid-cols-5 gap-3 mx-auto'>
      <Filter fromChangeHandler={setFrom} toChangeHandler={setTo} range={range} categorySelectHandler={setFilterCategory} categories={categories} filterCategory={filterCategory} />
      <Listing range={range} filterCategory={filterCategory} />
    </div>
  </>

  const routes = createBrowserRouter(
    [
      {
        path: "/",
        element: Home
      },
      {
        path: "/cart",
        element: <Cart />
      }
    ]
  )

  return (
    <RouterProvider router={routes} />
  )
}

export default App;
