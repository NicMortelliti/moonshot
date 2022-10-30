import React, { useState } from "react";
import ButtonTile from "../widgets/ButtonTile";

function Search({ results, setResults }) {
  const [errors, setErrors] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [showSearchBox, setShowSearchBox] = useState(false);
  const [origins, setOrigins] = useState([]);
  const [destinations, setDestinations] = useState([]);
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
      [e.target.id]: value,
    });
  };

  // Display search box and fetch flights from API
  const handleShowSearch = (e) => {
    e.preventDefault();
    setErrors([]);
    setIsLoading(true);
    fetch("/flights").then((r) => {
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

  // Find unique locations
  const uniqueLocations = (flights) => {
    let origins = [];
    let destinations = [];
    flights.map((each) => {
      !origins.includes(each.origin.name) && origins.append(each.origin);
    });
    console.log(origins)
  };

  // Display available choices to user
  const RenderChoicePanel = (id) =>
    results.map((each) => {
      return (
        <ButtonTile
          id={each.id}
          title={each.name}
          subtitle={each.macro_place}
          handleClick={fetchDataFromAPI}
        />
      );
    });

  return (
    <div>
      {showSearchBox ? (
        <div>
          <form onSubmit={handleSubmit}>
            <RenderChoicePanel />
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
