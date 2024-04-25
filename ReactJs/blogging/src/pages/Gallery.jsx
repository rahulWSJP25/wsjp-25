import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'

export default function Gallery() {
    return (
        <>
           
            {/* Main Content */}
            <div className="container mx-auto mt-8">
                <h1 className="text-3xl font-bold mb-4">Gallery</h1>
                <div className="grid grid-cols-3 gap-4">
                    {/* Gallery Images */}
                    <img
                        src="https://via.placeholder.com/300"
                        alt="Image 1"
                        className="rounded-lg"
                    />
                    <img
                        src="https://via.placeholder.com/300"
                        alt="Image 2"
                        className="rounded-lg"
                    />
                    <img
                        src="https://via.placeholder.com/300"
                        alt="Image 3"
                        className="rounded-lg"
                    />
                </div>
            </div>
           
        </>

    )
}
