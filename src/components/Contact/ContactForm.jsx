import React, { useRef, useState } from "react";

const ContactForm = ({ contact }) => {
  const formRef = useRef();

  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  // input text change function
  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  return (
    // Sending a message based on your email information from sanity via https://formsubmit.co. contact page
    <form
      ref={formRef}
      action={`https://formsubmit.co/${contact?.email}`}
      method="POST"
      className="mt-12 flex flex-col gap-8"
    >
      <input type="hidden" name="_cc" value="sfloyd59106@email.com"/>
      <label className="flex flex-col">
        <span className="font-medium mb-4">Your Name</span>
        <input
          type="text"
          name="name"
          value={form.name}
          onChange={handleChange}
          placeholder="What's your name?"
          className="contact-input bg-transparent border-2 border-[#4abe611a] py-4 px-6 rounded-lg outline-none font-medium"
        />
      </label>
      <label className="flex flex-col">
        <span className="font-medium mb-4">Your Email</span>
        <input
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          placeholder="What's your web address?"
          className="contact-input bg-transparent border-2 border-[#4abe611a] py-4 px-6 rounded-lg outline-none font-medium"
        />
      </label>
      <label className="flex flex-col">
        <span className="font-medium mb-4">Your Message</span>
        <textarea
          rows={7}
          name="message"
          value={form.message}
          onChange={handleChange}
          placeholder="What you want to say?"
          className="contact-input bg-transparent border-2 border-[#4abe611a] py-4 px-6 resize-none rounded-lg outline-none font-medium"
        />
      </label>

      <button
        type="submit"
        className="contact-button text-white transition-all ease-in duration-200 bg-[#2a863c] hover:bg-[#1e7930] py-3 px-8 rounded-xl outline-none w-fit font-bold shadow-md"
      >
        Send
      </button>
    </form>
  );
};

export default ContactForm;
