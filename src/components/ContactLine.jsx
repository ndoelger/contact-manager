import React from "react";

export const ContactLine = ({ id, firstname, lastname, email, createdAt }) => {
  return (
    <div key={id}>
      <p>
        Name: {firstname} {lastname}
      </p>
      <p>Email: {email}</p>
    </div>
  );
};
