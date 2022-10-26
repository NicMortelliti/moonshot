import React, { useState } from "react";

function Search({ setResults }) {
  const [errors, setErrors] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    origin: "",
    destination: "",
    roundTrip: true,
    departureDate: "",
    returnDate: "",
    numPassengers: 1,
  });

  // Send search params to API
  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors([]);
    setIsLoading(true);

    // Construct url string with search params
    const url = `/flights
    ?origin=${formData.origin}
    &destination=${formData.destination}
    &departure=${formData.departureDate}
    &return=${formData.returnDate}
    &num_pax=${formData.numPassengers}`;

    fetch(url).then((r) => {
      setIsLoading(false);
      if (r.ok) {
        r.json().then((results) => setResults(results));
      } else {
        r.json().then((err) => setErrors(err.errors));
      }
    });
  };

  // Update form fields from state
  const handleFormFieldChange = (e) => {
    // Set value according to input type
    const value =
      e.target.type === "checkbox" ? e.target.checked : e.target.value;

    setFormData({
      ...formData,
      [e.target.id]: value,
    });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Origin
          <input
            id="origin"
            type="text"
            value={formData.origin}
            onChange={(e) => handleFormFieldChange(e)}
          />
        </label>
        <label>
          Destination
          <input
            id="destination"
            type="text"
            value={formData.destination}
            onChange={(e) => handleFormFieldChange(e)}
          />
        </label>
        <label>
          Round Trip?
          <input
            id="roundTrip"
            type="checkbox"
            checked={formData.roundTrip}
            onChange={(e) => handleFormFieldChange(e)}
          />
        </label>
        <label>
          Depart
          <input
            id="departureDate"
            type="date"
            value={formData.departureDate}
            onChange={(e) => handleFormFieldChange(e)}
          />
        </label>
        {/* Only display return field if roundtrip is true */}
        {formData.roundTrip && (
          <label>
            Return
            <input
              id="returnDate"
              type="date"
              value={formData.returnDate}
              onChange={(e) => handleFormFieldChange(e)}
            />
          </label>
        )}
        <label>
          Number of Passengers
          <input
            id="numPassengers"
            type="number"
            value={formData.numPassengers}
            onChange={(e) => handleFormFieldChange(e)}
          />
        </label>
        <div>
          <button type="submit">{isLoading ? "Loading..." : "Submit"}</button>
        </div>
      </form>
      {errors.map((err) => (
        <p key={err}>{err}</p>
      ))}
    </div>
  );
}

export default Search;
