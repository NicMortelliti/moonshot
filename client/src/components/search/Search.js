import React, { useState } from "react";
import SearchPanel from "./SearchPanel";

function Search() {
  const [results, setResults] = useState([]);
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

  // Update form fields from state
  const handleFormFieldChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  // Display search box and fetch flights from API
  const handleShowSearch = (e) => {
    e.preventDefault();
    setErrors([]);
    setIsLoading(true);
    fetch("/origins").then((r) => {
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

  // Update form data
  const updateFormDataOnClick = (e, id) => {
    e.preventDefault();
    const field = !formData.origin ? "origin" : "destination";

    setFormData({ ...formData, [field]: id });

    fetchResults(field, id);
  };

  // Fetch results from API
  const fetchResults = (field, id) => {
    setErrors([]);
    setIsLoading(true);
    fetch(`/destinations?origin=${id}`).then((r) => {
      setIsLoading(false);
      if (r.ok) {
        r.json().then((data) => {
          setResults(data);
        });
      } else {
        r.json().then((err) => setErrors(err.errors));
      }
    });
  };

  return (
    <div>
      {showSearchBox ? (
        <div>
          <form onSubmit={handleSubmit}>
            <SearchPanel
              inputDataArray={results}
              handleClick={updateFormDataOnClick}
            />
            <div>
              <button type="submit">
                {isLoading ? "Loading..." : "Submit"}
              </button>
            </div>
          </form>
          <h1>{formData.origin && `origin: ${formData.origin}`}</h1>
          <h1>
            {formData.destination && `destination: ${formData.destination}`}
          </h1>
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
