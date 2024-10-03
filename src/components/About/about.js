import React from "react";
import "./about.css";
import profilePic from "../../assets/Photo 2.jpg"; 
import resume from "../../assets/Rishab Resume.pdf";

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="about-container">
        <div className="about-left">
          <img src={profilePic} alt="Profile" className="profile-pic" />
        </div>
        <div className="about-right">
          <h1>About Me</h1>
          <p>
            I am an enthusiastic and diligent BTech student specializing in
            Computer Science. I am proficient in ReactJS, Python, C, and C++, with
            extensive experience in Django for web development and Bootstrap for
            front-end design. Additionally, I have expertise in the MERN stack
            (MongoDB, Express.js, React, and Node.js), with a strong focus on
            React for building dynamic and responsive user interfaces. Eager to
            innovate, adapt, and contribute to impactful projects while
            continuously enhancing my skills in a dynamic environment. I am
            committed to using technology to solve real-world problems and
            dedicated to continuous learning and growth in the field of computer
            science.
          </p>
          <a href={resume} className="btn" download="Rishab_Nagpal_Resume.pdf">
            Check Resume
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
