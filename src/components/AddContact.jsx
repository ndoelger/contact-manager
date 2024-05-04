import React, { useState } from "react";
import { createContact } from "../utilities/hubspot-test";

export const AddContact = () => {
  const [contact, setContact] = useState({
    email: "",
    firstname: "",
    lastname: "",
  });

  const handleSubmit = async (evt) => {
    evt.preventDefault()
    await createContact(contact)

  };

  const handleChange = (evt) => {
    const contactData = { ...contact, [evt.target.name]: evt.target.value };
    setContact(contactData);
  };

  return (
    <div>
      AddContact
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
