import React from 'react';
import Container from '../Components/Container';
import { CiSearch } from "react-icons/ci";

export default function Search() {

  const CollectionOfImg = [
    "Rolls.jpeg",
    "north.avif",
    "tea.avif",
    "Cakes.jpeg",
    "dessert.avif",
    "sandwich.avif",
    "beverage.avif"
  ]


  return (
    <>
      <Container className="my-10">

        <div className='ml-[16%] my-5'>
          <div className='my-5 relative'>
            <input
              type="text"
              className="w-[700px] appearance-none border border-gray-300 rounded-md py-2 px-4 leading-tight focus:outline-none focus:border-blue-500"
              placeholder="Search for restaurants and food"
            />
            <CiSearch className='absolute top-3 left-[660px]' />
          </div>
          <div className='font-bold text-[20px] my-3'>Popular Cuisines</div>
          <div className='flex'>
            {
              CollectionOfImg.map(
                (imgData, index) => {
                  return <div key={index} className='w-[100px]'>
                    <img src={`images/${imgData}`} className='w-full h-full' alt="" />
                  </div>
                }
              )
            }
          </div>
        </div>
      </Container>

    </>
  )
}
