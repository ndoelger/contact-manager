import React from "react";
import { Link } from "react-router-dom";
import { ContactLine } from "../components/ContactLine";
import { useState, useEffect } from "react";
import { getContacts } from "../utilities/hubspot-test";
import { AddContact } from "../components/AddContact";

export const ContactDashboard = () => {
  const [contacts, setContacts] = useState(null);

  const [numContacts, setNumContacts] = useState(1);

  const fetchContacts = async () => {
    const response = await getContacts(numContacts);
    setContacts(response);
  };

  useEffect(() => {
    fetchContacts();
    // eslint-disable-next-line
  }, [numContacts]);

  return (
    <div>
      {" "}
      <select
        className="select select-bordered w-full max-w-xs"
        onChange={(e) => setNumContacts(e.target.value)}>
        <option value={1} selected>
          1
        </option>
        <option value={2}>2</option>
        <option value={10}>5</option>
      </select>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>
                <label>
                  <input type="checkbox" className="checkbox" />
                </label>
              </th>
              <th>Name/Email</th>
              <th>Role/Company</th>
              <th>Created</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {contacts ? (
              contacts.map((contact) => (
                <ContactLine
                  key={contact.id}
                  id={contact.id}
                  firstname={contact.firstname}
                  lastname={contact.lastname}
                  email={contact.email}
                  createdAt={contact.createdAt}
                  company={contact.company}
                  jobtitle={contact.jobtitle}
                />
              ))
            ) : (
              <span className="loading loading-dots loading-lg"></span>
            )}
          </tbody>
        </table>
        <Link>
          <div className="join">
            <button className="join-item btn">Load More</button>
          </div>
        </Link>
      </div>
      <AddContact />
    </div>
  );
};
