import "../../styles/fonts.css";

import { useState } from "react";

interface ContactProps {
  contactIsShowing: boolean;
  setcontactIsShowing: Function;
}

export const Contact: React.FC<ContactProps> = ({
  contactIsShowing,
  setcontactIsShowing,
}) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Add form submission logic here
    console.log("Form data submitted:", formData);
  };

  const bgStyle = "focus:shadow-outline w-full appearance-none rounded bg-slate-50 bg-opacity-10 px-3 py-2 leading-tight text-slate-50 shadow focus:outline-none"

  return contactIsShowing ? (
    <form onSubmit={handleSubmit}>
      <div className="mb-4">
        <div className="grid grid-cols-2">
          <label
            className="mb-2 block tracking-widest text-slate-100"
            htmlFor="name"
          >
            Name
          </label>
          <p
            className="mb-2 block cursor-pointer text-right tracking-widest text-slate-100 hover:text-slate-400"
            onClick={() => setcontactIsShowing(false)}
          >
            [Close]
          </p>
        </div>
        <input
          type="text"
          id="name"
          name="name"
          className={bgStyle}
          value={formData.name}
          onChange={handleChange}
          required
        />
      </div>
      <div className="mb-4">
        <label
          className="mb-2 block tracking-widest text-slate-50"
          htmlFor="email"
        >
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          className={bgStyle}
          value={formData.email}
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
        <button
          className="focus:shadow-outline rounded bg-[#2DD4BF1A] px-4 py-2 font-bold text-teal-200 hover:bg-[#36f4db1a] focus:outline-none"
          type="submit"
        >
          Submit
        </button>
      </div>
    </form>
  ) : (
    <></>
  );
};

export default Contact;
