import Moment from "react-moment";

// **********************************
// * API response handling
// **********************************
// Handle API response
export const handleResponse = (res) => {
  if (res.ok) {
    return res.json().then((results) => results);
  } else {
    return res.json().then((results) => Promise.reject(results));
  }
};

// **********************************
// * Date formatting
// **********************************
// Short format date
export const formatDate = (date, format) => {
  switch (format) {
    // Return year (YYYY)
    case "year":
      return <Moment format="YYYY">{new Date(date)}</Moment>;

    // Return month and day number (MMM DD)
    case "monthDay":
      return <Moment format="MMM DD">{new Date(date)}</Moment>;

    // Return short date with year, month and day number (MMM DD, YYYY)
    case "short":
      return <Moment format="MMM DD, YYYY">{new Date(date)}</Moment>;

    // Return date formatted day name, month, day number and year (ddd, MMM DD, YYYY)
    default:
      return <Moment format="ddd, MMM DD, YYYY">{new Date(date)}</Moment>;
  }
};

// **********************************
// * String formatting
// **********************************
// Capitalize the first letter of the string
export const capitalize = (string) =>
  string.charAt(0).toUpperCase() + string.slice(1);
