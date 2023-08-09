import React from "react";

export default function Navbar() {
  return (
    <header class="header">
      <a href="#" class="logo">
        <span>Co</span>rey
      </a>
      <div class="bx bx-menu" id="menu-icon"></div>
      <nav class="navbar">
        <a href="#home" class="active">
          Home
        </a>
        <a href="#about">About</a>
        <a href="#education">Education</a>
        <a href="#skills">Skills</a>
        <a href="#portfolio">Portfolio</a>
        <a href="#contact">Let's Talk</a>

        <span class="active-nav"></span>
      </nav>
    </header>
  );
}
