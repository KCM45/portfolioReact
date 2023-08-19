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
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit
              nobis saepe, natus, dicta facilis dolore numquam culpa earum
              perferendis nam tenetur vero inventore?
            </p>
          </div>
        </div>
        <div className="project-card">
          <div className="project-img project2-img"></div>
          <div className="project-info project2-info">
            <h3>AI Image Generator</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Dignissimos, facilis dolore eaque cupiditate nulla delectus
              voluptate omnis repellendus impedit id unde voluptas dicta alias
              numquam in ea recusandae ab a quibusdam earum?
            </p>
          </div>
        </div>
        <div className="project-card">
          <div className="project-img project3-img"></div>
          <div className="project-info project3-info">
            <h3>Nike</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
              aspernatur reiciendis ut reprehenderit harum, distinctio officiis
              sed, ratione iure, quos illum magni! Dolorem amet dignissimos unde
              corrupti expedita voluptate hic nemo?
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
