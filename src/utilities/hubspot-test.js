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

const token = process.env.REACT_APP_API_TOKEN;
console.log(token);

export const getContacts = async () => {
  try {
    const response = await axios.get("/crm/v3/objects/contacts", {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    });

    const contacts = response.data.results.map((contact) => {
      return {
        id: contact.id,
        firstname: contact.properties.firstname, // Assuming 'firstname' is correctly populated
        lastname: contact.properties.lastname, // Assuming 'firstname' is correctly populated
        email: contact.properties.email,
        createdAt: contact.createdAt,
      };
    });

    return contacts;
  } catch (error) {
    console.error("Error:", error.response.data); // Handle errors here
  }
};
