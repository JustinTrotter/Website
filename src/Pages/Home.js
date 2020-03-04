import React from 'react';
import Header from '../Components/Header';
import About from '../Components/About';
import Experience from '../Components/Experience';
import Portfolio from '../Components/Portfolio';

function Home() {
  return (
    <>
      <Header/>
      <About/>
      <Experience/>
      <Portfolio/>
    </>
  );
}

export default Home;