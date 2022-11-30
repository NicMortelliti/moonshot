export const handleResponse = (res) => {
  if (res.ok) {
    return res.json().then((results) => results);
  } else {
    return res.json().then((results) => Promise.reject(results));
  }
};
