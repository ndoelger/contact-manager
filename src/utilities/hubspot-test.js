// const hubspot = require("@hubspot/api-client");
// const hubspotClient = new hubspot.Client({
// });

// const limit = 10;
// const after = undefined;
// const properties = ["firstname"];
// const propertiesWithHistory = undefined;
// const associations = undefined;
// const archived = false;

// const getContacts = async () => {
//   try {
//     const apiResponse = await hubspotClient.crm.contacts.basicApi.getPage(
//       limit,
//       after,
//       properties,
//       propertiesWithHistory,
//       associations,
//       archived
//     );
//     // console.log(apiResponse.properties);
//     // console.log(JSON.stringify(apiResponse, null, 2));
//     const contacts = apiResponse.results.map((contact) => {
//       return {
//         id: contact.id,
//         firstname: contact.properties.firstname, // Assuming 'firstname' is correctly populated
//         createdAt: contact.createdAt,
//         updatedAt: contact.updatedAt,
//       };
//     });
//     console.log(contacts);
//   } catch (e) {
//     e.message === "HTTP request failed"
//       ? console.error(JSON.stringify(e.response, null, 2))
//       : console.error(e);
//   }
// };

import axios from "axios";
import { dateCoverter } from "./dateConverter";

const token = process.env.REACT_APP_API_TOKEN;

export const getContacts = async (numContacts = 25) => {
  try {
    const response = await axios.get(
      `/crm/v3/objects/contacts/?limit=${numContacts}&properties=email,firstname,lastname,jobtitle,company`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      }
    );
    console.log(response);
    const contacts = response.data.results.map((contact) => {
      return {
        id: contact.id,
        firstname: contact.properties.firstname, // Assuming 'firstname' is correctly populated
        lastname: contact.properties.lastname, // Assuming 'firstname' is correctly populated
        email: contact.properties.email,
        createdAt: dateCoverter(contact.createdAt),
        company: contact.properties.company,
        jobtitle: contact.properties.jobtitle,
      };
    });
    if (response.data.paging) contacts.after = response.data.paging.next.after;
    console.log(contacts);
    return contacts;
  } catch (error) {
    console.error("Error:", error.response.data); // Handle errors here
  }
};

export const createContact = async (properties) => {
  // console.log(properties);
  try {
    const response = await axios.post(
      "/crm/v3/objects/contacts",
      {
        properties,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      }
    );
    console.log(response.data);
  } catch (error) {
    console.error("Error:", error.response.data.message); // Handle errors here
  }
};

export const deleteContact = async (id) => {
  try {
    await axios.delete(`/crm/v3/objects/contacts/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    console.log("Deleted contact:", id);
  } catch (error) {
    console.error("Error:", error.response.data); // Handle errors here
  }
};

export const updateContact = async (id, properties) => {
  try {
    const response = await axios.patch(
      `/crm/v3/objects/contacts/${id}`,
      {
        properties,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      }
    );
    console.log(response.data);
  } catch (error) {
    console.error("Error:", error.response.data); // Handle errors here
  }
};
