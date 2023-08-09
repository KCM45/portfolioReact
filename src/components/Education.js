import React from "react";

function Education() {
  return (
    <section class="education" id="education">
      <h2 class="heading">
        My <span>Journey</span>
      </h2>

      <div class="education-row">
        <div class="education-column">
          <h3 class="title">Education</h3>
          <div class="education-box">
            <div class="education-content">
              <div class="content">
                <div class="year">
                  <i class="bx bxs-calendar"></i>2023
                </div>
                <h3>Full Stack Web Developer Certification - UC Berkeley</h3>
                <p>Intensive MERN Full Stack Web Development Bootcamp. </p>
              </div>
            </div>
            <div class="education-content">
              <div class="content">
                <div class="year">
                  <i class="bx bxs-calendar"></i>2016 - 2019
                </div>
                <h3>MS Data Science - Indiana University</h3>
                <p>Magna Cum Laude </p>
              </div>
            </div>
          </div>
        </div>
        <div class="education-column">
          <h3 class="title">Experience</h3>
          <div class="education-box">
            <div class="education-content">
              <div class="content">
                <div class="year">
                  <i class="bx bxs-calendar"></i>2014 - present
                </div>
                <h3>Data Science and Business Intelligence</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Fugiat eligendi sequi, amet magni dolor a doloremque modi,
                  doloribus voluptas non voluptates, in delectus.{" "}
                </p>
              </div>
            </div>
            <div class="education-content">
              <div class="content">
                <div class="year">
                  <i class="bx bxs-calendar"></i>2016 - 2019
                </div>
                <h3>MS Data Science - Indiana University</h3>
                <p>Magna Cum Laude </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Education;
