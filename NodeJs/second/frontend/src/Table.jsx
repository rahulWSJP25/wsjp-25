import axios from 'axios';
import React from 'react';

export default function Table({ users, fetchUser, openToast, editUser }) {

  const delUser = (id) => {
    axios.delete(`http://localhost:5000/delete/${id}`)
      .then(
        (success) => {
          if (success.data.status == 1) {
            fetchUser();
          } else {

          }
          openToast(success.data.msg, success.data.status);
        }
      )
      .catch(
        () => {

        }
      );

  }

  const changeStatus = (user_id, new_status) => {
    axios.patch(`http://localhost:5000/change-status/${user_id}/${new_status}`)
      .then(
        (success) => {
          if (success.data.status == 1) {
            fetchUser();
          } else {

          }
          openToast(success.data.msg, success.data.status);
        }
      )
      .catch(
        () => {

        }
      );
  }

  return (
    <div>
      <table className="min-w-full divide-y divide-gray-200">
        <thead>
          <tr>
            <th scope="col" className="border px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Name
            </th>
            <th scope="col" className="border px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Email
            </th>
            <th scope="col" className="border px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Password
            </th>
            <th scope="col" className="border px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Status
            </th>
            <th scope="col" className="border px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Action
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {
            users.map(
              (user) => {
                return (
                  <tr className='border' key={user._id}>
                    <td className="border px-6 py-4 whitespace-nowrap">{user.name}</td>
                    <td className="border px-6 py-4 whitespace-nowrap">{user.email}</td>
                    <td className="border px-6 py-4 whitespace-nowrap">{user.password}</td>
                    <td className="border px-6 py-4 whitespace-nowrap">
                      {
                        user.status == true ?
                          <button onClick={() => changeStatus(user._id, false)} className='bg-green-600 text-white p-2'>Active</button>
                          :
                          <button onClick={() => changeStatus(user._id, true)} className='bg-orange-600 text-white p-2'>Inactive</button>
                      }
                    </td>
                    <td className='text-center'>
                      <button onClick={() => delUser(user._id)} className='ml-3 my-2 p-3 bg-red-600 text-white'>Delete</button>
                      <button onClick={() => editUser(user._id)} className='ml-3 my-2 p-3 bg-blue-600 text-white'>Edit</button>
                    </td>
                  </tr>
                )
              }
            )
          }

        </tbody>
      </table>
    </div>
  )
}
