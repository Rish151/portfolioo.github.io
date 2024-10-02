import React from "react";
import "./intro.css";
import bg from "../../assets/bg.avif";
import { Link } from "react-scroll";
import { ReactTyped } from "react-typed";  // Import ReactTyped

const Intro = () => {
  return (
    <section id="intro">
      <div className="introContent">
        <span className="hello">Hello,</span>
        <span className="introText">
          I'm <span className="introName">Rishab</span><br />
          <ReactTyped
            strings={[
              "Frontend Developer",
              "Backend Developer",
              "Full Stack Developer",
            ]}
            typeSpeed={50}
            backSpeed={60}
            loop
            smartBackspace
          />
        </span>
        <p className="introPara">
          I'm a skilled web developer with a <br />
          diverse portfolio spanning various industries.
        </p>
        <Link to="contact"><button className="btn">Hire Me</button></Link>
      </div>
      <img src={bg} alt="Background" className="bg" />
    </section>
  );
};

export default Intro;
