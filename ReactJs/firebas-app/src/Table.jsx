import React, { useEffect, useState } from 'react';
import { getDatabase, ref, onValue } from "firebase/database";

export default function Table() {

    const [data, setData] = useState([]);

    const fetchData = () => {
        const db = getDatabase();
        onValue(
            ref(db, 'students'),
            (snapshot) => {
                const students_data = snapshot.val();
                setData(students_data);
            });
    }

    useEffect(
        fetchData,
        []  
    )

    const tbody = [];
    let sr = 1;
    for (let key in data) {
        tbody.push(

            <tr>
                <td className="border border-gray-300 px-4 py-2">
                    {sr++}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                    {data[key].name}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                    {data[key].contact}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                    {data[key].email}
                </td>
            </tr>
        )
    }

    return (
        <div className='col-span-3'>
            <table className="w-full border border-gray-300">
                <thead>
                    <tr className="bg-gray-200">
                        <th className="border border-gray-300 px-4 py-2">Sr.</th>
                        <th className="border border-gray-300 px-4 py-2">Name</th>
                        <th className="border border-gray-300 px-4 py-2">Contact</th>
                        <th className="border border-gray-300 px-4 py-2">Email</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data?.length == 0
                            ? <tr>
                                <td colSpan={3} className='text-center text-xl animate-pulse'>Loading......</td>
                            </tr>
                            :
                            tbody
                    }
                </tbody>
            </table>

        </div>
    )
}
