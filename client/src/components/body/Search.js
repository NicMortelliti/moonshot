import React, { useState } from "react";

function Search() {
  const [formData, setFormData] = useState({
    origin: "",
    destination: "",
    roundTrip: "",
    depart: "",
    return: true,
    numPassengers: 1,
  });
  return <div>Search</div>;
}

export default Search;
