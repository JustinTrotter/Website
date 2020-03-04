import React from 'react';
import { Link } from "react-router-dom";
import jsonData from '../Data/resume.json';

const Portfolio = () => {
    const projects = jsonData.projects?.map(function(projects){
        const projectImage = '/images/' + projects.image;
        return <div key={projects.title} className="columns portfolio-item">
          <div className="item-wrap">
            <Link to={projects.url} title={projects.title}>
              <img alt={projects.title} src={projectImage} />
                <div className="overlay">
                  <div className="portfolio-item-meta">
                    <h5>{projects.title}</h5>
                    <p>{projects.category}</p>
                  </div>
                </div>
              <div className="link-icon"><i className="fa fa-link"></i></div>
            </Link>
          </div>
        </div>
    })

  return (
    <section id="portfolio">
      <div className="row">
        <div className="twelve columns collapsed">
          <h1>Games that I have made over the years.</h1>
          <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf portfolio-wrapper">
              {projects}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
