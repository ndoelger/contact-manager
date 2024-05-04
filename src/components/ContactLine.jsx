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
}) => {
  return (
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
      <th>
        <button
          className="btn btn-ghost btn-xs"
          onClick={() => deleteContact(id)}>
          {" "}
          delete
        </button>
      </th>
    </tr>
  );
};
