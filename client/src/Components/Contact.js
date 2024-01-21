import React from "react";

const Contact = () => {
  return (
    <div className="contact-page-wrapper">
      <p className="primary-subheading">Contact Us</p>

      {/* <h1 className="primary-heading">Have Questions In Your Mind?</h1> */}
      <h1 className="primary-heading">Let Us Help You</h1>
      <div className="contact-form d-flex flex-column contact-form-container rounded-4 w-50 bg-light p-5">
        <div className="form-group">
          <label htmlFor="email">
            <strong>Your Email:</strong>
          </label>
          <input
            type="email"
            required
            id="email"
            className="bg-white p-3 px-4 rounded-4"
            placeholder="yourmail@gmail.com"
            tabIndex={1}
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">
            <strong>Description:</strong>
          </label>
          <input
            type="text"
            required
            id="email"
            className="bg-white px-4 py-5  rounded-4"
            placeholder="Description"
            tabIndex={1}
          />
        </div>
        <button className="contact-btn w-50">Submit</button>
      </div>
    </div>
  );
};

export default Contact;
