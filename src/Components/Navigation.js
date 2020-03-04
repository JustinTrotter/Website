import React, { useState } from 'react';
import { HashLink as Link } from "react-router-hash-link";

const Navigation = () => {
  const [hash, setHash] = useState("#home");

  const navItems = ["home", "about", "resume", "portfolio"];


  return (
    <nav id="nav-wrap">
      <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
      <a className="mobile-btn" href="#home" title="Hide navigation">Hide navigation</a>
      <ul id="nav" className="nav">
        {navItems.map(item => 
          <li className={hash === `#${item}` ? "current" : ""}>
            <Link 
              to={`/#${item}`} 
              onClick={()=>setHash(`#${item}`)}>
                {item}
            </Link>
          </li>
        )}
      </ul>
    </nav>
  )
}

export default Navigation;