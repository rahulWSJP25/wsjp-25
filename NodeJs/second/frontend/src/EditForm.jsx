import React from 'react';

export default function EditForm({ data }) {
    console.log(data);
    const editHandler = (e) => {
       e.preventDefault();
    }

    return (
        <div className="shadow p-3">
            <h1 className='text-center my-2 text-2xl'>Edit your data</h1>
            <hr />
            <form onSubmit={editHandler}>
                <div className="mb-4">
                    <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
                        Name
                    </label>
                    <input
                        defaultValue={data?.name}
                        type="text"
                        id="name"
                        name="name"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
                        placeholder="Enter your name"
                        required=""
                        autoComplete="name"
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                        Email
                    </label>
                    <input
                        defaultValue={data?.email}
                        type="email"
                        id="email"
                        name="email"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
                        placeholder="Enter your email"
                        required=""
                        autoComplete="email"
                    />
                </div>
                <div className="mb-6">
                    <label htmlFor="password" className="block text-gray-700 font-medium mb-2">
                        Password
                    </label>
                    <input
                        defaultValue={data?.password}
                        type="password"
                        id="password"
                        name="password"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
                        placeholder="Enter your password"
                        required=""
                        autoComplete="current-password"
                    />
                </div>
                <div>
                    <button
                        type="submit"
                        className="w-full bg-indigo-500 text-white py-2 px-4 rounded-md hover:bg-indigo-600 focus:outline-none focus:bg-indigo-600"
                    >
                        Save
                    </button>
                </div>
            </form>

        </div>
    )
}
