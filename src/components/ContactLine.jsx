import React from "react";
import { deleteContact } from "../utilities/hubspot-test";
import { EditContactLine } from "./EditContactLine";

export const ContactLine = ({ id, firstname, lastname, email, createdAt }) => {
  return (
    <>
      <div key={id}>
        <p>
          Name: {firstname} {lastname}
        </p>
        <p>Email: {email}</p>
        <button onClick={() => deleteContact(id)}>Delete</button>
      </div>
      <EditContactLine {...{ id, firstname, lastname, email }} />
    </>
  );
};
