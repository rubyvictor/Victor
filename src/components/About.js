import React from "react";
import { FaCloudDownload } from "react-icons/lib/fa";

// import profilePic from "../assets/images/profilepic.jpg";
import profileVic from "../assets/images/profile-vic.png";

const About = () => (
  <section id="about">
    <div className="row">
      <div className="three columns">
        <img className="profile-pic" src={profileVic} alt="" />
      </div>
      <div className="nine columns main-col">
        <h2>About My Stack</h2>
        <p>
          <ul>JavaScript</ul>
          <ul>Python</ul>
          <ul>Swift iOS</ul>
          <ul>Node.js</ul>
          <ul>Express.js</ul>
          <ul>React.js</ul>
          <ul>Create-react-app</ul>
          <ul>MongoDB</ul>
          <ul>MySQL</ul>
        </p>
        <div className="row">
          <div className="columns contact-details">
            <h2>Contact Details</h2>
            <p className="address">
              <span>Victor Lee</span>
              <br />
              <span>
                790 Yishun Ave 2
                <br /> Singapore, 760790
              </span>
              <br />
              <span>(65)98002795</span>
              <br />
              <span>myleevictor@gmail.com</span>
            </p>
          </div>
          <div className="columns download">
            <p>
              <a href="#" className="button">
                <FaCloudDownload /> Download Resume
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default About;
