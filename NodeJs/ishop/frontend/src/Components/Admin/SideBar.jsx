import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export default function SideBar() {

  const [openItemIndex, setOpenItemIndex] = useState(null);

  const items = [
    {
      name: "Dashboard",
      url: "/admin"
    },
    {
      name: "Category",
      url: null,
      subItems: [
        {
          name: "Add",
          path: "/admin/category/add"
        },
        {
          name: "View",
          path: "/admin/category/view"
        }
      ]
    },
    {
      name: "Product",
      url: null,
      subItems: [
        {
          name: "Add",
          path: "/admin/product/add"
        },
        {
          name: "View",
          path: "/admin/product/view"
        }
      ]
    },
    {
      name: "Color",
      url: null,
      subItems: [
        {
          name: "Add",
          path: "/admin/color/add"
        },
        {
          name: "View",
          path: "/admin/color/view"
        }
      ]
    },
    {
      name: "User",
      url: "/admin/user"
    },
    {
      name: "Orders",
      url: "/admin/order"
    }

  ]

  return (
    <div className='bg-gradient-to-r from-gray-700 from-40%  via-30% to-gray-500 to-90% ... min-h-[100vh]'>
      <div className='text-center text-2xl py-3 text-white'>ISHOP Admin</div>
      <hr />
      <ul>
        {
          items.map(
            (item, index) => {
              return <li key={index} className='text-white px-3 py-3'>
                {
                  item.url != null
                    ? <Link to={item.url}>{item.name}</Link>
                    : <Dropdown openItemIndex={openItemIndex} setOpenItemIndex={setOpenItemIndex} {...item} index={index} />
                }
              </li>
            }
          )
        }
      </ul>
    </div>
  )
}

const Dropdown = ({ name, setOpenItemIndex, openItemIndex, subItems, index }) => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(
    () => {
      if (openItemIndex == index) {
        setIsOpen(true)
      } else {
        setIsOpen(false);
      }
    },
    [openItemIndex]
  )

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };


  useEffect(
    () => {
      if (isOpen == true) {
        setOpenItemIndex(index)
      }
    },
    [isOpen]
  )

  return (
    <div className="relative">
      <button onClick={toggleMenu} type="button" className="bg-gray-800 text-white px-4 py-2 rounded focus:outline-none focus:bg-gray-700">
        {name}
      </button>

      {isOpen && (
        <div className='absolute top-0 right-0 mt-2 w-48 bg-white rounded-lg shadow-lg'>
          {
            subItems.map(
              (sb, index) => {
                return <Link key={index} to={sb.path} className='block px-4 py-2 text-gray-800 hover:bg-gray-200'>
                  {sb.name}
                </Link>
              }
            )
          }
        </div>
      )}
    </div>
  )
}
