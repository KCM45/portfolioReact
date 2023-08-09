import React from "react";

export default function Home() {
  return (
    <section class="home" id="home">
      <div class="home-content">
        <h1>
          Hey. I'm{" "}
          <span>
            <span>Corey</span> McKenzie
          </span>
        </h1>
        <div class="text-animate">
          <h3>Full Stack Web Developer</h3>
        </div>
        <p>
          My daughter likes to watch Avatar the Last Airbender. My daughter's
          name is Lorraine. My son's name is Calvin. He likes to play Minecraft.
          harum accusantium laudantium animi, quia blanditiis recusandae
          aspernatur in quibusdam neque. Recusandae?
        </p>
        <div class="btn-box">
          <a href="#contact" class="btn">
            Let's Talk
          </a>
        </div>
      </div>
      <div class="home-sci">
        <a href="https://github.com/KCM45">
          <i class="bx bxl-github"></i>
        </a>
        <a href="https://www.linkedin.com/in/corey-mckenzie/">
          <i class="bx bxl-linkedin"></i>
        </a>
        <a href="https://www.facebook.com/corey.mckenzie">
          <i class="bx bxl-facebook"></i>
        </a>
      </div>

      <div class="home-imgHover"></div>
    </section>
  );
}
