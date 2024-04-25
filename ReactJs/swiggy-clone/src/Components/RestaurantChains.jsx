import React, { useState } from 'react';
import Container from './Container';
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";

export default function RestaurantChains() {
  const [shift, setShift] = useState(0);
  const changeImg = [
    "092e58460657922e098a8afd5db838fe.jpeg",
    "127d6d2a1a4f3e995fba2c5dd93b574f.jpeg",
    "5116a385bac0548e06c33c08350fbf11.jpeg",
    "56646c3f698b3c5ae53639c49a4725af.jpeg",
    "63178e3e64d503a479f2a2048a474552.jpeg",
    "a02ez4rzghg8xhtzk9vd.jpeg",
    "af33b81798b11deba338e94b7585d348.jpeg",
    "b9ixfa8dpbf19njypjbt.jpeg",
    "b14cd9fc40129fcfb97aa7e621719d07.jpeg",
    "b318c0b4bc2169550145ace1d6e791a2.jpeg",
    "bde9c0259c7166396277113218cf10fa.jpeg",
    "bf9be1c6b9d796850f426281559cb2d2.jpeg",
    "d0d837e45d962005a9b7504279649dd5.jpeg",
    "e33e1d3ba7d6b2bb0d45e1001b731fcf.jpeg",
    "e554c893e09e1bb60f6c52e8373e0e08.jpeg",
    "6e04be27387483a7c00444f8e8241108.jpeg",
    "3c1341886b2ff78acd10287efedf07f6.jpeg",
    "2a62942e8d21bdae53cf8b9b7b05b904.jpeg",
    "1a8dfa8b2a73ddf7c6193465ab24c898.jpeg",
    "0e5afac5bef81cd2bde8edb824939c40.jpeg"
  ]

  console.log(changeImg.length);
  const shiftChangeHandler = (flag) => {
    if (flag) {
      if (shift == changeImg.length - 8) return false;
      setShift(shift + 3);
    } else {
      if (shift == 0) return false;
      setShift(shift - 3);
    }
  }
  return (
    <Container>
      <div>
        <div className='font-bold text-[24px] my-2 relative'>
          Top restaurant chains in Jaipur
          <div onClick={() => shiftChangeHandler(true)} className='bg-slate-400 cursor-pointer p-4 rounded-full absolute top-0 right-0'>
            <FaArrowRight fontSize={16} />
          </div>
          <div onClick={() => shiftChangeHandler(false)} className='bg-slate-400 p-4 cursor-pointer rounded-full absolute top-0 right-[60px]'>
            <FaArrowLeft fontSize={16} />
          </div>
        </div>
        <div className='w-full flex overflow-x-hidden mt-7'>
          {
            changeImg.map(
              (img, index) => {
                return <div key={index} className='w-[273px] h-[182px] shrink-0 duration-200 ml-3' style={
                  {
                    transform: `translateX(-${shift * 100}%)`
                  }
                }>
                  <img src={`images/${img}`} className='w-full duration-500 h-full hover:scale-[1.1] rounded-xl relative' alt="" />
                  <div className='absolute top-[140px] text-white font-bold text-2xl left-4'>20% OFF UPTO ₹ 50 </div>
                </div>
              }
            )
          }
        </div>

      </div>
    </Container>


  )
}

