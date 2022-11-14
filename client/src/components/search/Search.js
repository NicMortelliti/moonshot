import React, { useEffect, useState } from "react";

// Custom components
import SearchLocation from "./SearchLocation";
import SearchNumber from "./SearchNumber";
import SearchFlights from "./SearchFlights";

function Search({ user }) {
  const [apiResults, setApiResults] = useState("");
  const [flightResults, setFlightResults] = useState("");
  const [selectedNumPassengers, setSelectedNumPassengers] = useState("");
  const [selectedOrigin, setSelectedOrigin] = useState("");
  const [selectedDestination, setSelectedDestination] = useState("");
  const [selectedFlight, setSelectedFlight] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState([]);

  // Populate locations state when component loads
  useEffect(() => {
    fetch("/locations")
      .then((response) => response.json())
      .then((results) => setApiResults(results));
  }, []);

  // Fetch flights matching search criteria
  const getFlights = () => {
    const url = `/flights?num_passengers=${selectedNumPassengers}&origin=${selectedOrigin.id}&destination=${selectedDestination.id}`;
    fetch(url)
      .then((response) => response.json())
      .then((results) => setFlightResults(results));
  };

  // Post reservation to backend
  const submitBooking = (e) => {
    e.preventDefault();

    setIsLoading(true);

    fetch("/reservations", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        user_id: user.id,
        flight_id: selectedFlight.id,
      }),
    }).then((r) => {
      setIsLoading(false);
      if (r.ok) {
        r.json().then((results) => console.log(results));
      } else {
        r.json().then((err) => setErrors(err.errors));
      }
    });
  };

  return (
    <div>
      <form onSubmit={(e) => submitBooking(e)}>
        {!selectedNumPassengers ? (
          <SearchNumber min={1} max={6} setter={setSelectedNumPassengers} />
        ) : null}
        {selectedNumPassengers && !selectedOrigin ? (
          <SearchLocation
            data={apiResults}
            setter={setSelectedOrigin}
            blockedLocation="null"
          />
        ) : null}
        {selectedOrigin && !selectedDestination ? (
          <SearchLocation
            data={apiResults}
            setter={setSelectedDestination}
            blockedLocation={selectedOrigin}
          />
        ) : null}
        {selectedDestination && !flightResults ? getFlights() : null}
        {flightResults ? (
          <SearchFlights data={flightResults} setter={setSelectedFlight} />
        ) : null}
        {selectedFlight ? (
          <button type="submit">
            {isLoading ? "Loading..." : "Book Flight!"}
          </button>
        ) : null}
      </form>
      {selectedNumPassengers && <p>{selectedNumPassengers}</p>}
      {selectedOrigin && <p>{selectedOrigin.id}</p>}
      {selectedDestination && <p>{selectedDestination.id}</p>}
      {selectedFlight && <p>{selectedFlight.id}</p>}
      {errors ? errors.map((each) => <p key={each}>each</p>) : null}
    </div>
  );
}

export default Search;
