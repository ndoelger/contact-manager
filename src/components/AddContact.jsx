import React, { useState } from "react";
import { createContact } from "../utilities/hubspot-test";

export const AddContact = ({ fetchContacts }) => {
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
    await fetchContacts();
    setContact({
      email: "",
      firstname: "",
      lastname: "",
      company: "",
      jobtitle: "",
    });
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
          // required
          className="w-30 input input-bordered max-w-xs"
          placeholder="First Name"
        />
        <input
          type="text"
          name="lastname"
          value={contact.lastname}
          onChange={handleChange}
          // required
          className="w-30 input input-bordered max-w-xs"
          placeholder="Last Name"
        />

        <input
          type="text"
          name="email"
          value={contact.email}
          onChange={handleChange}
          required
          className="w-30 input input-bordered max-w-xs"
          placeholder="Email"
        />

        <input
          type="text"
          name="company"
          value={contact.company}
          onChange={handleChange}
          // required
          className="w-30 input input-bordered max-w-xs"
          placeholder="Company"
        />

        <input
          type="text"
          name="jobtitle"
          value={contact.jobtitle}
          onChange={handleChange}
          // required
          placeholder="Job Title"
          className="w-30 input input-bordered max-w-xs"
        />

        <button className="btn btn-ghost btn-xs">submit</button>
      </form>
    </>
  );
};
