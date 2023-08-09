import React from "react";

function Contact() {
  return (
    <>
      <section className="contact" id="contact">
        <h2 className="heading">
          Contact <span>Me</span>
        </h2>
        <form
          action="https://formsubmit.co/corey@coreymckenzie.dev"
          method="POST"
        >
          <div className="input-box">
            <div className="input-field">
              <input
                type="text"
                placeholder="Full Name"
                name="name"
                required
              ></input>
              <span className="focus"></span>
            </div>
          </div>
          <div className="input-box">
            <div className="input-field">
              <input
                type="text"
                placeholder="Email Address"
                name="email"
                required
              ></input>
              <span className="focus"></span>
            </div>
          </div>
          <div className="input-box">
            <div className="input-field">
              <input
                type="number"
                placeholder="Phone Number"
                name="number"
                required
              ></input>
              <span className="focus"></span>
            </div>
          </div>
          <div className="input-box">
            <div className="input-field">
              <input
                type="text"
                placeholder="Email Subject"
                name="subject"
                required
              ></input>
              <span className="focus"></span>
            </div>
          </div>
          <div className="textarea-field">
            <textarea
              name="text"
              id=""
              cols="30"
              rows="10"
              placeholder="Your Message"
            ></textarea>
            <span className="focus"></span>
          </div>
          <div className="btn-box btns">
            <button type="submit" class="btn">
              Submit{" "}
            </button>
          </div>
        </form>
      </section>
    </>
  );
}

export default Contact;
