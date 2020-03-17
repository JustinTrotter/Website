import React, { forwardRef } from "react"
import jsonData from "../data/resume.json"

const Header = forwardRef((props, ref) => {
  const { name, occupation, occupation2, description } = jsonData
  const networks = jsonData.social.map(network => {
    return (
      <li key={network.name}>
        <a href={network.url}>
          <i className={network.className}></i>
        </a>
      </li>
    )
  })
  return (
    <header id="home" ref={ref} className="fullheight">
      <div className="row banner">
        <div className="banner-text">
          <h1 className="responsive-headline">{name}</h1>
          <h2>
            <span>{occupation}</span>
          </h2>
          <h2>
            <span>{occupation2}</span>
          </h2>
          <h3> {description}.</h3>
          <hr />
          <ul className="social">{networks}</ul>
        </div>
      </div>

      <p className="scrolldown">
        <a href="#about">
          <i className="icon-down-circle"></i>
        </a>
      </p>
    </header>
  )
})

export default Header
