import React from "react";

export const Navigation = ({ setNumContacts }) => {
  return (
    <select
      className="select select-bordered w-full max-w-xs"
      onChange={(e) => setNumContacts(e.target.value)}>
      <option value={1} selected>
        25
      </option>
      <option value={2}>50</option>
      <option value={10}>100</option>
    </select>
  );
};
