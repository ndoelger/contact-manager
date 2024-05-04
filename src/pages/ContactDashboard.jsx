import React from "react";
import { ContactLine } from "../components/ContactLine";
import { useState, useEffect } from "react";
import { getContacts } from "../utilities/hubspot-test";
import { AddContact } from "../components/AddContact";

export const ContactDashboard = () => {
  const [contacts, setContacts] = useState(null);

  const fetchContacts = async () => {
    const response = await getContacts();
    setContacts(response);
  };

  useEffect(() => {
    fetchContacts();
  }, [contacts]);

  return (
    <div>
      {" "}
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
              <p>Loading contacts...</p>
            )}
          </tbody>
        </table>
        <AddContact />
      </div>
    </div>
  );
};
