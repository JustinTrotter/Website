import React from 'react';
import './App.css';
import Header from './Components/Header';
import About from './Components/About';
import Experience from './Components/Experience';
import Portfolio from './Components/Portfolio';

function App() {
  return (
    <div className="App">
      <Header/>
      <About/>
      <Experience/>
      <Portfolio/>
    </div>
  );
}

export default App;
