import React from "react";
import { useState } from "react";
import { updateContact } from "../utilities/hubspot-test";

export const EditContactLine = ({ id, firstname, lastname, email }) => {
  const [contact, setContact] = useState({ firstname, lastname, email });

  const handleSubmit = async (evt) => {
    evt.preventDefault();
    await updateContact(id, contact);
  };

  const handleChange = (evt) => {
    const contactData = { ...contact, [evt.target.name]: evt.target.value };
    setContact(contactData);
  };

  return (
    <div>
      EditContact
      <form onSubmit={handleSubmit}>
        <label>
          Email{" "}
          <input
            type="text"
            name="email"
            value={contact.email}
            onChange={handleChange}
            required
          />
        </label>
        <br />
        <label>
          First Name{" "}
          <input
            type="text"
            name="firstname"
            value={contact.firstname}
            onChange={handleChange}
            required
          />
        </label>
        <br />
        <label>
          Last Name{" "}
          <input
            type="text"
            name="lastname"
            value={contact.lastname}
            onChange={handleChange}
            required
          />
        </label>
        <button type="submit"></button>
      </form>
    </div>
  );
};
