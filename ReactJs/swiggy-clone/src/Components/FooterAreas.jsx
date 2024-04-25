import React, { useState } from 'react';
import Container from './Container';
import { RxCaretDown } from "react-icons/rx";
import { useLocation } from 'react-router-dom';


export default function FooterAreas() {

    const location = useLocation();
    const [showMore, setShowMore] = useState(false);

    return (
        <div className={`${location.pathname == "/search" ? 'hidden' : ''}`}>
            <div className={`${location.pathname == "/sign-in" ? 'hidden' : ''}`}>
                <Container>
                    <h1 className="font-bold text-2xl p-4 ">Best Places to Eat Across Cities</h1>
                    <div className='flex flex-wrap gap-3 p-3'>
                        <div className="border p-3">Best Restaurants in Bangalore</div>
                        <div className="border p-3">Best Restaurants in Pune</div>
                        <div className="border p-3">Best Restaurants in Mumbai</div>
                        <div className="border p-3">Best Restaurants in Delhi</div>
                        <div className="border p-3">Best Restaurants in Hyderabad</div>
                        <div className="border p-3">Best Restaurants in Kolkata</div>
                        <div className="border p-3">Best Restaurants in Chennai</div>
                        <div className="border p-3">Best Restaurants in Chandigarh</div>
                        <div className="border p-3">Best Restaurants in Ahmedabad</div>
                        <div className="border p-3">Best Restaurants in Jaipur</div>
                        <div className="border p-3">Best Restaurants in Nagpur</div>
                        <div className='border p-3 flex items-center'>
                            <span className='block w-full'>Show More</span> <RxCaretDown fontSize={30} onClick={() => setShowMore(!showMore)} />
                        </div>
                        <div>
                            {
                                showMore
                                    ?
                                    (
                                        <>
                                            <div className='flex gap-2 w-full flex-wrap'>
                                                <div className="border p-3">Best Restaurants in Bareilly</div>
                                                <div className="border p-3">Best Restaurants in Moradabad</div>
                                                <div className="border p-3">Best Restaurants in Mysore</div>
                                                <div className="border p-3">Best Restaurants in Gurgaon</div>
                                                <div className="border p-3">Best Restaurants in Aligarh</div>
                                                <div className="border p-3">Best Restaurants in Jalandhar</div>
                                                <div className="border p-3">Best Restaurants in Bhubaneswar</div>
                                                <div className="border p-3">Best Restaurants in Salem</div>
                                                <div className="border p-3">Best Restaurants in Warangal</div>
                                                <div className="border p-3">Best Restaurants in Guntur</div>
                                                <div className="border p-3">Best Restaurants in Bhiwandi</div>
                                                <div className="border p-3">Best Restaurants in Saharanpur</div>
                                                <div className="border p-3">Best Restaurants in Gorakhpur</div>
                                                <div className="border p-3">Best Restaurants in Bikaner</div>
                                                <div className="border p-3">Best Restaurants in Amravati</div>
                                                <div className="border p-3">Best Restaurants in Noida</div>
                                                <div className="border p-3">Best Restaurants in Jamshedpur</div>
                                                <div className="border p-3">Best Restaurants in Bhilai</div>
                                                <div className="border p-3">Best Restaurants in Cuttack</div>
                                                <div className="border p-3">Best Restaurants in Firozabad</div>
                                                <div className="border p-3">Best Restaurants in Kochi</div>
                                                <div className="border p-3">Best Restaurants in Nellore</div>
                                                <div className="border p-3">Best Restaurants in Bhavnagar</div>
                                                <div className="border p-3">Best Restaurants in Dehradun</div>
                                                <div className="border p-3">Best Restaurants in Durgapur</div>
                                                <div className="border p-3">Best Restaurants in Asansol</div>
                                                <div className="border p-3">Best Restaurants in Rourkela</div>
                                                <div className="border p-3">Best Restaurants in Nanded</div>
                                                <div className="border p-3">Best Restaurants in Kolhapur</div>
                                            </div>
                                        </>
                                    )
                                    :
                                    ""
                            }
                        </div>


                    </div>
                    <h1 className='font-bold text-2xl p-2'>Best Cuisines Near Me</h1>
                    <div className='flex flex-wrap p-4 gap-3'>
                        <div className='border p-3'>Chinese Restaurants Near Me</div>
                        <div className='border p-3'>South Indian Restaurants Near Me</div>
                        <div className='border p-3'>Indian Restaurants Near Me</div>
                        <div className='border p-3'>Kerala Restaurants Near Me</div>
                        <div className='border p-3'>Korean Restaurants Near Me</div>
                        <div className='border p-3'>North Indian Restaurants Near Me</div>
                        <div className='border p-3'>Seafood Restaurants Near Me</div>
                        <div className='border p-3'>Bengali Restaurants Near Me</div>
                        <div className='border p-3'>Punjabi Restaurants Near Me</div>
                        <div className='border p-3'>Italian Restaurants Near Me</div>
                        <div className='border p-3'>Andhra Restaurants Near Me</div>
                        <div className='border p-3 flex items-center'>
                            Show More <RxCaretDown fontSize={30} onClick={() => setShowMore(!showMore)} />
                        </div>
                        <div>
                            {
                                showMore ? (
                                    <>
                                        <div className='flex gap-2 w-full flex-wrap'>
                                            <div className="border p-3">Best Restaurants in Tirupati</div>
                                            <div className="border p-3">Best Restaurants in Davanagere</div>
                                            <div className="border p-3">Best Restaurants in Kozhikode</div>
                                            <div className="border p-3">Best Restaurants in Akola</div>
                                            <div className="border p-3">Best Restaurants in Kurnool</div>
                                            <div className="border p-3">Best Restaurants in Rajpur Sonarpur</div>
                                            <div className="border p-3">Best Restaurants in Rajahmundry</div>
                                            <div className="border p-3">Best Restaurants in Ballari</div>
                                            <div className="border p-3">Best Restaurants in Agartala</div>
                                            <div className="border p-3">Best Restaurants in Bhagalpur</div>
                                            <div className="border p-3">Best Restaurants in Latur</div>
                                            <div className="border p-3">Best Restaurants in Dhule</div>
                                            <div className="border p-3">Best Restaurants in Pali</div>
                                            <div className="border p-3">Best Restaurants in Raichur</div>
                                            <div className="border p-3">Best Restaurants in Alwar</div>
                                            <div className="border p-3">Best Restaurants in Ichalkaranji</div>
                                            <div className="border p-3">Best Restaurants in Bardhaman</div>
                                            <div className="border p-3">Best Restaurants in Sangli</div>
                                            <div className="border p-3">Best Restaurants in Kakinada</div>
                                            <div className="border p-3">Best Restaurants in Nizamabad</div>
                                            <div className="border p-3">Best Restaurants in Parbhani</div>
                                            <div className="border p-3">Best Restaurants in Tumkur</div>
                                            <div className="border p-3">Best Restaurants in Khammam</div>
                                            <div className="border p-3">Best Restaurants in Ozhukarai</div>
                                            <div className="border p-3">Best Restaurants in Bokaro Steel City</div>
                                        </div>
                                    </>
                                )
                                    :
                                    ""
                            }
                        </div>
                    </div>

                    <h1 className='font-bold p-4 text-2xl'>Explore Every Restaurants Near Me</h1>
                    <div className='text-center gap-3 grid grid-cols-2'>
                        <div className='border p-3 ml-5 rounded '>Explore Restaurants Near Me</div>
                        <div className='border p-3 mr-5 rounded'>Explore Top Rated Restaurants Near Me</div>
                    </div>
                </Container >

                <div className='bg-slate-600 my-4'>
                    <div className="grid grid-cols-2 gap-2 items-center">
                        <div className='text-white text-center'>For a better experience, download <br />
                            the Swiggy app now
                        </div>
                        <div className='flex gap-2 items-center p-4'>
                            <img src="images/play_store.png" alt="" className='w-1/3' />
                            <img src="images/app_store.png" alt="" className='w-1/3' />
                        </div>
                    </div>
                </div>

                {/* footer area starts here */}

                <div className='bg-[#282c3f]'>
                    <Container>
                        <div className='grid grid-cols-4 borer border-blue-600 text-white p-4'>
                            {/* first */}
                            <div className='flex gap-2 p-3'>
                                <img src="images/swiggy-logo-icon.svg" alt='' className='w-5 h-7' />
                                Swiggy <br />
                                © 2023 Bundl Technologies Pvt. Ltd
                            </div>
                            {/* second */}
                            <div>
                                <h1 className='font-bold text-2xl'>Company</h1>
                                <ul>
                                    <li>
                                        About
                                    </li>
                                    <li>
                                        Careers
                                    </li>
                                    <li>
                                        Team
                                    </li>
                                    <li>
                                        Swiggy One
                                    </li>
                                    <li>
                                        Swiggy Instamart
                                    </li>
                                    <li>
                                        Swiggy Genie
                                    </li>
                                </ul>
                            </div>
                            {/* third */}
                            <div>
                                <ul>
                                    <h1 className='font-bold text-2xl mb-2'>Contact us</h1>
                                    <li>Help & Support</li>
                                    <li>Parter with us</li>
                                    <li>Ride with us</li>

                                    <ul>
                                        <h1 className='font-bold text-2xl mb-2'>Legal</h1>
                                        <li>Terms & Conditions</li>
                                        <li>Cookie Policy</li>
                                        <li>Privacy Policy</li>
                                    </ul>
                                </ul>
                            </div>
                            {/* forth */}
                            <div>
                                <ul>
                                    <h1 className='font-bold text-2xl mb-2'>We deliver to:</h1>
                                    <li>Bangalore</li>
                                    <li>Gurgaon</li>
                                    <li>Hyderabad</li>
                                    <li>Delhi</li>
                                    <li>Mumbai</li>
                                    <li>Pune</li>
                                    <button className='border p-2'>589 Cities</button>
                                </ul>
                            </div>
                        </div>
                    </Container>
                </div>
            </div >
        </div >

    )
}
