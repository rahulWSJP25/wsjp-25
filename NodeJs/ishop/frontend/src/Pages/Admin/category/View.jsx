import React from 'react'
import { Link } from 'react-router-dom';
import Card from '../../../Components/Admin/Card';


export default function View() {
  return (
    <Card>
      <div>
      <Link to={"/admin"}>Dashboard</Link> / <Link to={"/admin/category"}>category</Link> / view
      </div>
      <hr className='my-2' />


      <div className="overflow-x-auto">
        <table className="table-auto min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Sr
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Name
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Slug
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Image
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Status
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Action
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {/* Replace the following row with your data dynamically generated */}
            <tr>
              <td className="px-6 py-4 whitespace-nowrap">1</td>
              <td className="px-6 py-4 whitespace-nowrap">Example Name</td>
              <td className="px-6 py-4 whitespace-nowrap">example-slug</td>
              <td className="px-6 py-4 whitespace-nowrap">[Image URL]</td>
              <td className="px-6 py-4 whitespace-nowrap">
                <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                  Active
                </span>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <a href="#" className="text-indigo-600 hover:text-indigo-900">
                  Edit
                </a>
                <span className="mx-1">|</span>
                <a href="#" className="text-red-600 hover:text-red-900">
                  Delete
                </a>
              </td>
            </tr>
            {/* End of dynamic data */}
          </tbody>
        </table>
      </div>


    </Card>
  )
}
