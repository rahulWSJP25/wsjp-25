import React from 'react';
import laptop from '../assets/laptop.jpg';

export default function Experts() {
    return (
        <div className='mx-w-[1240px] mx-auto my-10 p-2 md:grid grid-cols-2'>
            <div className='col-span-1 md:w-[80%] text-center'>
                <img src={laptop} alt="" className='inline'/>
            </div>
            <div className='col-span-1 flex flex-col justify-center'>
                <h1 className='text-[#00df9a] font-bold my-2'>LEARN FROM EXPERTS</h1>
                <p className='my-2 text-justify'>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa tempora 
                    et nam minima laborum, repellendus quis ut libero quia commodi 
                    similique magni nobis eaque? Animi earum omnis ad doloribus eaque.
                </p>
                <button className=' w-[30%] inline bg-black text-white p-3 rounded'>Get Started</button>
            </div>
        </div>
    )
}
