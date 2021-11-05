import React, { useState, useRef } from "react";

// Styles
import "./contact.css";

// Email Js
import emailjs from "emailjs-com";
// image
import shakeImage from "../../images/white-ripped-paper.jpg";

// Components
import { Heading } from "../Heading/Heading";
import Button from "../Button/Button";

import SocialFollow from "../Social-Follow/socialFollow";

const Contact = () => {
  const INITIAL_VALUES = { email: "", message: "" };
  const [notification, setNotification] = useState(false);
  const [values, setValues] = useState(INITIAL_VALUES);
  const [loading, setLoading] = useState(false);

  // Email-js
  const form = useRef();

  const sendEmail = async () => {
    try {
      const result = await emailjs.sendForm(
        `service_m94lsn3`,
        `template_d48ff8i`,
        form.current,
        `user_tAvufHslY1h3IMTPwwc0q`
      );
      console.log("result ", result.text);
    } catch (error) {
      console.log("ERROR", error);
    }
  };
  // Email-js

  const clearForm = () => {
    setValues(INITIAL_VALUES);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    // console.log("form submitted !", values);
    // TODO : Send data to your email
    setLoading(true);
    await sendEmail();
    setLoading(false);
    clearForm();
    setNotification(true);
  };

  const handleChange = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <section className="contact" name="contact" id="contact">
      <Heading text="Contact" style={{ marginBottom: "3rem" }} />{" "}
      <div className="content">
        <div className="left">
        <div className="bg"></div>
          <div className="paper"></div>
          <img src={shakeImage} alt="shake hands" />
        </div>{" "}
        <div className="right">
          <SocialFollow />
          <form onSubmit={handleSubmit} ref={form}>
            <h3>Send Me a Message</h3>
            <input
              type="email"
              name="email"
              value={values.email}
              onChange={handleChange}
              placeholder="Email"
              required
            />
            <textarea
              name="message"
              required
              value={values.message}
              onChange={handleChange}
              placeholder="Message"
            ></textarea>{" "}
            <Button
              text={loading ? "Sending..." : "Send"}
              loading={loading}
              type="submit"
            />{" "}
            {notification && (
              <span style={{ color: "green", marginTop: "1rem" }}>
                Thanks, I will reply ASAP: ){" "}
              </span>
            )}{" "}
          </form>{" "}
        </div>{" "}
      </div>{" "}
    </section>
  );
};

export default Contact;
