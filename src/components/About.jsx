import React from "react";

export default function About() {
  return (
    <section className="about" id="about">
      <h2 className="heading">
        About <span>Me</span>
      </h2>
      <div className="about-img">
        <img src="./src/assets/images/about.png" alt="About me"></img>
        <span className="circle-spin"></span>
      </div>
      <div className="about-content">
        <h3>Web Developer!</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore
          laboriosam accusamus corrupti? Maxime distinctio id error nulla totam
          obcaecati! Eum nulla commodi harum fuga odit consectetur? Incidunt
          voluptatum quae voluptas aliquam voluptates! Eius maxime optio,
          beatae, blanditiis veniam reiciendis porro voluptatum aliquam fugiat,
          tempora a. Dolore sequi quae quos temporibus.
        </p>
        <div className="btn-box btns">
          <a href="#" className="btn">
            Read More
          </a>
        </div>
      </div>
    </section>
  );
}
