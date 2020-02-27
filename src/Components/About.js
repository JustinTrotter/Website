import React from 'react';
import jsonData from '../Data/resume.json';

const About = () => {

  const {name, bio, address, phone, email, resumeDownload} = jsonData;
  const profilepic = "images/" + jsonData.image;

  return (
    <section id="about">
      <div className="row">
        <div className="three columns">
          <img className="profile-pic"  src={profilepic} alt={`${name} Profile Pic`}/>
        </div>
        <div className="nine columns main-col">
          <h2>About Me</h2>

          <p>{bio}</p>
          <div className="row">
            <div className="columns contact-details">
              <h2>Contact Details</h2>
              <p className="address">
                <span>{name}</span><br />
                <span>
                  {address.city}, {address.state}<br />
                <span>{phone}</span><br />
                </span>
                <span>{email}</span>
              </p>
              </div>
              <div className="columns download">
                <p>
                  <a href={resumeDownload} className="button"><i className="fa fa-download"></i>Download Resume</a>
                </p>
              </div>
            </div>
          </div>
      </div>
    </section>
  );
}

export default About;
