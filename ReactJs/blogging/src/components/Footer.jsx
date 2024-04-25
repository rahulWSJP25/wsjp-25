import React from 'react';
import courses from '../data/courses';
import { Link } from 'react-router-dom';

export default function Footer() {
    return (
        <>
            <footer className="bg-gray-200 flex justify-around items-center p-4 mt-8">
                <div>
                    <p>© 2024 WsCube Tech. All rights reserved.</p>
                </div>
                <div>
                    <h1 className='text-2xl my-2'>Courses</h1>
                    <ul>
                        {
                            courses.map(
                                (course, index) => (
                                    <Link key={index} to={`/course/${course.slug}`}>
                                        <li className='text-black hover:text-blue-700 cursor-pointer'>{course.name}</li>
                                    </Link>
                                )
                            )
                        }
                    </ul>
                </div>
            </footer>
        </>

    )
}
