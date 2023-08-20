import React from "react";

function Education() {
  return (
    <section className="education" id="education">
      <h2 className="heading">
        My <span>Journey</span>
      </h2>

      <div className="education-row">
        <div className="education-column">
          <h3 className="title">Education</h3>
          <div className="education-box">
            <div className="education-content">
              <div className="content">
                <div className="year">
                  <i className="bx bxs-calendar"></i>2023
                </div>
                <h3>Full Stack Web Developer Certification - UC Berkeley</h3>
                <p>Intensive MERN Full Stack Web Development Bootcamp. </p>
              </div>
            </div>
            <div className="education-content">
              <div className="content">
                <div className="year">
                  <i className="bx bxs-calendar"></i>2016 - 2019
                </div>
                <h3>MS Data Science - Indiana University</h3>
                <p>Summa Cum Laude </p>
              </div>
            </div>
          </div>
        </div>
        <div className="education-column">
          <h3 className="title">Experience</h3>
          <div className="education-box">
            <div className="education-content">
              <div className="content">
                <div className="year">
                  <i className="bx bxs-calendar"></i>2014 - present
                </div>
                <h3>Data Science and Business Intelligence</h3>
                <p>
                  Worked prodiminately in the healthcare analytics space in
                  roles such as analytics manager, data integration developer,
                  data analyst, and business intelligence developer.
                </p>
              </div>
            </div>
            {/* <div className="education-content">
              <div className="content">
                <div className="year">
                  <i className="bx bxs-calendar"></i>2016 - 2019
                </div>
                <h3>MS Data Science - Indiana University</h3>
                <p>Magna Cum Laude </p>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Education;
