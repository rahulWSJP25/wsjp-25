import React from 'react';
import Header from './Components/Header';
import Banner from './Components/Banner';
import Experts from './Components/Experts';
import NewsLetter from './Components/NewsLetter';
import Cards from './Components/Cards';
import Footer from './Components/Footer';

function App() {
  return (
    <div>
      <Header/>
      <Banner/>
      <Experts/>
      <NewsLetter/>
      <Cards/>
      <Footer/>
    </div>
  );
}

export default App;