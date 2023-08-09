import React from "react";

export default function Home() {
  return (
    <section className="home" id="home">
      <div className="home-content">
        <h1>
          Hey. I'm{" "}
          <span>
            <span>Corey</span> McKenzie
          </span>
        </h1>
        <div className="text-animate">
          <h3>Full Stack Web Developer</h3>
        </div>
        <p>
          My daughter likes to watch Avatar the Last Airbender. My daughter's
          name is Lorraine. My son's name is Calvin. He likes to play Minecraft.
          harum accusantium laudantium animi, quia blanditiis recusandae
          aspernatur in quibusdam neque. Recusandae?
        </p>
        <div className="btn-box">
          <a href="#contact" className="btn">
            Let's Talk
          </a>
        </div>
      </div>
      <div className="home-sci">
        <a href="https://github.com/KCM45">
          <i className="bx bxl-github"></i>
        </a>
        <a href="https://www.linkedin.com/in/corey-mckenzie/">
          <i className="bx bxl-linkedin"></i>
        </a>
        <a href="https://www.facebook.com/corey.mckenzie">
          <i className="bx bxl-facebook"></i>
        </a>
      </div>

      <div className="home-imgHover"></div>
    </section>
  );
}
