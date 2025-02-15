import React from 'react'
import { SiGmail } from "react-icons/si";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import '../styles/Navbar.css'

const Navbar = () => {
  return (
    <nav className="navbar">
        <div className="logo">Aman A.</div>
        <div className="nav-links">
            <a href="mailto:amanaziz2020@gmail.com"><SiGmail/></a>
            <a href="https://www.linkedin.com/in/aman-aziz/" target="_blank" rel="noopener noreferrer"><FaLinkedinIn/></a>
            <a href="https://www.github.com/tutankhAman" target="_blank" rel="noopener noreferrer"><FaGithub/></a>
        </div>
    </nav>
  )
}

export default Navbar