import React from 'react';
import jsonData from '../Data/resume.json';

const Header = () => {
  const {name, occupation, occupation2, description} = jsonData;
  const networks = jsonData.social.map((network) => {
    return <li key={network.name}><a href={network.url}><i className={network.className}></i></a></li>
  })
  return (
    <header id="home">

      <nav id="nav-wrap">

        <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
          <a className="mobile-btn" href="#home" title="Hide navigation">Hide navigation</a>

        <ul id="nav" className="nav">
          <li className="current"><a  href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#resume">Resume</a></li>
          <li><a href="#portfolio">Portfolio</a></li>
          <li><a href="#testimonials">References</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>

      </nav>

      <div className="row banner">
        <div className="banner-text">
          <h1 className="responsive-headline">{name}</h1>
          <h2><span>{occupation}</span></h2>
          <h2><span>{occupation2}</span></h2>
          <h3> {description}.</h3>
          <hr />
          <ul className="social">
              {networks}
          </ul>
        </div>
      </div>

      <p className="scrolldown">
        <a href="#about"><i className="icon-down-circle"></i></a>
      </p>

    </header>
  );
}

export default Header;