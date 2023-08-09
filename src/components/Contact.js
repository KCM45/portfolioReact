import React from "react";

function Contact() {
  return (
    <>
      <section class="contact" id="contact">
        <h2 class="heading">
          Contact <span>Me</span>
        </h2>
        <form
          action="https://formsubmit.co/corey@coreymckenzie.dev"
          method="POST"
        >
          <div class="input-box">
            <div class="input-field">
              <input
                type="text"
                placeholder="Full Name"
                name="name"
                required
              ></input>
              <span class="focus"></span>
            </div>
          </div>
          <div class="input-box">
            <div class="input-field">
              <input
                type="text"
                placeholder="Email Address"
                name="email"
                required
              ></input>
              <span class="focus"></span>
            </div>
          </div>
          <div class="input-box">
            <div class="input-field">
              <input
                type="number"
                placeholder="Phone Number"
                name="number"
                required
              ></input>
              <span class="focus"></span>
            </div>
          </div>
          <div class="input-box">
            <div class="input-field">
              <input
                type="text"
                placeholder="Email Subject"
                name="subject"
                required
              ></input>
              <span class="focus"></span>
            </div>
          </div>
          <div class="textarea-field">
            <textarea
              name="text"
              id=""
              cols="30"
              rows="10"
              placeholder="Your Message"
            ></textarea>
            <span class="focus"></span>
          </div>
          <div class="btn-box btns">
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
