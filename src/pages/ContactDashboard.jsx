import React from "react";
import { ContactLine } from "../components/ContactLine";
import { useState, useEffect } from "react";
import { getContacts } from "../utilities/hubspot-test";
import { AddContact } from "../components/AddContact";
import { Navigation } from "../components/Navigation";
import { LoadMore } from "../components/LoadMore";

export const ContactDashboard = () => {
  const [contacts, setContacts] = useState(null);

  const [numContacts, setNumContacts] = useState(2);

  const fetchContacts = async () => {
    const response = await getContacts(numContacts);
    console.log(response);
    setContacts(response);
  };

  const fetchMoreContacts = async () => {
    const nextResponse = await getContacts(numContacts, contacts.after);
    console.log("contact", contacts);
    console.log("new contact", nextResponse);
    const updatedContacts = [
      ...contacts,
      ...nextResponse, // Merging the results arrays

      // after: nextResponse.after, // Updating the pagination cursor
    ];
    updatedContacts.after = nextResponse.after;
    console.log("updated contacts", updatedContacts);
    setContacts(updatedContacts);
    // console.log(contacts)
  };

  useEffect(() => {
    fetchContacts();
    // eslint-disable-next-line
  }, [numContacts]);

  return (
    <div>
      {" "}
      <Navigation setNumContacts={setNumContacts} />
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
                  fetchContacts={fetchContacts}
                />
              ))
            ) : (
              <span className="loading loading-dots loading-lg"></span>
            )}
          </tbody>
        </table>
      </div>
      {contacts.after && <LoadMore fetchMoreContacts={fetchMoreContacts} />}
      <AddContact fetchContacts={fetchContacts} />
    </div>
  );
};
