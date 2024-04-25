import React, { useState } from 'react';
import Container from '../../Components/Container';
import { RxHamburgerMenu } from "react-icons/rx";
import { TbGridDots } from "react-icons/tb";
import ProductBox from '../../Components/Website/ProductBox';

export default function Store() {

    const products = [
        {
            name: "Apple Ipod",
            img: "images/apple_iPod_2A.png",
            price: 599,
            discount: 499,
            rating: 4
        },
        {
            name: "Apple Smartwatch 2",
            img: "images/71fwbMm1NBL._AC_SL1500_.png",
            price: 599,
            discount: 499,
            rating: 4
        },
        {
            name: "Apple Smartwatch 2.0",
            img: "images/MY812_VW_34FR+watch-44-alum-spacegray-nc-6s_VW_34FR_WF_CO_GEO_MY.png",
            price: 599,
            discount: 499,
            rating: 4
        },
        {
            name: "Apple homepod mini",
            img: "images/Apple_homepod-mini-white.png",
            price: 599,
            discount: 499,
            rating: 4
        },
        {
            name: "Apple Airpods Max",
            img: "images/airpods-max-hero-select-202011_FMT_WHH@2x.png",
            price: 599,
            discount: 499,
            rating: 4
        },
        {
            name: "Apple Camera",
            img: "images/design-hero_2x.png",
            price: 599,
            discount: 499,
            rating: 4
        },
        {
            name: "iPhone Lightning Dock - Gold",
            img: "images/MQHX2.png",
            price: 599,
            discount: 499,
            rating: 4
        },
        {
            name: "Apple Magic Trackpad 2",
            img: "images/415ELavtbuL._SL1000_.png",
            price: 599,
            discount: 499,
            rating: 4
        },
        {
            name: "Apple Magic Trackpad 2",
            img: "images/415ELavtbuL._SL1000_.png",
            price: 599,
            discount: 499,
            rating: 4
        },
        {
            name: "Apple Macbook Pro",
            img: "images/52a2df80-98ec-4e1b-9cfc-71a68d7575b3_1.4fbf81e4bfa56bc8feffa82b5b15ca83.png",
            price: 599,
            discount: 499,
            rating: 4
        },
        {
            name: "New Apple Mac Mini",
            img: "images/New Apple Mac Mini.png",
            price: 599,
            discount: 499,
            rating: 4
        },
        {
            name: "Apple Smartwatch Magic",
            img: "images/Apple Smartwatch Magic.png",
            price: 599,
            discount: 499,
            rating: 4
        }
    ]


    return (
        <>
            <Container>
                <div>
                    <div className='text-[#33A0FF] text-center my-3 bg-[#F6F7F8] p-4'>Store / Accesories</div>
                    <div className='grid grid-cols-5 gap-5'>
                        {/* left sidebar */}
                        <div className='col-span-1 hidden md:block'>
                            <div className='text-center bg-[#F6F7F8]'>
                                <div className='font-semibold mt-3'>ACCESORIES</div>
                                <ul className='p-4 leading-10'>
                                    <li className='flex justify-between text-justify hover:text-[blue]'>
                                        <span>Apple Car</span>
                                        <span>2</span>
                                    </li>
                                    <li className='flex justify-between text-justify hover:text-[blue]'>
                                        <span>Air port & wireless</span>
                                        <span>48</span>
                                    </li>
                                    <li className='flex justify-between text-justify hover:text-[blue]'>
                                        <span>Cables & Docks</span>
                                        <span>14</span>
                                    </li>
                                    <li className='flex justify-between text-justify hover:text-[blue]'>
                                        <span>Cases & Films</span>
                                        <span>15</span>
                                    </li>
                                    <li className='flex justify-between text-justify hover:text-[blue]'>
                                        <span>Charging Devices</span>
                                        <span>23</span>
                                    </li>
                                    <li className='flex justify-between text-justify hover:text-[blue]'>
                                        <span>Connected home</span>
                                        <span>1</span>
                                    </li>
                                    <li className='flex justify-between text-justify hover:text-[blue]'>
                                        <span>Headphones</span>
                                        <span>95</span>
                                    </li>
                                </ul>

                            </div>
                            <div className='my-4 text-center bg-[#F6F7F8] p-4 mt-10'>
                                <div className='font-semibold'>PRICES</div>
                                <div className='flex justify-between p-2'>
                                    <div>Ranger:</div>
                                    <div>$13.99 - $25.99</div>
                                </div>
                                <input type="range" className='mt-3' />
                            </div>
                            <div className='my-4 bg-[#F6F7F8] p-4 text-center mt-10'>
                                <div className='font-semibold mb-4'>COLOR</div>
                                <div className='flex justify-around'>
                                    <div className='w-[20px] h-[20px] bg-[#006CFF] rounded-full'></div>
                                    <div className='w-[20px] h-[20px] bg-[#FC3E39] rounded-full'></div>
                                    <div className='w-[20px] h-[20px] bg-[#171717] rounded-full'></div>
                                    <div className='w-[20px] h-[20px] bg-[#FFF600] rounded-full'></div>
                                    <div className='w-[20px] h-[20px] bg-[#FF00B4] rounded-full'></div>
                                    <div className='w-[20px] h-[20px] bg-[#EFDFDF] rounded-full'></div>
                                </div>
                            </div>
                            <div className='text-center my-4 bg-[#F6F7F8] p-4 mt-10'>
                                <div className='font-semibold'>BRAND</div>
                                <ul className='p-4 leading-8'>
                                    <li className='flex justify-between text-justify hover:text-[blue]'>
                                        <span>Apple</span>
                                        <span>99</span>
                                    </li>
                                    <li className='flex justify-between text-justify hover:text-[blue]'>
                                        <span>LG</span>
                                        <span>99</span>
                                    </li>
                                    <li className='flex justify-between text-justify hover:text-[blue]'>
                                        <span>Samsung</span>
                                        <span>99</span>
                                    </li>
                                    <li className='flex justify-between text-justify hover:text-[blue]'>
                                        <span>Siemens</span>
                                        <span>99</span>
                                    </li>
                                </ul>
                            </div>
                            <div className='p-4 bg-[#F6F7F8] font-semibold text-center mt-10'>MORE</div>
                        </div>
                        {/* right sidebar */}
                        <div className='col-span-5 md:col-span-4'>
                            <div className='h-[500px] md:h-[400px] banner-bg-second'>
                                <Container className="relative h-full">
                                    <img src="images/iphone_6_plus.png" className='h-[50%] md:h-full absolute right-0 bottom-0' alt="" />
                                    <div className='text-white'>
                                        <h1 className='text-[66px] ml-4'>iPhone 6 Plus</h1>
                                        <div className='text-[24px] ml-4'>Performance and design. Taken right to the edge.</div>
                                        <button className='mt-16 text-[14px] ml-5' style={{ borderBottom: '3px solid white' }}>SHOP NOW</button>
                                    </div>
                                </Container>
                            </div>

                            <Container>
                                <div className='bg-[#F6F7F8] my-4 h-[50px] flex justify-between'>
                                    <div className='flex items-center gap-4 md:gap-8 mx-1 md:mx-7'>
                                        <div className='hidden md:block'>13 Items</div>
                                        <div className=' text-[11px] md:text-[18px]'>Sort By</div>
                                        <select className='p-3 focus:outline-none'>
                                            <option>Name</option>
                                            <option>Apple Ipod</option>
                                            <option>Apple Smartwatch 2</option>
                                            <option>Apple Smartwatch 2.0</option>
                                            <option>Apple homepod mini</option>
                                            <option>Apple Airpods Max</option>
                                            <option>Apple Camera</option>
                                            <option>iPhone Lightning Dock - Gold</option>
                                            <option>Apple Magic Trackpad 2</option>
                                            <option>Apple Macbook Pro</option>
                                            <option>New Apple Mac Mini</option>
                                            <option>Apple Smartwatch Magic</option>
                                            <option>Apple Airpods</option>
                                        </select>
                                        <select className='p-3 focus:outline-none hidden md:block'>
                                            <option>Show</option>
                                            <option>1</option>
                                            <option>2</option>
                                            <option>3</option>
                                            <option>4</option>
                                            <option>5</option>
                                            <option>6</option>
                                            <option>7</option>
                                            <option>8</option>
                                            <option>9</option>
                                            <option>10</option>
                                            <option>11</option>
                                            <option>12</option>
                                        </select>
                                    </div>
                                    <div className='flex gap-5 items-center'>
                                        <TbGridDots fontSize={40} />
                                        <RxHamburgerMenu fontSize={40} />
                                    </div>
                                </div>
                            </Container>
                            <Container>
                                <BestSeller products={products} />
                                <div className='block ml-12 mb-4 md:hidden'>
                                    <button className='border p-4'>Previous</button>
                                    <button className='border ml-[100px] px-9 py-4 bg-blue-500 text-white'>Next</button>
                                </div>
                            </Container>
                        </div>
                    </div>
                </div>
            </Container>
        </>
    )
}




function BestSeller({ products }) {
    return (
        <Container className="lg:grid-cols-4 md:grid-cols-2 grid px-3 my-7 gap-5 mb-[90px]">
            {
                products.map(
                    (prod, index) => <ProductBox {...prod} key={index} />
                )
            }


        </Container>
    )

}