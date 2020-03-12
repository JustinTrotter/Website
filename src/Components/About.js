import React, { forwardRef } from "react"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import jsonData from "../data/resume.json"

export default forwardRef((props, ref) => {
  const { name, bio, address, phone, email, resumeDownload } = jsonData

  return (
    <StaticQuery
      query={graphql`
        query MyQuery {
          file(relativePath: { eq: "profile_photo.png" }) {
            childImageSharp {
              # Specify the image processing specifications right in the query.
              fluid {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      `}
      render={images => (
        <section id="about" ref={ref}>
          <div className="row">
            <div className="three columns">
              <Img
                className="profile-pic"
                fluid={images.file.childImageSharp.fluid}
                alt="profile picture"
              />
            </div>
            <div className="nine columns main-col">
              <h2>About Me</h2>
              <p>{bio}</p>
              <div className="row">
                <div className="columns contact-details">
                  <h2>Contact Details</h2>
                  <p className="address">
                    <span>{name}</span>
                    <br />
                    <span>
                      {address.city}, {address.state}
                      <br />
                      <span>{phone}</span>
                      <br />
                    </span>
                    <span>{email}</span>
                  </p>
                </div>
                <div className="columns download">
                  <p>
                    <a href={resumeDownload} className="button">
                      <i className="fa fa-download"></i>Download Resume
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
    />
  )
})
