import React from "react";
import "./project.css";
import photo from "../../assets/work.png";
import photo2 from "../../assets/work1.png";
import photo3 from "../../assets/work3.png";
import { HiArrowUpRight } from "react-icons/hi2";


const Card = ({ image, title, description, link }) => {
  return (
    <div id="project" className="card">
      <img src={image} alt={title} />
      <div className="overlay"></div>
      <div className="card-content">
        <h2>{title}</h2>
        <p>{description}</p>
        <a href={link} target="_blank" rel="noopener noreferrer">
        <HiArrowUpRight />
        </a>
      </div>
    </div>
  );
};

const Project = () => {
  const projects = [
    {
      image: photo,
      title: "IT Services Web Application",
      description:
        "Developed with the MERN stack, utilizing Custom hooks, Local Storage, and Context API for enhanced functionality.", 
      link: "https://technicaltwist.netlify.app/",
    },
    {
      image: photo2,
      title: "Comprehensive Restaurant Website",
      description: "Developed a feature-rich and robust restaurant website using Django and Bootstrap.",
      link: "https://rishab15.pythonanywhere.com/",
    },
    {
      image: photo3,
      title: "Web Calculator",
      description: "Created a Web Calculator Application using HTML, CSS, and JavaScript for quick calculations.",
      link: "https://rish151.github.io/Calculator/",
    },
  ];

  return (
    <div className="projectHeading">
      <h1>My Work</h1>
      <div className="cards-container">
        {projects.map((project, index) => (
          <Card
            key={index}
            image={project.image}
            title={project.title}
            description={project.description}
            link={project.link}
          />
        ))}
      </div>
    </div>
  );
};

export default Project;
