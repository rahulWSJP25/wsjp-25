import React from 'react';
import { Outlet } from 'react-router-dom';
import SideBar from '../../Components/Admin/SideBar';
import Header from '../../Components/Admin/Header';

export default function Main() {
  return (
    <div className='grid grid-cols-5'>
      <SideBar/>
      <div className='col-span-4'>
        <Header/>
        <Outlet/>
      </div>
    </div>
  )
}