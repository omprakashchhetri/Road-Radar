import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { toast } from "sonner";

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm("service_cz8l14j", "template_4lioqre", form.current, {
        publicKey: "426AI4vszajz2RUBJ",
      })
      .then(
        (result) => {
          toast.success("Sent Successfully", { duration: 2000 });
          console.log("SUCCESS!");
          console.log(result);
          form.current.reset(); // Reset the form fields
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <div id="contact">
      <div className="contact-page-wrapper py-5">
        <p className="primary-subheading pt-5">Contact Us</p>
        <h1 className="primary-heading">Let Us Help You</h1>
        <form
          ref={form}
          onSubmit={sendEmail}
          className="contact-form d-flex flex-column contact-form-container rounded-4 w-50 bg-light p-4"
        >
          <div className="d-flex">
            <div className="form-group me-2">
              <label htmlFor="name">
                <strong>Your Name:</strong>
              </label>
              <input
                type="text"
                required
                id="name"
                name="user_name"
                className="bg-white p-3 px-4 rounded-4"
                placeholder="Your Name"
                tabIndex={1}
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">
                <strong>Your Email:</strong>
              </label>
              <input
                type="email"
                required
                name="user_email"
                id="email"
                className="bg-white p-3 px-4 rounded-4"
                placeholder="Yourmail@gmail.com"
                tabIndex={1}
              />
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="desc">
              <strong>Description:</strong>
            </label>
            <textarea
              required
              id="desc"
              name="message"
              className="bg-white px-4 py-5 rounded-4 w-100"
              placeholder="Description"
              tabIndex={1}
            />
          </div>
          <input type="submit" value="Send" className="contact-btn w-50" />
        </form>
      </div>
    </div>
  );
};

export default Contact;
