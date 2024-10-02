import React, { useState } from "react";
import "./navbar.css";
import logo from "../../assets/logo.png";
import { Link } from "react-scroll";
import menu from "../../assets/menu.png"

const Navbar = () => {
    const [showMenu, setShowMenu] = useState(false);
  return ( 
    <nav className="navbar">
      <Link to='intro'><img src={logo} alt="logo" className="logo"/></Link>
      <div className="desktopMenu">
        <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={500} className="desktopMenuListItem">Home</Link>
        <Link activeClass='active' to='about' spy={true} smooth={true} offset={-90} duration={500} className="desktopMenuListItem">About</Link>
        <Link activeClass='active' to='project' spy={true} smooth={true} offset={-250} duration={500} className="desktopMenuListItem">Projects</Link>
        <Link activeClass='active' to='experience' spy={true} smooth={true} offset={-100} duration={500} className="desktopMenuListItem">Skills</Link>
        <Link activeClass='active' to='contact' spy={true} smooth={true} offset={-100} duration={500} className="desktopMenuListItem">Contact Me</Link>
      </div>
      <img src={menu} alt="menu" className="mobMenu" onClick={()=>setShowMenu(!showMenu)} />
      <div className="navMenu" style={{display: showMenu? 'flex':'none'}}>
        <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={500} className="ListItem" onClick={()=>setShowMenu(false)}>Home</Link>
        <Link activeClass='active' to='about' spy={true} smooth={true} offset={-100} duration={500} className="ListItem" onClick={()=>setShowMenu(false)}>About</Link>
        <Link activeClass='active' to='project' spy={true} smooth={true} offset={-210} duration={500} className="ListItem" onClick={()=>setShowMenu(false)}>Projects</Link>
        <Link activeClass='active' to='experience' spy={true} smooth={true} offset={-100} duration={500} className="ListItem" onClick={()=>setShowMenu(false)}>Skills</Link>
        <Link activeClass='active' to='contact' spy={true} smooth={true} offset={-100} duration={500} className="ListItem" onClick={()=>setShowMenu(false)}>Contact Me</Link>
      </div>
    </nav>
  );
};

export default Navbar;
