import React, { forwardRef } from 'react';
import jsonData from '../Data/resume.json';

const Experience = forwardRef((props, ref) => {
  var education = jsonData.education.map(function(education){
    return <div key={education.school}><h3>{education.school}</h3>
    <p className="info">{education.degree} <span>&bull;</span><em className="date">{education.graduated}</em></p>
    <p>{education.description}</p></div>
  })
  var work = jsonData.work.map(function(work){
    return <div key={work.company}><h3>{work.company}</h3>
        <p className="info">{work.title}<span>&bull;</span> <em className="date">{work.years}</em></p>
        <p>{work.description}</p>
    </div>
  })
  var skills = jsonData.skills.map(function(skills){
    /*return <li key={skills.name}><span style={{width:skills.level}}className={className}></span><em>{skills.name}</em></li>*/
    return <div key={skills.name} className={`bar ${skills.level} ${skills.type}`} data-skill={`${skills.name}`}></div>
  })

    return (
      <section id="resume" ref={ref}>

<div className="row skill">

<div className="three columns header-col">
   <h1><span>Skills</span></h1>
</div>

<div className="nine columns main-col">

  <ul className="skills">
   {skills}
 </ul>
</div>
</div>

<div className="row work">

<div className="three columns header-col">
   <h1><span>Work</span></h1>
</div>

<div className="nine columns main-col">
 {work}
</div>
</div>

      <div className="row education">
         <div className="three columns header-col">
            <h1><span>Education</span></h1>
         </div>

         <div className="nine columns main-col">
            <div className="row item">
               <div className="twelve columns">
                 {education}
               </div>
            </div>
         </div>
      </div>
   </section>
    );
  })

export default Experience;
