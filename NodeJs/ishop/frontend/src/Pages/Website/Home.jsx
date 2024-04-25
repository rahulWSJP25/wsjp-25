import React from 'react';
import Container from '../../Components/Container';
import ProductBox from '../../Components/Website/ProductBox';
import { FaStar } from "react-icons/fa6";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

export default function Home() {

  var settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  }
  const products = [
    {
      name: "Apple Macbook Pro",
      img: "images/apple_macbook.png",
      price: 599,
      discount: 499,
      rating: 4,
      hot: true
    },
    {
      name: "Apple Macbook Pro",
      img: "images/fill_cart.png",
      price: 599,
      discount: 499,
      rating: 4,
      hot: false
    },
    {
      name: "Apple Macbook Pro",
      img: "images/Apple Macbook Air.png",
      price: 599,
      discount: 499,
      rating: 4,
      hot: true
    },
    {
      name: "Apple iPhone 11",
      img: "images/Apple iPhone 11.png",
      price: 599,
      discount: 499,
      rating: 4,
      hot: true
    },
    {
      name: "Apple Macbook Pro",
      img: "images/in-resources-8fda3511-a61f-4c26-a4a0-f2bd37049878-images-productimages-29679821-500x500@2x.png",
      price: 599,
      discount: 499,
      rating: 4,
      hot: true
    },
    {
      name: "Apple Ipad",
      img: "images/Apple Ipad.png",
      price: 599,
      discount: 499,
      rating: 4,
      hot: false
    },
    {
      name: "Apple Watch 21-1",
      img: "images/Apple Watch 21-1.png",
      price: 599,
      discount: 499,
      rating: 4,
      hot: true
    },
    {
      name: "Apple iPod 2A",
      img: "images/apple_iPod_2A.png",
      price: 599,
      discount: 499,
      rating: 4,
      hot: true
    }
  ]

  return (
    <>
      <div className='h-[500px] md:h-[650px] my-1 md:my-6 banner-bg '>
        <Container className="relative h-full">
          <img src="images/2_corousel.png" className='h-full absolute right-0 bottom-0' alt="" />
        </Container>
      </div>
      <Container>
        <div className='text-[30px] font-bold text-center uppercase'>Best Seller</div>
        <ul className='md:flex hidden justify-center my-3 gap-10'>
          <li>All</li>
          <li>Mac</li>
          <li>iPhone</li>
          <li>iPad</li>
          <li>iPod</li>
          <li>Accessories</li>
        </ul>
        <select className='mx-auto block md:hidden my-3 w-[70%] bg-[#F8F8F8] p-3 focus:outline-none'>
          <option>All</option>
          <option>Mac</option>
          <option>iPhone</option>
          <option>iPad</option>
          <option>iPod</option>
          <option>Accessories</option>
        </select>
      </Container>
      <BestSeller products={products} />


      <Container>
        <div className='text-[#33A0FF] text-[14px] underline font-bold text-center mt-[100px]'>LOAD MORE</div>
      </Container>

       {/* blue banner code */}
      <div className='h-[500px] md:h-[600px] my-1 md:my-6 banner-bg-second '>
        <Container className="relative h-full">
          <img src="images/iphone_6_plus.png" className='h-[50%] md:h-full absolute right-0 bottom-0' alt="" />
          <div className='text-white'>
            <h1 className='text-[66px]'>iPhone 6 Plus</h1>
            <div className='text-[24px]'>Performance and design. Taken right to the edge.</div>
            <button className='mt-16 text-[14px]' style={{ borderBottom: '3px solid white' }}>SHOP NOW</button>
          </div>
        </Container>
      </div>


      <Container className="block gap-3 md:flex justify-around">
        <div className='shadow-lg p-3 w-full md:w-[330px] text-center'>
          <img src="images/shipping.svg" alt="" className='mx-auto' />
          <div className='font-bold my-2'>FREE SHIPPING</div>
          <div className='text-[#22262A] text-[14px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
            do eiusmod tempor minim veniam, quis nostrud reprehenderit in
            voluptate velit esse cillum dolore eu fugiat nulla pariatur
          </div>
        </div>
        {/* second-container-box */}
        <div className='shadow-lg p-3 w-full md:w-[330px] text-center'>
          <img src="images/refund.svg" alt="" className='mx-auto' />
          <div className='font-bold my-2'>100% REFUND</div>
          <div className='text-[#22262A] text-[14px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
            do eiusmod tempor minim veniam, quis nostrud reprehenderit in
            voluptate velit esse cillum dolore eu fugiat nulla pariatur
          </div>
        </div>
        {/* third container box*/}
        <div className='shadow-lg p-3 w-full md:w-[330px] text-center'>
          <img src="images/support.svg" alt="" className='mx-auto' />
          <div className='font-bold my-2'>SUPPORT 24/7</div>
          <div className='text-[#22262A] text-[14px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
            do eiusmod tempor minim veniam, quis nostrud reprehenderit in
            voluptate velit esse cillum dolore eu fugiat nulla pariatur
          </div>
        </div>
      </Container>

      {/* slider code  starts */}
      <div className='font-semibold text-center my-5 text-[30px]'>FEATURED PRODUCTS</div>
      <Container className="slider-container">
        <Slider {...settings}>
          <div className='overflow-hidden'>
            <div className='block gap-3 md:flex  justify-around'>
              <div className='w-full gap-3 md:w-[319px] h-[212px] shadow-xl flex items-center'>
                <div>
                  <img src="images/beats_solo_2.png" alt="" />
                </div>
                <div className='flex flex-col'>
                  <p>Beats Solo 2 On Ear Headphones - Black</p>
                  <p className='flex'>
                    <FaStar color='yellow' />
                    <FaStar color='yellow' />
                    <FaStar color='yellow' />
                    <FaStar color='yellow' />
                    <FaStar color='grey' />
                  </p>
                  <div className='flex gap-3'>
                    <p className='text-red-500'>$499</p>
                    <p className='line-through text-slate-600'>$599</p>
                  </div>

                </div>
              </div>
            </div>
          </div>
          <div>
            <div className='w-full gap-3 md:w-[319px] h-[212px] shadow-xl flex items-center'>
              <div>
                <img src="images/H-squared.png" alt="" />
              </div>
              <div className='flex flex-col'>
                <p>Beats Solo 2 On Ear Headphones - Black</p>
                <p className='flex'>
                  <FaStar color='yellow' />
                  <FaStar color='yellow' />
                  <FaStar color='yellow' />
                  <FaStar color='yellow' />
                  <FaStar color='grey' />
                </p>
                <div className='flex gap-3'>
                  <p className='text-red-500'>$499</p>
                  <p className='line-through text-slate-600'>$599</p>
                </div>

              </div>
            </div>
          </div>
          <div>
            <div className='w-full gap-3 md:w-[319px] h-[212px] shadow-xl flex items-center'>
              <div>
                <img src="images/Netatmo_rain.png" alt="" />
              </div>
              <div className='flex flex-col'>
                <p>Beats Solo 2 On Ear Headphones - Black</p>
                <p className='flex'>
                  <FaStar color='yellow' />
                  <FaStar color='yellow' />
                  <FaStar color='yellow' />
                  <FaStar color='yellow' />
                  <FaStar color='grey' />
                </p>
                <div className='flex gap-3'>
                  <p className='text-red-500'>$499</p>
                  <p className='line-through text-slate-600'>$599</p>
                </div>
              </div>
            </div>
          </div>
        </Slider>
      </Container>

      {/* slider code ends */}
    </>
  )
}

function BestSeller({ products }) {
  return (
    <Container className="lg:grid-cols-4 md:grid-cols-2 grid px-3 my-7 gap-5 mb-[100px]">
      {
        products.map(
          (prod, index) => <ProductBox {...prod} key={index} />
        )
      }


    </Container>
  )

}