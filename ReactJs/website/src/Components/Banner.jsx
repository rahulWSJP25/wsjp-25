import React from 'react';
import { ReactTyped } from "react-typed";

const Hero = () => {
  return (
    <div className='bg-[#2699fb] h-screen p-4'>
      <div className='max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center'>
        <p className='text-[white] font-bold p-2 text-3xl'>
          Learn with us
        </p>
        <h1 className='md:text-7xl sm:text-6xl text-4xl font-bold md:py-6 text-white'>
          Grow with us.
        </h1>
        <div className='flex justify-center items-center'>
          <p className='md:text-5xl sm:text-4xl text-xl font-bold py-4 text-white'>
            Learn
          </p>
          <ReactTyped 
            className='md:text-5xl sm:text-4xl text-xl font-bold md:pl-4 pl-2 text-white'
            strings={['Digital Makerting', 'Web Development', 'Ethical Hacking']}
            typeSpeed={120}
            backSpeed={140}
            loop = {true}
          />
        </div>
        <button className='bg-[black] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-white'>Get Started</button>
      </div>
    </div>
  );
};

export default Hero;