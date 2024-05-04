import React from "react";

export const ContactLine = ({ id, firstName, lastName, email, createdAt }) => {
  return (
    <div key={id}>
      <p>
        Name: {firstName} {lastName}
      </p>
      <p>Email: {email}</p>
    </div>
  );
};
