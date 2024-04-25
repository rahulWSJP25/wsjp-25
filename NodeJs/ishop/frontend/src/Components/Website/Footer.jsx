import React from 'react';
import Container from '../Container';
import { MdFacebook } from "react-icons/md";
import { TfiTwitterAlt } from "react-icons/tfi";

export default function Footer() {
  return (
    <>
      <Container>
        <div className='block md:flex justify-between gap-3 my-5'>
          <div className='w-full md:w-[268px] text-justify'>
            <img src="images/ishop.svg" alt="" className='mx-auto' />
            <div className='p-5 text-[10] md:text-[14px] my-3'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
              Lorem Ipsum has been the industry's
              standard dummy text ever.Since the 1500s, when an unknown printer.
            </div>
          </div>
          {/* second div */}
          <div className='w-full md:w-[268px] text-justify'>
            <div className='text-center text-[18px] font-semibold'>Follow Us</div>
            <div className='p-5 text-[10] md:text-[14px] my-3'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
              Lorem Ipsum has been the industry's
              standard dummy text ever.Since the 1500s, when an unknown printer.
            </div>
            <div className='flex ml-7 md:ml-3 gap-7'>
              <MdFacebook color='#385C8E' />
              <TfiTwitterAlt color='#03A9F4' />
            </div>
          </div>
          {/* third */}
          <div className='w-full mt-3 text-center md:w-[268px] md:text-justify'>
            <div className='ml-6 font-semibold text-[18px]'>Contact Us</div>
            <div className='p-5 text-[10] md:text-[14px] my-1'>iShop: address @building 124 <br />
              Call us now: 0123-456-789 <br />
              Email: support@whatever.com
            </div>
          </div>
        </div>
      </Container>

      <Container>
        <div className='block text-center md:flex justify-between'>
          <div>
              <div className='text-[18px] font-semibold'>Infomation</div>
              <ul className='text[14px] text-[#262626] my-2'>
                <li>About Us</li>
                <li>Infomation</li>
                <li>Privacy Policy</li>
                <li>Terms & Conditions</li>
              </ul>
          </div>
          <div>
              <div className='text-[18px] font-semibold'>Service</div>
              <ul className='text[14px] text-[#262626] my-2'>
                <li>About Us</li>
                <li>Infomation</li>
                <li>Privacy Policy</li>
                <li>Terms & Conditions</li>
              </ul>
          </div>
          <div>
              <div className='text-[18px] font-semibold'>Extras</div>
              <ul className='text[14px] text-[#262626] my-2'>
                <li>About Us</li>
                <li>Infomation</li>
                <li>Privacy Policy</li>
                <li>Terms & Conditions</li>
              </ul>
          </div>
          <div>
              <div className='text-[18px] font-semibold'>My Account</div>
              <ul className='text[14px] text-[#262626] my-2'>
                <li>About Us</li>
                <li>Infomation</li>
                <li>Privacy Policy</li>
                <li>Terms & Conditions</li>
              </ul>
          </div>
          <div>
              <div className='text-[18px] font-semibold'>Userful Links</div>
              <ul className='text[14px] text-[#262626] my-2'>
                <li>About Us</li>
                <li>Infomation</li>
                <li>Privacy Policy</li>
                <li>Terms & Conditions</li>
              </ul>
          </div>
          <div>
              <div className='text-[18px] font-semibold'>Our Offers</div>
              <ul className='text[14px] text-[#262626] my-2'>
                <li>About Us</li>
                <li>Infomation</li>
                <li>Privacy Policy</li>
                <li>Terms & Conditions</li>
              </ul>
          </div>
        </div>
      </Container>

      <Container>
        <div className='flex justify-start ml-[25%] mt-5  md:justify-end gap-4 my-4'>
           <img src="images/Western_union.svg" alt="" />
           <img src="images/Western_union.svg" alt="" />
           <img src="images/Paypal.svg" alt="" />
           <img src="images/visa.svg" alt="" />
        </div>
      </Container>
    </>
  )
}
