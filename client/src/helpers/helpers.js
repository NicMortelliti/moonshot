import Moment from "react-moment";

// Handle API response
export const handleResponse = (res) => {
  if (res.ok) {
    return res.json().then((results) => results);
  } else {
    return res.json().then((results) => Promise.reject(results));
  }
};

// Format date
export const formatDate = (date) => (
  <Moment format="ddd, MMM DD, YYYY">{new Date(date)}</Moment>
);

// Short format date
export const shortFormatDate = (date) => (
  <Moment format="MMM DD, YYYY">{new Date(date)}</Moment>
);

// Capitalize the first letter of the string
export const capitalize = (string) =>
  string.charAt(0).toUpperCase() + string.slice(1);
