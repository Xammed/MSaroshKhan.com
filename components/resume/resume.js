import React, { Component } from 'react';
export default  class Resume extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="resume">

         <div className="row education">

            <div className="three columns header-col">
               <h1><span>Education</span></h1>
            </div>

            <div className="nine columns main-col">
              {
                resumeData.education && resumeData.education.map((item)=>{
                  return(
                    <div className="row item">
                       <div className="twelve columns">
                          <h3>{item.UniversityName}</h3>
                          <p className="info">
                          {item.specialization}
                          <span>&bull;</span> <em className="date">{item.MonthOfPassing} {item.YearOfPassing}</em></p>
                          <p>
                          {item.Achievements}
                          </p>
                       </div>
                    </div>
                  )
                })
              }
            </div>
         </div>
         <div className="row skill">

            <div className="three columns header-col">
               <h1><span>Skills</span></h1>
            </div>

            <div className="nine columns main-col">

               <p>
               A handbag of tricks!
               </p>

   				<div className="bars">

   				   <ul className="skills">
                {
                  /*resumeData.skills && resumeData.skills.map((item) => {
                    return(
                      <li>
                      <span className={`bar-expand ${item.skillname.toLowerCase()}`}>
                      </span><em>{item.skillname}</em>
                      </li>
                    )
                  })*/
                  <div>
                  <li>
                      <span className={`bar-expand machine`}></span>
                      <em>Machine Learning and Artificial Intelligence</em>
                  </li>
                  <li>
                  <span className={`bar-expand ds`}></span>
                  <em>Data Science</em>
                   </li>
                   <li>
                  <span className={`bar-expand ood`}></span>
                  <em>Object Oriented Programming</em>
                   </li>
                   <li>
                  <span className={`bar-expand algdes`}></span>
                  <em>Algorithm Design</em>
                   </li>
                   <li>
                  <span className={`bar-expand wad`}></span>
                  <em>Web/App Development</em>
                   </li>
                   </div>
                  
                }

   					</ul>

   				</div>

   			</div>

         </div>
         <div className="row skill">

            <div className="three columns header-col">
               <h1><span>Languages</span></h1>
            </div>

            <div className="nine columns main-col">

               <p>
               I stand by that programming languages are implied by skills, and don't really
               need stating because the field always evolves and in order to keep up developers
               need to constantly learn new languages. However, if you INSIST... Here you go.
               </p>

   				<div className="bars">

   				   <ul className="skills">
                {
                  /*resumeData.skills && resumeData.skills.map((item) => {
                    return(
                      <li>
                      <span className={`bar-expand ${item.skillname.toLowerCase()}`}>
                      </span><em>{item.skillname}</em>
                      </li>
                    )
                  })*/
                  <div>
                  <li>
                      <span className={`bar-expand python`}></span>
                      <em>Python</em>
                  </li>
                  <li>
                  <span className={`bar-expand java`}></span>
                  <em>Java</em>
                   </li>
                   <li>
                  <span className={`bar-expand cpp`}></span>
                  <em>C/C++</em>
                   </li>
                   <li>
                  <span className={`bar-expand javascript`}></span>
                  <em>React + JavaScript/Flutter + Dart</em>
                   </li>
                   <li>
                  <span className={`bar-expand misc`}></span>
                  <em>Prolog/Scala/Ruby/Miscellaneous</em>
                   </li>
                   </div>
                  
                }

   					</ul>

   				</div>

   			</div>

         </div>
        <div className="row work">
            <div className="three columns header-col">
               <h1><span>Work</span></h1>
            </div>

            <div className="nine columns main-col">
              {
                resumeData.work && resumeData.work.map((item) => {
                  return(
                    <div className="row item">
                       <div className="twelve columns">
                          <h3>{item.CompanyName}</h3>
                          <p className="info">
                          {item.specialization}
                          <span>&bull;</span> <em className="date">{item.MonthOfLeaving} {item.YearOfLeaving}</em></p>
                          <p>
                          {item.Achievements}
                          </p>
                       </div>

                    </div>

                  )
                })
              }
            </div> 
         </div>


         

      </section>
    );
  }
}
