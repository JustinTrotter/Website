import React, { useState, useEffect } from "react"
import root from 'window-or-global'
import { Link } from "gatsby"

const Navigation = props => {
  const [hash, setHash] = useState(root.location.hash || "#home")

  useEffect(() => {
    setHash("#" + props.currentSection)
  }, [props.currentSection])

  const navItems = ["home", "about", "resume", "portfolio"]

  return (
    <nav id="nav-wrap">
      <a className="mobile-btn" href="#nav-wrap" title="Show navigation">
        Show navigation
      </a>
      <a className="mobile-btn" href="#home" title="Hide navigation">
        Hide navigation
      </a>
      <ul id="nav" className="nav">
        {navItems.map(item => (
          <li key={item} className={hash === `#${item}` ? "current" : ""}>
            <Link to={`/#${item}`} onClick={() => setHash(`#${item}`)}>
              {item}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Navigation
