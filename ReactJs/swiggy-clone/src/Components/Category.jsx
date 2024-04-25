import React, { useState } from 'react';
import Container from './Container';
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";

export default function Category() {
    const [shift, setShift] = useState(0);
    const categoryImages = [
        "Paratha.jpeg",
        "Ice_Creams.jpeg",
        "Rasmalai.jpeg",
        "Coffee.jpeg",
        "Juice.jpeg",
        "Gulab_Jamun.jpeg",
        "Noodles.jpeg",
        "Pasta.jpeg",
        "Pav_Bhaji.jpeg",
        "Lassi.jpeg",
        "Momos.jpeg",
        "Cakes.jpeg",
        "Chinese.jpeg",
        "Dosa.jpeg",
        "Biryani_2.jpeg",
        "North_Indian_4.jpeg",
        "Rolls.jpeg",
        "Burger.jpeg",
        "Rasgulla.jpeg",
        "Pizza.jpeg"
    ]
    console.log(categoryImages.length);
    const shiftChangeHandler = (flag) => {
        if (flag) {
            if (shift == categoryImages.length - 8) return false;
            setShift(shift + 3);
        } else {
            if (shift == 0) return false;
            setShift(shift - 3);
        }
    }
    return (
        <Container>
            <div className='font-bold text-[24px] my-2 relative'>
                What's on your mind ?
                <div onClick={() => shiftChangeHandler(true)} className='bg-slate-400 cursor-pointer p-4 rounded-full absolute top-0 right-0'>
                    <FaArrowRight fontSize={16} />
                </div>
                <div onClick={() => shiftChangeHandler(false)} className='bg-slate-400 p-4 cursor-pointer rounded-full absolute top-0 right-[60px]'>
                    <FaArrowLeft fontSize={16} />
                </div>
            </div>
            <div className='w-full flex overflow-x-hidden mt-3'>
                {
                    categoryImages.map(
                        (img, index) => {
                            return <div key={index} className='w-[150px] shrink-0 duration-200' style={
                                {
                                    transform: `translateX(-${shift * 100}%)`
                                }
                            }>
                                <img src={`images/${img}`} className='w-full' alt="" />
                            </div>
                        }
                    )
                }
            </div>
        </Container>
    )
}
