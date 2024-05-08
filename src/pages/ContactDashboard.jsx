import React from "react";
import { ContactLine } from "../components/ContactLine";
import { useState, useEffect } from "react";
import { getContacts } from "../utilities/hubspot-test";
import { AddContact } from "../components/AddContact";
import { Navigation } from "../components/Navigation";
import { LoadMore } from "../components/LoadMore";


export const ContactDashboard = () => {
  const [contacts, setContacts] = useState(null);

  const [numContacts, setNumContacts] = useState(1);

  const fetchContacts = async () => {
    const response = await getContacts(numContacts);
    setContacts(response);
  };

  const fetchMoreContacts = async () => {
    const nextResponse = await getContacts(numContacts, contacts.after);
    console.log(contacts);
    console.log(nextResponse);
    const updatedContacts = {
      ...contacts,
      // ...nextResponse, // Merging the results arrays
      // after: nextResponse.after, // Updating the pagination cursor
    };

    // console.log(updatedContacts);
    // setContacts({...contacts, nextResponse});
    // console.log(contacts)
  };

  useEffect(() => {
    fetchContacts();
    console.log(contacts);
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
      <LoadMore fetchMoreContacts={fetchMoreContacts} />
      <AddContact fetchContacts={fetchContacts} />
    </div>
  );
};
