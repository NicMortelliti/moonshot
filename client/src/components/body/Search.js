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

  // Update form fields from state
  const handleFormFieldChange = (e) =>
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });

  return <div>Search</div>;
}

export default Search;
