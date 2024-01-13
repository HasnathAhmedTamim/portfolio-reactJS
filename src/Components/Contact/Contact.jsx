import React, { useContext, useRef, useState } from "react";
import "./Contact.css";
import emailjs from "@emailjs/browser";
import { themeContext } from "../../Context";
// import Swal from "sweetalert2";

const Contact = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  const form = useRef();
  const [done, setDone] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_q5xyjra",
        "template_haza96z",
        form.current,
        "lXF9MclRqrYsmfHlc"
      )
      .then(
        (result) => {
          console.log(result.text);
          setDone(true);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="contact-form">
      <div className="w-left">
        <div className="awesome">
          <span style={{ color: darkMode ? "white" : "" }}>Get in Touch</span>
          <span>Find Me</span>
          <div
            className="blur s-blur1"
            style={{ background: "#ABF1FF94" }}
          ></div>
        </div>
      </div>
      <div className="c-right">
        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="user_name"
            className="user"
            placeholder="Type Your Name"
          />
          <input
            type="email"
            name="user_email"
            className="user"
            placeholder="Type Your Email"
          />
          <textarea
            name="message"
            placeholder="message"
            className="user"
          ></textarea>
          <input
            type="submit"
            value="Send"
            className="button"
            placeholder="Type Your Email"
          />
          <span>
            {
              done && "Thanks for contacting"
              //   Swal.fire({
              //     position: "top-end",
              //     icon: "success",
              //     title: "Thanks for contacting Me!!",
              //     showConfirmButton: false,
              //     timer: 1500,
              //   })
            }
          </span>
          <div
            className="blur c-blur1"
            style={{ background: "var(--purple)" }}
          ></div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
