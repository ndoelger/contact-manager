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
  }, []);

  return (
    <div>
      {contacts ? (
        contacts.map((contact) => (
          <ContactLine
            key={contact.id}
            id={contact.id}
            firstName={contact.firstName}
            lastName={contact.lastName}
            email={contact.email}
            createdAt={contact.createdAt}
          />
        ))
      ) : (
        <p>Loading contacts...</p>
      )}
      <AddContact />
    </div>
  );
};
