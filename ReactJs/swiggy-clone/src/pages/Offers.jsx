import React from 'react';
import Container from '../Components/Container';
import { RxCaretDown } from "react-icons/rx";
import { FaLocationArrow } from "react-icons/fa";
import { IoMdContact } from "react-icons/io";
import { CiSearch } from "react-icons/ci";



export default function Offers() {


    return (

        <>
           
            <Container className = "mt-10">
                <div>
                    <div className="border flex gap-[120px] p-4">
                        <div className="logo w-[40px] flex items-center gap-3">
                            <img src="images/logo.svg" alt="" className="w-full  duration-300 hover:scale-110" />
                            <p className='text-red-600 text-2xl'>SWIGGY</p>
                        </div>
                        <div className='w-[350px] ml-2 flex items-center gap-2'>
                            <FaLocationArrow color='red' fontSize={30} />
                            <b className=''>Setup your precise location</b>
                            <RxCaretDown fontSize={25} color='red' />
                        </div>
                        <div className='flex items-center gap-5'>
                            <div className='shadow flex items-center gap-1 border'>
                                <input type="text" placeholder='Search for restaurant and food' className='p-2 w-[450px] text-3xl outline-none' />
                                <CiSearch fontSize={30} />
                            </div>
                            <div>
                                <IoMdContact fontSize={40} />
                            </div>
                        </div>
                    </div>
                    <div className='my-2 p-2'>Home / Offers</div>
                    <h1 className='font-bold text-2xl p-2'>Restaurants With Great Offers Near Me</h1>
                    <div className='flex gap-3 p-3'>
                        <div className='border p-3 rounded flex items-center gap-1'>
                            Filter <img src="images/filter.png" alt="" className='w-[20px] h-[20px]' />
                        </div>
                        <div className='border p-3 rounded flex items-center'>
                            Sort by <RxCaretDown fontSize={30} />
                        </div>
                        <div className='border p-3 rounded'>
                            Fast Delivery
                        </div>
                        <div className='border p-3 rounded'>
                            New on swiggy
                        </div>
                        <div className='border p-3 rounded'>
                            Rating 4.0+
                        </div>
                        <div className='border p-3 rounded'>
                            Pure Veg
                        </div>
                        <div className='border p-3 rounded'>
                            Offers
                        </div>
                        <div className='border p-3 rounded'>
                            Rs 300- Rs-600
                        </div>
                        <div className='border p-3 rounded'>
                            Less than Rs.- 300
                        </div>
                    </div>
                

                    
                    <div className='text-2xl flex flex-wrap gap-5 rounded-xl justify-between'>
                        <div className='shadow-lg rounded-xl p-3 border hover:scale-[1.1] duration-500 w-[23%]'>
                            <img src="images/2.avif" alt="" className='rounded-xl h-[200px] w-full' />
                            <p className='text-sm'>
                                <b>Agarwal Caterers - Shastri Nagar</b> <br />
                                4.6 • 35-40 mins <br />
                                Desserts, Sweets <br />
                                Shashtri Nagar
                            </p>
                        </div>
                        <div className='shadow-lg p-3 rounded-xl border hover:scale-[1.1] duration-500 w-[23%]'>
                            <img src="images/3.avif" alt="" className='h-[200px] w-full rounded-xl' />
                            <p className='text-sm'>
                                <b>Agarwal Caterers - Shastri Nagar</b> <br />
                                4.6 • 35-40 mins <br />
                                Desserts, Sweets <br />
                                Shashtri Nagar
                            </p>
                        </div>
                        <div className='shadow-lg p-3 border hover:scale-[1.1] duration-500 w-[23%] rounded-xl'>
                            <img src="images/4.avif" className='h-[200px] w-full rounded-xl' />
                            <p className='text-sm'>
                                <b>Agarwal Caterers - Shastri Nagar</b> <br />
                                4.6 • 35-40 mins <br />
                                Desserts, Sweets <br />
                                Shashtri Nagar
                            </p>
                        </div>
                        <div className='shadow-lg p-3 border rounded-xl hover:scale-[1.1] duration-500 w-[23%]'>
                            <img src="images/5.avif" alt="" className='h-[200px] w-full rounded-xl' />
                            <p className='text-sm'>
                                <b>Agarwal Caterers - Shastri Nagar</b> <br />
                                4.6 • 35-40 mins <br />
                                Desserts, Sweets <br />
                                Shashtri Nagar
                            </p>
                        </div>
                        <div className='shadow-lg p-3 border hover:scale-[1.1] duration-500 w-[23%] rounded-xl'>
                            <img src="images/6.avif" alt="" className='h-[200px] w-full rounded-xl' />
                            <p className='text-sm'>
                                <b>Agarwal Caterers - Shastri Nagar</b> <br />
                                4.6 • 35-40 mins <br />
                                Desserts, Sweets <br />
                                Shashtri Nagar
                            </p>
                        </div>
                        <div className='shadow-lg p-3 border hover:scale-[1.1] duration-500 w-[23%] rounded-xl'>
                            <img src="images/7.avif" alt="" className='h-[200px] w-full rounded-xl' />
                            <p className='text-sm'>
                                <b>Agarwal Caterers - Shastri Nagar</b> <br />
                                4.6 • 35-40 mins <br />
                                Desserts, Sweets <br />
                                Shashtri Nagar
                            </p>
                        </div>
                        <div className='shadow-lg p-3 border hover:scale-[1.1] duration-500 w-[23%] rounded-xl'>
                            <img src="images/8.avif" alt="" className='h-[200px] w-full rounded-xl' />
                            <p className='text-sm'>
                                <b>Agarwal Caterers - Shastri Nagar</b> <br />
                                4.6 • 35-40 mins <br />
                                Desserts, Sweets <br />
                                Shashtri Nagar
                            </p>
                        </div>
                        <div className='shadow-lg p-3 border hover:scale-[1.1] duration-500 rounded-xl w-[23%]'>
                            <img src="images/9.avif" alt="" className='h-[200px] w-full rounded-xl' />
                            <p className='text-sm'>
                                <b>Agarwal Caterers - Shastri Nagar</b> <br />
                                4.6 • 35-40 mins <br />
                                Desserts, Sweets <br />
                                Shashtri Nagar
                            </p>
                        </div>
                        <div className='shadow-lg p-3 border hover:scale-[1.1] duration-500 w-[23%] rounded-xl'>
                            <img src="images/10.avif" alt="" className='h-[200px] w-full rounded-xl' />
                            <p className='text-sm'>
                                <b>Agarwal Caterers - Shastri Nagar</b> <br />
                                4.6 • 35-40 mins <br />
                                Desserts, Sweets <br />
                                Shashtri Nagar
                            </p>
                        </div>
                        <div className='shadow-lg p-3 border hover:scale-[1.1] duration-500 w-[23%] rounded-xl'>
                            <img src="images/11.avif" alt="" className='h-[200px] w-full rounded-xl' />
                            <p className='text-sm'>
                                <b>Agarwal Caterers - Shastri Nagar</b> <br />
                                4.6 • 35-40 mins <br />
                                Desserts, Sweets <br />
                                Shashtri Nagar
                            </p>
                        </div>
                        <div className='shadow-lg p-3 border hover:scale-[1.1] duration-500 w-[23%] rounded-xl'>
                            <img src="images/12.avif" alt="" className='h-[200px] w-full rounded-xl' />
                            <p className='text-sm'>
                                <b>Agarwal Caterers - Shastri Nagar</b> <br />
                                4.6 • 35-40 mins <br />
                                Desserts, Sweets <br />
                                Shashtri Nagar
                            </p>
                        </div>
                        <div className='shadow-lg p-3 border hover:scale-[1.1] duration-500 w-[23%] rounded-xl'>
                            <img src="images/13.avif" alt="" className='h-[200px] w-full rounded-xl' />
                            <p className='text-sm'>
                                <b>Agarwal Caterers - Shastri Nagar</b> <br />
                                4.6 • 35-40 mins <br />
                                Desserts, Sweets <br />
                                Shashtri Nagar
                            </p>
                        </div>
                        <div className='shadow-lg p-3 border hover:scale-[1.1] duration-500 w-[23%] rounded-xl'>
                            <img src="images/14.avif" alt="" className='h-[200px] w-full rounded-xl' />
                            <p className='text-sm'>
                                <b>Agarwal Caterers - Shastri Nagar</b> <br />
                                4.6 • 35-40 mins <br />
                                Desserts, Sweets <br />
                                Shashtri Nagar
                            </p>
                        </div>
                        <div className='shadow-lg p-3 border hover:scale-[1.1] duration-500 w-[23%] rounded-xl'>
                            <img src="images/15.avif" alt="" className='h-[200px] w-full rounded-xl' />
                            <p className='text-sm'>
                                <b>Agarwal Caterers - Shastri Nagar</b> <br />
                                4.6 • 35-40 mins <br />
                                Desserts, Sweets <br />
                                Shashtri Nagar
                            </p>
                        </div>
                        <div className='shadow-lg p-3 border hover:scale-[1.1] duration-500 w-[23%] rounded-xl'>
                            <img src="images/16.avif" alt="" className='h-[200px] w-full rounded-xl' />
                            <p className='text-sm'>
                                <b>Agarwal Caterers - Shastri Nagar</b> <br />
                                4.6 • 35-40 mins <br />
                                Desserts, Sweets <br />
                                Shashtri Nagar
                            </p>
                        </div>
                        <div className='shadow-lg p-3 border hover:scale-[1.1] duration-500 w-[23%] rounded-xl'>
                            <img src="images/17.avif" alt="" className='h-[200px] w-full rounded-xl' />
                            <p className='text-sm'>
                                <b>Agarwal Caterers - Shastri Nagar</b> <br />
                                4.6 • 35-40 mins <br />
                                Desserts, Sweets <br />
                                Shashtri Nagar
                            </p>
                        </div>
                       

                    </div>
                
                </div>

            </Container>

        </>

    )
}



