import React, { useRef, useEffect, useState } from "react"
import useIsInViewport from "use-is-in-viewport"
import Navigation from "../components/navigation"
import Header from "../components/header"
import About from "../components/about"
import Experience from "../components/experience"
import Portfolio from "../components/portfolio"

const Home = () => {
  const targetRef = useRef(null)
  const [currentSection, setCurrentSection] = useState(null)

  const [headerIsInViewport, headerRef] = useIsInViewport({
    target: targetRef,
    threshold: 75,
  })
  const [aboutIsInViewport, aboutRef] = useIsInViewport({
    target: targetRef,
    threshold: 75,
  })
  const [resumeIsInViewport, resumeRef] = useIsInViewport({
    target: targetRef,
    threshold: 50,
  })
  const [portfolioIsInViewport, portfolioRef] = useIsInViewport({
    target: targetRef,
    threshold: 75,
  })

  useEffect(() => {
    if (headerIsInViewport) {
      setCurrentSection("home")
    }
  }, [headerIsInViewport])

  useEffect(() => {
    if (aboutIsInViewport) {
      setCurrentSection("about")
    }
  }, [aboutIsInViewport])

  useEffect(() => {
    if (resumeIsInViewport) {
      setCurrentSection("resume")
    }
  }, [resumeIsInViewport])

  useEffect(() => {
    if (portfolioIsInViewport) {
      setCurrentSection("portfolio")
    }
  }, [portfolioIsInViewport])

  return (
    <>
      <Navigation currentSection={currentSection} />
      <Header ref={headerRef} />
      <About ref={aboutRef} />
      <Experience ref={resumeRef} />
      <Portfolio ref={portfolioRef} />
    </>
  )
}

export default Home
