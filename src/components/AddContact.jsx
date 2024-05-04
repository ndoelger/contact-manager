import React, { useState } from "react";
import { createContact } from "../utilities/hubspot-test";

export const AddContact = () => {
  const [contact, setContact] = useState({
    email: "email",
    firstname: "first name",
    lastname: "last name",
    company: "company",
    jobtitle: "jobtitle",
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
        <tr>
          <th>
            <label>
              <input type="checkbox" className="checkbox" />
            </label>
          </th>
          <td>
            <div className="flex items-center gap-3">
              {/* <div className="avatar">
                <div className="mask mask-squircle w-12 h-12">
                  <img
                    src="https://img.daisyui.com/tailwind-css-component-profile-2@56w.png"
                    alt="Avatar Tailwind CSS Component"
                  />
                </div>
              </div> */}
              <div>
                <div className="font-bold">
                  <input
                    type="text"
                    name="firstname"
                    value={contact.firstname}
                    onChange={handleChange}
                    required
                  />
                  <input
                    type="text"
                    name="lastname"
                    value={contact.lastname}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="text-sm opacity-50">
                  {" "}
                  <input
                    type="text"
                    name="email"
                    value={contact.email}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
            </div>
          </td>
          <td>
            <input
              type="text"
              name="company"
              value={contact.company}
              onChange={handleChange}
              required
            />
          </td>
          <td>
            <input
              type="text"
              name="jobtitle"
              value={contact.jobtitle}
              onChange={handleChange}
              required
            />
          </td>
          <th>
            <button className="btn btn-ghost btn-xs">submit</button>
          </th>
        </tr>{" "}
      </form>
    </>
  );
};
