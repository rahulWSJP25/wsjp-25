
import React from 'react';
import Header from './Components/Header';
import FooterAreas from './Components/FooterAreas';
import { Outlet } from 'react-router-dom';


export default function Main() {
  return (
    <>
      <Header />
      <Outlet />
      <FooterAreas />
    </>
  );
}


