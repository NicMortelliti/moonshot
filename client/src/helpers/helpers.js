export const handleResponse = (res) => {
  if (res.ok) {
    return res;
  } else {
    return Promise.reject(res);
  }
};
