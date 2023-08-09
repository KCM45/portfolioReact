import React from "react";

export default function Navbar() {
  return (
    <header className="header">
      <a href="#" className="logo">
        <span>Co</span>rey
      </a>
      <div className="bx bx-menu" id="menu-icon"></div>
      <nav className="navbar">
        <a href="#home" className="active">
          Home
        </a>
        <a href="#about">About</a>
        <a href="#education">Education</a>
        <a href="#skills">Skills</a>
        <a href="#portfolio">Portfolio</a>
        <a href="#contact">Let's Talk</a>

        <span className="active-nav"></span>
      </nav>
    </header>
  );
}
