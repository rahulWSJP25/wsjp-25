import React, { useState } from 'react';
import Container from './Container';
import { RxCaretDown } from "react-icons/rx";
import { IoMdClose } from "react-icons/io";
import { NavLink, useLocation } from 'react-router-dom';
import { MdMyLocation } from "react-icons/md";
import { CiSearch } from "react-icons/ci";
import { BiSolidOffer } from "react-icons/bi";
import { IoHelpBuoy } from "react-icons/io5";
import { FaRegUser } from "react-icons/fa";
import { BsCart } from "react-icons/bs";

export default function Header() {
    const [sideBar, setSideBar] = useState(false);
    const location = useLocation();
    const [sideOpen, setSideOpen] = useState(false);
    return (
        <>
            <div className='shadow p-2'>

                {/* sidebar start */}

                <div className='fixed w-full h-full top-0 left-0 duration-500' style={
                    {
                        background: "rgba(0,0,0,0.5)",
                        visibility: sideBar ? "visible" : "hidden",
                        opacity: sideBar ? 1 : 0,
                        zIndex: sideBar ? "9999999999999999999" : ""
                    }
                }>
                    <div className='w-[400px] pl-[50px] pt-[50px] bg-white h-full duration-500 absolute' style={
                        {
                            left: sideBar ? '0' : '-100%'
                        }
                    }>
                        <IoMdClose onClick={() => setSideBar(false)} fontSize={40} />
                        <div className='mt-5 p-3'>
                            <div className='my-4 mr-4'>
                                <div className='flex'>
                                    <input className='p-3 border shadow-xl focus:outline-none flex-grow ' type="text" placeholder='Search for area, street name...' />
                                </div>
                                <div className='border mt-4 p-3 shadow-xl'>
                                    <div className='flex items-center gap-3 '>
                                        <MdMyLocation />  <span className='hover:text-red-500'>Get Current City</span>
                                    </div>
                                    <div className='ml-5'>using Gps</div>
                                </div>

                            </div>
                        </div>
                    </div>

                </div>

                {/* sidebar end */}

                <div className={`${location.pathname == "/offers" ? 'hidden' : ''}`}>
                    <Container className="flex items-center text-[#3D4152]">
                        <div className='logo'>
                            <img src="images/swiggy-logo-icon.svg" alt="" className='w-[50px] h-[50px]' />
                        </div>
                        <div className='w-[310px] ml-[30px] flex items-center gap-2'>
                            <b className='border-[#3D4152] border-b-[2px]'>Other</b>
                            <span className='font-thin'>Sindhi Colony, Bani Park, Jaipur</span>
                            <RxCaretDown fontSize={25} color='red' onClick={() => setSideBar(true)} />
                        </div>
                        <div className='sticky top-0 bg-white'>
                            <nav className='gap-10 ml-75 flex text-[16px]'>
                                <div className='flex items-center gap-2 hover:text-red-600'>
                                    <CiSearch />
                                    <NavLink to={"search"}>Search</NavLink>
                                </div>
                                <div className='flex items-center gap-2 hover:text-red-600'>
                                    <BiSolidOffer />
                                    <NavLink to={"offers"}>Offers</NavLink>
                                    <sup>New</sup>
                                </div>
                                <div className='flex items-center gap-2 hover:text-red-600'>
                                    <IoHelpBuoy />
                                    <NavLink to={"help"}>Help</NavLink>
                                </div>
                                <div className='flex items-center gap-2 hover:text-red-600'>
                                    <FaRegUser />
                                    <NavLink onClick={() => setSideOpen(true)} to={"sign-in"}>Sign In</NavLink>
                                </div>
                                <div className='flex items-center gap-2 hover:text-red-600'>
                                    <BsCart />
                                    <NavLink to={"cart"}>Cart</NavLink>
                                </div>
                            </nav>
                        </div>

                    </Container>
                </div>


            </div>
        {/* // sign-in code goes here  .... */}
            <div className='shadow p-2'>
                <div className='fixed w-full h-full top-0 left-0 duration-500' style={
                    {
                        background: "rgba(0,0,0,0.5)",
                        visibility: sideOpen ? "visible" : "hidden",
                        opacity: sideOpen ? 1 : 0,
                    }
                }>
                    <div className='w-[400px] pl-[50px] pt-[50px] bg-white h-full duration-500 absolute' style={
                        {
                            right: sideOpen ? '0' : '-100%'
                        }
                    }>
                        <IoMdClose onClick={() => setSideOpen(false)} fontSize={40} />
                        <div>
                            <div className='flex gap-4 items-center'>
                                <div>
                                    <h1 className='font-bold text-3xl'>Login</h1>
                                    <p className='text-red-500'>or create an account</p>
                                </div>
                                <div className='w-[100px]'>
                                    <img src="images/Image-login_btpq7r.avif" alt="" />
                                </div>
                            </div>
                            <div className='flex'>
                                <input type="text" className='focus:outline-none flex-grow border p-4' placeholder='Phone Number' />
                            </div>
                            <div className='flex border p-4 my-5 bg-[#fc8019] text-white text-xl'>
                                <button className='flex-grow'>LOGIN</button>
                            </div>
                            <div>By clicking on Login, I accept the Terms & Conditions & Privacy Policy</div>

                        </div>

                    </div>
                </div>

                {/* sidebar end */}
            </div>
        {/* // sign-in code goes here  .... */}
        </>

    )
}
