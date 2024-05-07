import React from "react";
import { useState } from "react";
import { updateContact } from "../utilities/hubspot-test";

export const EditContactLine = ({
  id,
  firstname,
  lastname,
  email,
  company,
  jobtitle,
  fetchContacts,
}) => {
  const [contact, setContact] = useState({
    firstname,
    lastname,
    email,
    company,
    jobtitle,
  });

  const handleSubmit = async (evt) => {
    evt.preventDefault();
    await updateContact(id, contact);
    await fetchContacts();
  };

  const handleChange = (evt) => {
    const contactData = { ...contact, [evt.target.name]: evt.target.value };
    setContact(contactData);
  };

  return (
    <dialog id={`my_modal_${id}`} className="modal">
      <div className="modal-box">
        <h3 className="font-bold text-lg">Edit Contact</h3>
        <p className="py-4">Press ESC key or click the button below to close</p>
        <div className="modal-action">
          <form className="grid" onSubmit={handleSubmit}>
            <label>
              Email{" "}
              <input
                type="text"
                name="email"
                value={contact.email}
                onChange={handleChange}
                required
                className="w-30 input input-bordered max-w-xs"
              />
            </label>

            <label>
              First Name{" "}
              <input
                type="text"
                name="firstname"
                value={contact.firstname}
                onChange={handleChange}
                required
                className="w-30 input input-bordered max-w-xs"
              />
            </label>

            <label>
              Last Name{" "}
              <input
                type="text"
                name="lastname"
                value={contact.lastname}
                onChange={handleChange}
                required
                className="w-30 input input-bordered max-w-xs"
              />
            </label>
            <label>
              Company{" "}
              <input
                type="text"
                name="company"
                value={contact.company}
                onChange={handleChange}
                required
                className="w-30 input input-bordered max-w-xs"
              />
            </label>
            <label>
              Job Title{" "}
              <input
                type="text"
                name="jobtitle"
                value={contact.jobtitle}
                onChange={handleChange}
                required
                className="w-30 input input-bordered max-w-xs"
              />
            </label>
            <button className="text-blue-600 btn" type="submit">
              Edit
            </button>
          </form>
        </div>
      </div>
    </dialog>
  );
};
