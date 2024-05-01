import React from "react";
import { ContactLine } from "../components/ContactLine";
import { useState, useEffect } from "react";
import { getContacts } from "../utilities/hubspot-test";

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
            firstname={contact.firstname}
            lastname={contact.lastname}
            email={contact.email}
            createdAt={contact.createdAt}
          />
        ))
      ) : (
        <p>Loading contacts...</p>
      )}
    </div>
  );
};
