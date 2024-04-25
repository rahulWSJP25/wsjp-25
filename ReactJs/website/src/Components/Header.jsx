import React, { useState } from 'react'
import { AiOutlineMenu } from "react-icons/ai";
import { IoMdClose } from "react-icons/io";

export default function Header() {

    const [toggle, setToggle] = useState(false);

    return (
        <div className='bg-[#2699fb] p-4'>
            <div className='max-w-[1240px] py-[12px] flex justify-between items-center  mx-auto'>
                <div className='text-3xl font-bold'>
                    WsCube Tech
                </div>
                {
                    toggle
                        ?
                        <AiOutlineMenu onClick={() => setToggle(!toggle)} className='text-white text-2xl md:hidden block' />
                        :
                        <IoMdClose onClick={() => setToggle(!toggle)} className='text-white text-2xl md:hidden block' />

                }
                <ul className='hidden md:flex text-white gap-10'>
                    <li>
                        Home
                    </li>
                    <li>
                        Compony
                    </li>
                    <li>
                        Resources
                    </li>
                    <li>
                        About
                    </li>
                    <li>
                        Contact
                    </li>
                </ul>
                {/* Responsive Menu */}
                <ul className={`md:hidden w-full h-screen text-white fixed bg-black top-[92px] ${toggle ? 'left-[0]' : 'left-[-100%]'} `}>
                    <li className='p-5'>
                        Home
                    </li>
                    <li className='p-5'>
                        Compony
                    </li>
                    <li className='p-5'>
                        Resources
                    </li>
                    <li className='p-5'>
                        About
                    </li>
                    <li className='p-5'>
                        Contact
                    </li>
                </ul>

            </div>
        </div>
    )
}
