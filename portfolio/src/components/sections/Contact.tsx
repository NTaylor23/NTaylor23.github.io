import "../../styles/fonts.css";

import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";

interface ContactProps {
  contactIsShowing: boolean;
  setcontactIsShowing: Function;
}

export const Contact: React.FC<ContactProps> = ({
  contactIsShowing,
  setcontactIsShowing,
}) => {
  const [formData, setFormData] = useState({
    user_name: "",
    user_email: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const form = useRef<HTMLFormElement>(null);

  const handleClose = () => {
    setcontactIsShowing(false);
    setSubmitted(false);
    setFormData({
      user_name: "",
      user_email: "",
      message: "",
    });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setSubmitted(false);
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (form.current) {
      emailjs
        .sendForm(
          "service_0i9pox9",
          "template_1omlh8f",
          form.current,
          "u1cCcTYsfhObVqZ3Z"
        )
        .then(
          (result) => {
            console.log(result.text, form.current);
            setSubmitted(true);
          },
          (error) => {
            console.log(error.text);
          }
        );
      console.log("Form data submitted:", formData);
    } else {
      console.log("No data in form to submit.");
    }
  };

  const bgStyle =
    "focus:shadow-outline w-full appearance-none rounded bg-slate-50 bg-opacity-10 px-3 py-2 leading-tight text-slate-50 shadow focus:outline-none";

  return contactIsShowing ? (
    <form ref={form} onSubmit={handleSubmit}>
      <div className="mb-4">
        <div className="grid grid-cols-2">
          <label
            className="mb-2 block tracking-widest text-slate-100"
            htmlFor="user_name"
          >
            Name
          </label>
          <p
            className="mb-2 block cursor-pointer text-right tracking-widest text-slate-100 hover:text-slate-400"
            onClick={() => handleClose()}
          >
            [Close]
          </p>
        </div>
        <input
          type="text"
          id="user_name"
          name="user_name"
          className={bgStyle}
          value={formData.user_name}
          onChange={handleChange}
          required
        />
      </div>
      <div className="mb-4">
        <label
          className="mb-2 block tracking-widest text-slate-50"
          htmlFor="user_email"
        >
          Email
        </label>
        <input
          type="email"
          id="user_email"
          name="user_email"
          className={bgStyle}
          value={formData.user_email}
          onChange={handleChange}
          required
        />
      </div>
      <div className="mb-4">
        <label
          className="mb-2 block tracking-widest text-slate-50"
          htmlFor="message"
        >
          Message
        </label>
        <textarea
          id="message"
          name="message"
          className={bgStyle}
          rows={7}
          value={formData.message}
          onChange={handleChange}
          required
        ></textarea>
      </div>
      <div className="flex items-center justify-between">
        {!submitted ? (
          <>
          <button
            className="focus:shadow-outline rounded bg-[#2DD4BF1A] px-4 py-2 font-bold text-teal-200 hover:bg-[#36f4db1a] focus:outline-none"
            type="submit"
          >
            Submit
          </button>
          <button
          className="focus:shadow-outline rounded bg-[#2DD4BF1A] px-4 py-2 font-bold text-teal-200 hover:bg-[#36f4db1a] focus:outline-none"
          type="submit"
        >
          Submit
        </button>
        </>
        ) : (
          <p className="mb-2 block tracking-widest text-teal-200">
            ✓ Thank you for getting in touch!
          </p>
        )}
      </div>
    </form>
  ) : (
    <></>
  );
};

export default Contact;
