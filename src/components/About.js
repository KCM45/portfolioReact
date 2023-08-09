import React from "react";

export default function About() {
  return (
    <section class="about" id="about">
      <h2 class="heading">
        About <span>Me</span>
      </h2>
      <div class="about-img">
        <img src="/src/assets/images/about.png" alt="About me"></img>
        <span class="circle-spin"></span>
      </div>
      <div class="about-content">
        <h3>Web Developer!</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore
          laboriosam accusamus corrupti? Maxime distinctio id error nulla totam
          obcaecati! Eum nulla commodi harum fuga odit consectetur? Incidunt
          voluptatum quae voluptas aliquam voluptates! Eius maxime optio,
          beatae, blanditiis veniam reiciendis porro voluptatum aliquam fugiat,
          tempora a. Dolore sequi quae quos temporibus.
        </p>
        <div class="btn-box btns">
          <a href="#" class="btn">
            Read More
          </a>
        </div>
      </div>
    </section>
  );
}
