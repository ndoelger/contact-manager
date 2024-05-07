import React from "react";

import { deleteContact } from "../utilities/hubspot-test";
import { EditContactLine } from "./EditContactLine";

export const ContactLine = ({
  id,
  firstname,
  lastname,
  email,
  createdAt,
  company,
  jobtitle,
  fetchContacts,
}) => {
  return (
    <>
      <tr>
        <th>
          <label>
            <input type="checkbox" className="checkbox" />
          </label>
        </th>
        <td>
          <div className="flex items-center gap-3">
            {/* <div className="avatar">
            <div className="mask mask-squircle w-12 h-12">
              <img
                src="https://img.daisyui.com/tailwind-css-component-profile-2@56w.png"
                alt="Avatar Tailwind CSS Component"
              />
            </div>
          </div> */}
            <div>
              <div className="font-bold">
                {firstname} {lastname}
              </div>
              <div className="text-sm opacity-50">{email}</div>
            </div>
          </div>
        </td>
        <td>
          {company}
          <br />
          <span className="badge badge-ghost badge-sm">{jobtitle}</span>
        </td>
        <td>{createdAt}</td>
        <td>
          <button
            className="btn btn-ghost btn-xs"
            onClick={() => document.getElementById(`my_modal_${id}`).showModal()}>
            edit{" "}
          </button>
        </td>
        <td>
          <button
            className="btn btn-ghost btn-xs"
            onClick={async () =>  {
              await deleteContact(id);
              await fetchContacts();
            }}>
            {" "}
            delete
          </button>
        </td>
      </tr>
      <EditContactLine
        {...{
          id,
          firstname,
          lastname,
          email,
          company,
          jobtitle,
          fetchContacts,
        }}
      />
    </>
  );
};
