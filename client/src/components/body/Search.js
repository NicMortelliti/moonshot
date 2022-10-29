import React, { useEffect, useState } from "react";

function Search({ results, setResults }) {
  const [errors, setErrors] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [showSearchBox, setShowSearchBox] = useState(false);
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
    const url = [
      `/flights?`,
      `origin=${formData.origin}`,
      `&destination=${formData.destination}`,
      `&departure=${formData.departureDate}`,
      `&return=${formData.returnDate}`,
      `&num_pax=${formData.numPassengers}`,
    ];

    fetch(url.join("")).then((r) => {
      setIsLoading(false);
      if (r.ok) {
        r.json().then((results) => setResults(results));
      } else {
        r.json().then((err) => setErrors(err.errors));
      }
    });
  };
  useEffect(() => {
    console.log(formData);
  }, [formData, setFormData]);

  // Update form fields from state
  const handleFormFieldChange = (e) => {
    // Set value according to input type
    const value =
      e.target.type === "checkbox" ? e.target.checked : e.target.value;

    setFormData({
      ...formData,
      [e.target.id]: value,
    });
    console.log(e);
  };

  // Display search box and fetch origins from API
  const handleShowSearch = (e) => {
    e.preventDefault();
    setErrors([]);
    setIsLoading(true);
    fetch("/locations").then((r) => {
      setIsLoading(false);
      if (r.ok) {
        r.json()
          .then((data) => setResults(data))
          .then(() => setShowSearchBox(true));
      } else {
        r.json().then((err) => setErrors(err.errors));
      }
    });
  };

  // Display available choices to user
  const RenderChoicePage = (id) =>
    results.map((each) => {
      return (
        <button
          key={each.id}
          id={id}
          value={each.id}
          onClick={() => setFormData({ ...formData, origin: each.name })}>
          <h4>{each.name}</h4>
          <h5>{each.macro_place}</h5>
        </button>
      );
    });

  return (
    <div>
      {showSearchBox ? (
        <div>
          <form onSubmit={handleSubmit}>
            {/* <label>
              Origin
              <input
                id="origin"
                type="text"
                value={formData.origin}
                onChange={(e) => handleFormFieldChange(e)}
              />
            </label> */}
            <RenderChoicePage id="origin" />
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
              <button type="submit">
                {isLoading ? "Loading..." : "Submit"}
              </button>
            </div>
          </form>
          {errors.map((err) => (
            <p key={err}>{err}</p>
          ))}
        </div>
      ) : (
        <button onClick={(e) => handleShowSearch(e)}>
          {isLoading ? "Loading..." : "Search"}
        </button>
      )}
    </div>
  );
}

export default Search;
