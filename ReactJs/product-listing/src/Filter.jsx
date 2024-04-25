import React from 'react';

export default function Filter({ fromChangeHandler, toChangeHandler, range, categories, filterCategory, categorySelectHandler }) {
    return (
        <div>
            <div className='text-xl my-3'>Categories</div>
            <ul className='py-3'>
                <li onClick={() => categorySelectHandler(null)} className={`p-2 shadow cursor-pointer ${filterCategory == null ? "bg-blue-500 text-white" : ""}`}>All</li>
                {
                    categories.map(
                        (cat, index) => {
                            return <li onClick={() => categorySelectHandler(cat)} className={`p-2 shadow cursor-pointer ${filterCategory == cat ? "bg-blue-500 text-white" : ""}`} key={index}>{cat}</li>
                        }
                    )
                }
            </ul>
            <hr className='my-3' />
            <div className='text-xl my-3'>Price Filter</div>
            <div className='flex items-center'>
                <input onChange={(e) => fromChangeHandler(e.target.value)} value={range.from} type="number" className='border p-3 w-[40%]' />
                <div className='flex-grow text-center'>To</div>
                <input onChange={(e) => toChangeHandler(e.target.value)} value={range.to} type="number" className='border p-3 w-[40%]' />
            </div>
        </div>
    )
}
