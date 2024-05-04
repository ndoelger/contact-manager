import React from "react";
import { deleteContact } from "../utilities/hubspot-test";

export const ContactLine = ({ id, firstName, lastName, email, createdAt }) => {

  return (
    <div key={id}>
      <p>
        Name: {firstName} {lastName}
      </p>
      <p>Email: {email}</p>
      <button onClick={() => deleteContact(id)}>Delete</button>
    </div>
  );
};
