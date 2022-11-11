import React, { useEffect, useState } from "react";
import SearchPanel from "./SearchPanel";

function Search() {
  const [results, setResults] = useState([]);
  const [errors, setErrors] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [showSearchBox, setShowSearchBox] = useState(false);
  const [formData, setFormData] = useState({
    origin: "",
    destination: "",
    departureDate: "",
    numPassengers: "",
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
    let field;
    if (!formData.numPassengers) {
      field = "numPassengers";
    } else if (formData.destination) {
      field = "departureDate";
    } else if (formData.origin) {
      field = "destination";
    } else {
      field = "origin";
    }

    console.log(field);

    setFormData({ ...formData, [field]: id });

    field === "destination" && fetchFlights(id);
    field === "origin" && fetchDestinations(id);
  };

  // Fetch destinations results from API
  const fetchDestinations = (id) => {
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

  const fetchFlights = (destinationId) => {
    setErrors([]);
    setIsLoading(true);
    fetch(
      `/flights?origin=${formData.origin}&destination=${destinationId}`
    ).then((r) => {
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

  // ! TEST
  useEffect(() => {
    console.log(results);
  }, [results, setResults]);
  // ! TEST

  return (
    <div>
      {showSearchBox ? (
        <div>
          <form onSubmit={handleSubmit}>
            <h3>
              {!formData.numPassengers
                ? "How many people in your space party?"
                : !formData.origin
                ? "Where are we blasting off from?"
                : "Great! Where should we land?"}
            </h3>
            {!formData.numPassengers ? (
              <SearchPanel
                inputDataArray={[
                  { id: 1, name: 1 },
                  { id: 2, name: 2 },
                  { id: 3, name: 3 },
                ]}
                handleClick={updateFormDataOnClick}
              />
            ) : (
              <SearchPanel
                inputDataArray={results}
                handleClick={updateFormDataOnClick}
              />
            )}
            <div>
              {formData.returnDate && <button type="submit">Submit</button>}
            </div>
          </form>
          <h1>
            {formData.numPassengers && `passengers: ${formData.numPassengers}`}
          </h1>
          <h1>{formData.origin && `origin: ${formData.origin}`}</h1>
          <h1>
            {formData.destination && `destination: ${formData.destination}`}
          </h1>
          <h1>
            {formData.departureDate && `Departure: ${formData.departureDate}`}
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
