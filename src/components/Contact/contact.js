import React, { useRef } from "react";
import "./contact.css";
import { AiOutlineMail, AiFillHome } from "react-icons/ai";
import { FaGithubSquare, FaLinkedin } from "react-icons/fa";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_qama0la",
        "template_y6lujmi",
        form.current,
        "uBp8TVY5sxBaZVet1"
      )
      .then(
        (result) => {
          console.log("Email successfully sent!", result.text);
          e.target.reset();
          toast.success("Email successfully sent!"); 
        },
        (error) => {
          console.error("Failed to send email:", error.text);
          toast.error("Failed to send email.");
        }
      );
  };

  return (
    <div id="contact" className="heading">
      <h2>Contact Me</h2>
      <div className="contact-container">
        <div className="contact-info">
          <div className="info-item">
            <AiFillHome className="info-icon" />
            <p>Faridabad, Haryana, INDIA</p>
          </div>
          <div className="info-item">
            <AiOutlineMail className="info-icon" />
            <p>rishabnagpal151@gmail.com</p>
          </div>
          <div className="info-item">
            <a
              href="https://github.com/Rish151"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithubSquare className="profile-icon" />
            </a>
            <a
              href="https://www.linkedin.com/in/rishab-771532254/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin className="profile-icon" />
            </a>
          </div>
        </div>
        <div className="contact-form">
          <p>Interested in working together? Drop me a message.</p>
          <form ref={form} onSubmit={sendEmail}>
            <div className="form-group">
              <input
                type="text"
                id="name" 
                name="from_name"
                placeholder="Enter your Name"
                required
              />
            </div>
            <div className="form-group">
              <input
                type="email"
                id="email"
                name="from_email"
                placeholder="Enter your Email"
                required
              />
            </div>
            <div className="form-group">
              <textarea
                id="message"
                name="message"
                placeholder="Enter your Message"
                rows="5"
                required
              ></textarea>
            </div>
            <button className="btn1" type="submit">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
