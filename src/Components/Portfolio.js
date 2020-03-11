import React, { forwardRef } from "react"
import { StaticQuery, graphql, Link } from "gatsby"
import Img from "gatsby-image"
import jsonData from "../data/resume.json"

const Portfolio = forwardRef((props, ref) => {
  const query = graphql`
    query($projectImage: String) {
      file(relativePath: { eq: $projectImage }) {
        childImageSharp {
          # Specify the image processing specifications right in the query.
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `;

  const projects = jsonData.projects?.map(function(projects) {
    return (
      <div key={projects.title} className="columns portfolio-item">
        <div className="item-wrap">
          <Link to={projects.url} title={projects.title}>
            <StaticQuery
              query={query}
              render={data => (
                <Img
                  fluid={data.file.childImageSharp.fluid}
                  alt={projects.title}
                  projectImage={projects.image}
                />
              )}
            />
            <div className="overlay">
              <div className="portfolio-item-meta">
                <h5>{projects.title}</h5>
                <p>{projects.category}</p>
              </div>
            </div>
            <div className="link-icon">
              <i className="fa fa-link"></i>
            </div>
          </Link>
        </div>
      </div>
    )
  })

  return (
    <section id="portfolio" ref={ref}>
      <div className="row">
        <div className="twelve columns collapsed">
          <h1>Games that I have made over the years.</h1>
          <div
            id="portfolio-wrapper"
            className="bgrid-quarters s-bgrid-thirds cf portfolio-wrapper"
          >
            {projects}
          </div>
        </div>
      </div>
    </section>
  )
})

export default Portfolio
