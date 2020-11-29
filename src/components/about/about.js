import React, { Component } from 'react';
export default class About extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="about">
         <div className="row">

            <div className="three columns">

               <img className="profile-pic"  src="images/profilepic.jpg" alt="" />

            </div>

            <div className="nine columns main-col">

               <h2>Summary</h2>
               <p>
               {
                 resumeData.aboutme
               }
               </p>

               <div className="row">

                  <div className="columns contact-details">

                  <h2>Contact</h2>
                  <p className="address">
       						<span>M Sarosh Khan</span>
                     <br></br>
                    <span>{resumeData.website}</span>
                    <span><a href="MSaroshKhan9@gmail.com">Email: <u>MSaroshKhan9@gmail.com</u></a></span>
                    <br></br>
                    <span><a href="tel:8562965632">Cell: <u>+1 856-296-5632</u></a></span>
                    <br></br>
                    <span>
                     {resumeData.address}
                    </span>
       					   </p>
                  </div>
               </div>
            </div>
         </div>
      </section>
    );
  }
}
