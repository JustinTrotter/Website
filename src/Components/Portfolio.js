import React, { forwardRef } from "react"
import { StaticQuery, graphql, Link } from "gatsby"
import Img from "gatsby-image"
import jsonData from "../data/resume.json"

const Portfolio = forwardRef((props, ref) => {
  const query = graphql`
    query PortfolioThumbnails {
      allFile(
        filter: {
          extension: { regex: "/(jpg)|(jpeg)|(png)/" }
          relativeDirectory: { eq: "portfolio" }
        }
      ) {
        nodes {
          id
          childImageSharp {
            id
            fluid {
              base64
              tracedSVG
              srcWebp
              srcSetWebp
              originalImg
              originalName
              presentationWidth
              presentationHeight
              aspectRatio
              src
              srcSet
              sizes
            }
          }
        }
      }
    }
  `

  const projects = thumbnails => {
    return jsonData.projects?.map(projects => {
      const image = thumbnails.find(
        thumbnail =>
          thumbnail.childImageSharp.fluid.originalName === projects.image
      )
      return (
        <div key={projects.title} className="columns portfolio-item">
          <div className="item-wrap">
            <Link to={projects.url} title={projects.title}>
              {image && (
                <Img fluid={image.childImageSharp.fluid} alt={projects.title} />
              )}
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
  }

  return (
    <StaticQuery
      query={query}
      render={thumbnails => (
        <section id="portfolio" ref={ref}>
          <div className="row">
            <div className="twelve columns collapsed">
              <h1>Games that I have made over the years.</h1>
              <div
                id="portfolio-wrapper"
                className="bgrid-quarters s-bgrid-thirds cf portfolio-wrapper"
              >
                {projects(thumbnails?.allFile?.nodes)}
              </div>
            </div>
          </div>
        </section>
      )}
    />
  )
})

export default Portfolio
