import React, { useState } from "react";
import { createContact } from "../utilities/hubspot-test";

export const AddContact = () => {
  const [contact, setContact] = useState({
    email: "",
    firstname: "",
    lastname: "",
    company: "",
    jobtitle: "",
  });

  const handleSubmit = async (evt) => {
    evt.preventDefault();
    await createContact(contact);
  };

  const handleChange = (evt) => {
    const contactData = { ...contact, [evt.target.name]: evt.target.value };
    setContact(contactData);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="firstname"
          value={contact.firstname}
          onChange={handleChange}
          required
          className="w-40"
        />
        <input
          type="text"
          name="lastname"
          value={contact.lastname}
          onChange={handleChange}
          required
        />

        <input
          type="text"
          name="email"
          value={contact.email}
          onChange={handleChange}
          required
        />

        <input
          type="text"
          name="company"
          value={contact.company}
          onChange={handleChange}
          required
        />

        <input
          type="text"
          name="jobtitle"
          value={contact.jobtitle}
          onChange={handleChange}
          required
        />

        <button className="btn btn-ghost btn-xs">submit</button>
      </form>
    </>
  );
};
