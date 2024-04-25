import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { Link } from 'react-router-dom'

export default function PageNotFound() {
    return (
        <>
          
            <div className='text-center'>
                <h1 className="text-5xl font-bold text-red-600">404</h1>
                <p className="text-xl font-semibold text-gray-600 mb-4">Page Not Found</p>
                <p className="text-gray-600">
                    The page you are looking for might have been removed or doesn't exist.
                </p>
                <Link to="/" className="text-blue-500 hover:underline mt-4">
                    <button className='rounded bg-blue-500 text-white p-3 mt-3'>Go to Home Page</button>
                </Link>
            </div>
           
        </>
    )
}
