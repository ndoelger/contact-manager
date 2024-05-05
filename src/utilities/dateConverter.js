export const dateCoverter = (dateInput) => {
  const date = new Date(dateInput);

  const formattedDate = date
    .toLocaleDateString(undefined, {
      month: "2-digit",
      day: "2-digit",
      year: "2-digit",
    })
    .replace(",", ""); // Remove the comma after the year

  const formattedTime = date.toLocaleTimeString(undefined, {
    hour: "numeric",
    minute: "2-digit",
  });

  const formattedDateTime = `${formattedDate} ${formattedTime}`;

  return formattedDateTime; // Output: 04/27/24 7:31 PM
};
