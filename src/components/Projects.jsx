import React from "react";

function Projects() {
  return (
    <section className="projects" id="projects">
      <h2 className="heading">
        My <span>Projects</span>
      </h2>
      <div className="projects-container">
        <div className="project-card">
          <div className="project-img project1-img"></div>
          <div className="project-info project1-info">
            <h3>YouTube Clone</h3>
          </div>
        </div>
        <div className="project-card">
          <div className="project-img project2-img"></div>
          <div className="project-info project2-info">
            <h3>YouTube Clone</h3>
          </div>
        </div>
        <div className="project-card">
          <div className="project-img project3-img"></div>
          <div className="project-info project3-info">
            <h3>YouTube Clone</h3>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
