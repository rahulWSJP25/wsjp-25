import React from 'react'

export default function ContactUs() {
    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold mb-4">Contact Us</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-white p-6 rounded-lg shadow-md">
                    <h2 className="text-xl font-bold mb-2">Reach out to us</h2>
                    <p className="text-gray-800 mb-4">
                        We're here to answer any questions you may have about our courses. Reach
                        out to us and we'll respond as soon as we can.
                    </p>
                    <form action="#" method="POST">
                        <div className="mb-4">
                            <label
                                htmlFor="name"
                                className="block text-gray-700 font-semibold mb-2"
                            >
                                Your Name
                            </label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                                required=""
                            />
                        </div>
                        <div className="mb-4">
                            <label
                                htmlFor="email"
                                className="block text-gray-700 font-semibold mb-2"
                            >
                                Your Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                                required=""
                            />
                        </div>
                        <div className="mb-4">
                            <label
                                htmlFor="message"
                                className="block text-gray-700 font-semibold mb-2"
                            >
                                Your Message
                            </label>
                            <textarea
                                id="message"
                                name="message"
                                rows={4}
                                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                                required=""
                                defaultValue={""}
                            />
                        </div>
                        <div>
                            <button
                                type="submit"
                                className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600"
                            >
                                Send Message
                            </button>
                        </div>
                    </form>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                    <h2 className="text-xl font-bold mb-2">Our Contact Information</h2>
                    <p className="text-gray-800 mb-4">
                        Feel free to get in touch with us using the following contact
                        information:
                    </p>
                    <p className="text-gray-700">
                        <strong>Email:</strong> info@wscubetech.com
                    </p>
                    <p className="text-gray-700">
                        <strong>Phone:</strong> +1 (123) 456-7890
                    </p>
                    <p className="text-gray-700">
                        <strong>Address:</strong> 123 WsCube Street, Techland, ABC123
                    </p>
                </div>
            </div>
        </div>

    )
}
