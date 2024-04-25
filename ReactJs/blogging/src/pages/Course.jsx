import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { Link, useParams } from 'react-router-dom'
import courses from '../data/courses';

export default function Course() {

    const param = useParams();
    const slug = param.slug;
    const [data, setData] = useState(null);

    useEffect(
        () => {
            const d = courses.find(c => c.slug == slug);
            setData(d);
        },
        [slug]
    )

    return (
        <>
 
            <div className='container mx-auto px-4 py-8'>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                    <div>
                        <div className='bg-white p-6 rounded-lg shadow-md'>
                            <h1 className='text-2xl font-bold mb-4'>Courses</h1>
                            <ul>
                                {
                                    courses.map(
                                        (course, index) => (
                                            <Link key={index} to={`/course/${course.slug}`}>
                                                <li className={`${course.slug == slug ? "text-blue-600 font-bold" : ""}`}>{course.name}</li>
                                            </Link>
                                        )
                                    )
                                }
                            </ul>
                        </div>
                    </div>
                    <div className='bg-white p-6 rounded-lg shadow-md flex justify-between items-center gap-5'>
                        <div>
                            <img
                                src={data?.imageUrl}
                                alt='Course Image'
                                className='w-[200px] h-40 object-cover rounded-lg mb-4'
                            />
                        </div>
                        <div>
                            <h1 className='text-3xl font-bold mb-4'>Course Details</h1>
                            <h2 className='text-xl font-bold mb-2'>{data?.name}</h2>
                            <p className='text-gray-600 mb-4'>Duration: {data?.duration} months</p>
                            <p className='text-gray-700 mb-4'>${data?.fees}</p>
                            <p className='text-gray-800'>{data?.description}</p>
                        </div>
                    </div>
                </div>
            </div>



          
        </>
    )
}
